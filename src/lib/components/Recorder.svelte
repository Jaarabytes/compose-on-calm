<script lang='ts'>
  let audioElem: HTMLAudioElement;
  const displayMediaOptions = {
    video: {
      displaySurface: "window",
    },
    audio: false,
  };
  const steps = ["Play music in another tab", "Mute the music", "Wait 10 seconds" , "Click the below button"]
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
  {#each steps as step}
    <li>{step}</li>
  {/each}
  <button on:click={startRecording} class="my-5 bg-blue-900 text-white px-3 py-2 rounded-lg hover:bg-blue-700">Click me!</button>
</div>
