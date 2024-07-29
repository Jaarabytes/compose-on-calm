import './App.css';
import React, { useEffect, useRef, useState } from 'react';
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
  // wasm + ffmpeg binaries should load first (asynchronously)
  useEffect(() => {
    load();
  }, [])

// should also accept input
  const reduceNoise = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Noise reduction started!`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    // why the exact values, -> https://superuser.com/a/835585
    await ffmpeg.exec(["-i", inputFile, "-af", `highpass=f=200`, `lowpass=f=3000`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Noise reduction complete`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured during noise reduction: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
  }

// should accept input
  const changeVolume = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Conversion started!`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-filter:a", `volume=0.05`, outputFile]);
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

  const increaseBass = async (bassValue) => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Increasing bass!`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-af", `bass=g=10`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Bass successfully increased`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured when increasing bass: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
   }

  const cancelNoise = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Cancelling noise...`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-af", `afftdn=nf=-25`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Noise successfully cancelled`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured when cancelling noise: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
   }

  const changePlaybackSpeed = async (playbackSpeed) => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Changing playbackSpeed!`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-filter:a", `atempo=${playbackSpeed}`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`playbackSpeed successfully ${playbackSpeed > 1 ? 'increased': 'decreased'}`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured when increasing bass: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
  }
  
  const normalizeAudio = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Normalizing audio...`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-af", `loudnorm`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Audio successfully normalized`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured when normalizing audio: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
   }

const addReverb = async () => {
    try {
     const ffmpeg = ffmpegRef.current;


    const inputFile = `Input.${audio.name.substr(audio.name.lastIndexOf("."))}`
    const outputFile = `Output.${audio.name.substr(audio.name.lastIndexOf("."))}`

    console.log(`Adding reverb...`)
    const arrayBuffer = await audio.arrayBuffer();

    await ffmpeg.writeFile(inputFile, new Uint8Array(arrayBuffer));
    await ffmpeg.exec(["-i", inputFile, "-af", `aecho=0.8:0.9:1000:0.3`, outputFile]);
    const data = await ffmpeg.readFile(outputFile)
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "audio/mp3"}))
    console.log(`Added reverb successfully`)
    setResult(url)
    }
    catch ( err ) {
      console.log(`Error occured when adding reverb: ${err}`);
      messageRef.current.innerHTML = `Error: ${err.message}`;
    }
   }


  return loaded ? (
    <div className="App">
      <input type='file' onChange={(e) => setAudio(e.target.files?.item(0))} /><br/>
      <button onClick={changeVolume}>Change Volume</button>
      <button onClick={reduceNoise}>Reduce Noise</button>
    <h3>Logs: </h3>
    {result && <audio src={result} controls />}
      <p ref={messageRef}></p>
    </div>
  ) : (<p style={{}}>Loading ... </p>);
}


export default App;
