'use client'
import './app.css';
import React, { useEffect, useRef, useState } from 'react';
import { toBlobURL } from '@ffmpeg/util';
import { FFmpeg, fetchFile } from "@ffmpeg/ffmpeg"
import { Download, Upload } from 'lucide-react';
import { SpinningAtom } from './components/SpinningAtom';

// project is converted to one where users can watermark video files
// why is the main app this bloated? Trust me I'm trying to decentralize this thing. I need these function elsewhere but we can't all be winners
export default function App() {
  const [ loaded, setLoaded ] = useState(false);
  const [video, setVideo ] = useState();
  const [ result, setResult ] = useState();
  const messageRef  = useRef(null);
  const ffmpegRef  = useRef(new FFmpeg());
  // display the video once selected as input
  const load = async () => {
    const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      console.log(message);
    })
     // This just prevents the CORS error. Please i wasted 3-5 hours on this. I should have read the docs.
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, `text/javascript`),
      wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, `application/wasm`)
    })

    setLoaded(true)
  }
  // wasm + ffmpeg binaries should load first (asynchronously)
  useEffect(() => {
    load();
  }, [])

  const GenerateRandomFileName = () => {
    // this selects a  random name for the output file. I assume users will use my app a lot thus the more names, the better
    const names = ["for_revered_biggydog", "for_wild_anon", "for_cracked_user", "for_loyal_customer", "for_king_kracker"];
    const index = Math.floor(Math.random() * names.length)
    console.log(`Output video is ${names[index]}.gif`)
    return `${names[index]}.gif`
  }


const WaterMarkWithText = async () => {
  try {
    const ffmpeg = ffmpegRef.current;
    if (!ffmpeg) throw new Error("FFmpeg instance not initialized");

    const inputFile = `input${video.name.substr(video.name.lastIndexOf("."))}`;
    const outputFile = GenerateRandomFileName();  // Ensure this generates a .mp4 file

    console.log(`Adding watermark text`);

    const arrayBuffer = await video.arrayBuffer();

     await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    
    // Modify the drawtext filter
     await ffmpeg.exec([
     "-i", inputFile, "-t", `2.5`,
     "-ss", "2.5",
     "-f", "gif",
     outputFile
     ]);

    const data = await ffmpeg.readFile(outputFile);
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    console.log(`Successfully added watermark text`);
    setResult(url);

  } catch (error) {
    console.error(`Error occurred during watermark addition: ${error.message}`);
    if (messageRef.current) {
      messageRef.current.innerHTML = `Error: ${error.message}`;
    }
  }
};  return loaded ? (
    <>
    <div className="App" style={{minHeight: "100vh"}}>
        <input type='file' onChange={(e) => setVideo(e.target.files?.item(0))} /><br/>
        <div className='App flex justify-center'>
        {video && <video src={URL.createObjectURL(video)} width={250} controls />}
        </div>
        <button onClick={WaterMarkWithText} className='p-4 rounded-lg bg-blue-500 text-white my-5 hover:bg-blue-700'>Click me!</button>
      <h2 className='text-2xl font-bold my-5'>Result Video: </h2>
        <div className='flex justify-center'>
        {result && <img src={result} width='250' alt="converted to gif" />}
        </div>
    </div>

      <button className='fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded' >Generate</button>
      <input className='fixed bottom-20 left-4 text-black bg-white p-2 rounded-lg' placeholder='add watermark' />
      <button className='fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'><Upload className='h-10 w-10' /></button>
      <button className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'><Download className='h-10 w-10' /></button>
    </>
  ) : (<SpinningAtom />);
}
