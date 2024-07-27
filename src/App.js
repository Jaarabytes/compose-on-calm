import './App.css';
import React, { useRef, useState } from 'react';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { FFmpeg } from '@ffmpeg/ffmpeg'


function App() {

  const [loaded, setLoaded ] = useState(false);

  const ffmpegRef  = useRef(new FFmpeg());
  
  const videoRef  = useRef(null);
  const messageRef  = useRef(null);
  
  const load = async () => {
    const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      messageRef.current.innerHTML = message;
      console.log(message);
    })

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, `text/javascript`),
      wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, `application/wasm`)
    })

    setLoaded(true)
  }

  const doTranscode = async () => {
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'))
   await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
    const data = await ffmpeg.readFile('output.mp4')
    videoRef.current.src = URL.createObjectURL(new Blob([data.buffer], {type: "video/mp4"}))
  }


  return loaded ? (
    <div className="App">
      <p/>
      <video ref={videoRef} controls></video><br/>
      <button onClick={doTranscode}>Start</button>
      <p ref={messageRef}></p>
    </div>
  ) : (<button onClick={load}>Load resources? (31 MB)</button>);
}

export default App;
