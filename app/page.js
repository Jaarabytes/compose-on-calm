'use client'
import './app.css';
import React, { useEffect, useRef, useState } from 'react';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { FFmpeg } from "@ffmpeg/ffmpeg"
import { Download, Upload } from 'lucide-react';
import { SpinningAtom } from './components/SpinningAtom';
import { document } from 'postcss';

// project is converted to one where users can watermark video files
export default function App() {
  const [ loaded, setLoaded ] = useState(false);
  const [watermarkText, setWatermarkText] = useState('Default watermark')
  const [video, setVideo ] = useState();
  const [videoUrl, setVideoUrl] = useState()
  const videoRef = useRef(null);
  const messageRef  = useRef(null);
  const ffmpegRef  = useRef(new FFmpeg());
  const fileInputRef = useRef(null);
  // display the video once selected as input
  const load = async () => {
    const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
       messageRef.current.innerHTML = message;
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

const generateRandomFileName = () => {
  const names = ["for_revered_biggydog", "for_wild_anon", "for_cracked_user", "for_loyal_customer", "for_king_kracker"];
  const index = Math.floor(Math.random() * names.length)
  console.log(`Output video is ${names[index]}.mp4`)
  return `${names[index]}.mp4`
}

const handleIconClick = () => {
  fileInputRef.current.click();
}

const handleWatermarkText = (event) => {
  setWatermarkText(event.target.value);
}

const handleDownload = () => {
  if (videoRef.current) {
    const videoSrc = videoRef.current.currentSrc;
    const link = document.createElement('a');
    link.href = videoSrc;
    link.download = generateRandomFileName(); 
    link.click();
  }
}

const addWatermark = async () => {
  try {
    const ffmpeg = ffmpegRef.current;
    if (!ffmpeg) throw new Error("FFmpeg instance not initialized");

    // Log the start of watermark addition
    console.log(`Adding watermark text`);
    setVideoUrl(URL.createObjectURL(video))
    await ffmpeg.writeFile('input.mp4', await fetchFile(videoUrl));
    await ffmpeg.writeFile('arial.ttf', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/arial.ttf'));
    const outputFileName = generateRandomFileName();
    // Apply watermark with drawtext filter
    await ffmpeg.exec([
      "-i", 'input.mp4',
      "-vf", `drawtext=fontfile=/arial.ttf:text=\'${watermarkText}\':x=10:y=10:fontsize=24:fontcolor=white`,
      'output.mp4'
    ]);

    // Read the output file from FFmpeg
    const data = await ffmpeg.readFile('output.mp4');
    console.log(`Successfully added watermark text`);
    videoRef.current.src = URL.createObjectURL(new Blob([data.buffer], {type : 'video/mp4'})) ;

  } catch (error) {
    // Log and handle errors
    console.error(`Error occurred during watermark addition: ${error.message}`);
    if (messageRef.current) {
      messageRef.current.innerHTML = `Error: ${error.message}`;
    }
  }
};
 return loaded ? (
    <>
    <div className="App my-5" style={{minHeight: "100vh"}}>
        <div className='App flex justify-center'>
        {video && <video src={URL.createObjectURL(video)} width={250} controls />}
        </div>
        <p><b>Water mark text:</b><br /> {watermarkText}</p>
        <button onClick={() => addWatermark(watermarkText)} className='p-4 rounded-lg bg-blue-500 text-white my-5 hover:bg-blue-700'>Convert !</button>
      <p ref={messageRef}></p>
      <p className='font-bold '>If it says 'undefined', just click it again</p>
      <h2 className='text-2xl font-bold my-5'>Result Video: </h2>
        <div className='flex justify-center'>
        {videoRef && <video ref={videoRef} width={250} controls />}
        </div>
    </div>

      <button className='fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'>Generate</button>
      <input className='fixed bottom-20 left-4 border-2 border-blue-500 text-black bg-white p-2 rounded-lg' placeholder='add watermark'
        value={watermarkText} onChange={handleWatermarkText}
        />
      <div className='fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'>
      <Upload className='h-10 w-10' onClick={handleIconClick}  style={{cursor: "pointer"}} />
      <input type='file' ref={fileInputRef} style={{display: "none"}} onChange={(e) => setVideo(e.target.files?.item(0))} />
      </div>
      
      <button className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'
        style={{cursor: "pointer"}}
        onClick={handleDownload}
        >
        <Download className='h-10 w-10' />
       </button>
    </>
  ) : (<SpinningAtom />);
}
