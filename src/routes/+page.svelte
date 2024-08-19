<script lang="ts">

import { onMount } from "svelte"
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { FFmpeg } from "@ffmpeg/ffmpeg"
import { Download, Upload } from 'lucide-svelte';

let loaded = false;
let watermarkText = 'Default watermark';
let video: HTMLVideoElement;  
let videoUrl: string;
let videoRef: HTMLVideoElement;
let messageRef:HTMLParagraphElement;
let ffmpegRef= new FFmpeg();
let fileInputRef:HTMLInputElement;

// display the video once selected as input
const load = async () => {
  let baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
  let ffmpeg = ffmpegRef.current;
  ffmpeg.on('log', ({ message: string }) => {
    console.log(message);
  })
   // This just prevents the CORS error. Please i wasted 3-5 hours on this. I should have read the docs.
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, `text/javascript`),
    wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, `application/wasm`)
  })

  loaded = true;
}
// wasm + ffmpeg binaries should load first (asynchronously)
onMount(() => {
  load();
})

const generateRandomFileName = () => {
  let names = ["for_revered_biggydog", "for_wild_anon", "for_cracked_user", "for_loyal_customer", "for_king_kracker"];
  let index = Math.floor(Math.random() * names.length)
  console.log(`Output video is ${names[index]}.mp4`)
  return `${names[index]}.mp4`
}

const handleIconClick = () => {
  fileInputRef.current.click();
}

const handleWatermarkText = (event:KeyboardEvent) => {
  watermarkText = event.target?.value;
}

const addWatermark = async (watermarkText: string) => {
  try {
    let ffmpeg = ffmpegRef.current;
    if (!ffmpeg) throw new Error("FFmpeg instance not initialized");

    // Log the start of watermark addition
    console.log(`Adding watermark text`);
    videoUrl = URL.createObjectURL(video);
    await ffmpeg.writeFile('input.mp4', await fetchFile(videoUrl));
    await ffmpeg.writeFile('arial.ttf', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/arial.ttf'));

    // Apply watermark with drawtext filter
    await ffmpeg.exec([
      "-i", 'input.mp4',
      "-vf", `drawtext=fontfile=/arial.ttf:text=\'${watermarkText}\':x=10:y=10:fontsize=24:fontcolor=white`,
      'output.mp4'
    ]);

    // Read the output file from FFmpeg
    let data = await ffmpeg.readFile('output.mp4');
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


</script>

<svelte:head>
  <title>Cocalm</title>
</svelte:head>

<body>
<div class="my-5">
    <div class='App flex justify-center'>
    <video src={URL.createObjectURL(video)} width={250} controls />
    </div>
    <p><b>Water mark text:</b><br /> {watermarkText}</p>
    <button on:click={() => addWatermark(watermarkText)} class='p-4 rounded-lg bg-blue-500 text-white my-5 hover:bg-blue-700'>Click me!</button>
  <h2 class='text-2xl font-bold my-5'>Result Video: </h2>
    <div class='flex justify-center'>
    <video bind:this={videoRef} width={250} controls />
    </div>
</div>

  <button class='fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'>Generate</button>
  <input class='fixed bottom-20 left-4 border-2 border-blue-500 text-black bg-white p-2 rounded-lg' placeholder='add watermark'
    value={watermarkText} on:change={handleWatermarkText}
    />
  <div class='fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded'>
  <Upload class='h-10 w-10' on:click={handleIconClick}  style="cursor: pointer;" />
  <input type='file' bind:this={fileInputRef} on:change={(e) => video = e.target.files?.item(0)} />
  </div>
  
  <a href={videoUrl} target="_blank" rel="noopener noreferrer" download={generateRandomFileName}>
  <button class='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded' style="cursor: pointer;">
    <Download class='h-10 w-10' />
   </button>
  </a>
</body>
