<script lang='ts'>
  let audioElem: HTMLAudioElement;
  const displayMediaOptions = {
    video: {
      displaySurface: "window",
    },
    audio: false,
  };
    async function startRecording () {
    try {
    audioElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    }
    catch ( error: any ){
    console.log(`Error when recording; ${error}`)
    }
  }

</script>

<div class="my-5">
  <audio controls id='tracks' bind:this={audioElem}/>
    <p>Play music in another tab and click the below button! </p>
  <button on:click={startRecording} class="my-5 bg-blue-900 text-white px-3 py-2 rounded-lg hover:bg-blue-700">Stop recording</button>
</div>
