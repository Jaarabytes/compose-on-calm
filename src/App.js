import './App.css';
import React, { useRef, useState } from 'react';
import { toBlobURL } from '@ffmpeg/util';
import { FFmpeg } from '@ffmpeg/ffmpeg'

function App() {

  const [loaded, setLoaded ] = useState(false);
  const [ audio, setAudio ] = useState();
  const [ result, setResult ] = useState();

  const ffmpegRef  = useRef(new FFmpeg());
  
  // create a default audio template that users can edit on
  const messageRef  = useRef(null);
  
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
  
  const changeVolume = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Conversion started!`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-filter:a", `volume=0.25`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Conversion complete`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured during volume reduction: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }

  }
  return loaded ? (
    <div className="App">
      <input type='file' onChange={(e) => setAudio(e.target.files?.item(0))} /><br/>
      <button onClick={changeVolume}>Start</button>
      <p>Press Ctrl + shift + I, to check the logs</p>
    <h3>Logs: </h3>
    {result && <audio src={result} controls />}
      <p ref={messageRef}></p>
    </div>
  ) : (<button onClick={load}>Load resources? (31 MB)</button>);
}

export default App;
