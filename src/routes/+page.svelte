<script>
  import "../App.css"
  import Play from '$lib/components/Play.svelte' 
  import { currentTrack } from "$lib/stores/musicStore"
  // I need help, especially with the Machine Learning part

// Tone.js: A powerful web audio library that makes working with the Web Audio API much easier, ideal for music composition.
    // Howler.js: A JavaScript library for working with audio files, providing a simple API for playback.

 //   Also the librosa python libraryb
  const builders = [{ name: "Jaarabytes", x: 'https://x.com/Jaarabytes' }]
  const musicTypes = [ "Nightcore/tiktok sped up" ,"Hardstyle", "Lo-Fi" ]
</script>

<svelte:head>
  <title>Calm </title>
</svelte:head>

<!-- This will be continued later, thank you -->
<div class='px-3 sm:px-[20%]'>
    <h1 class="text-3xl sm:text-[50px] font-extrabold my-5">Compose on calm.</h1>
    <p class='my-5'>I'm currently focusing on how to create the following music versions:</p>
    {#each musicTypes as musicType}
        <li>{musicType}</li>
    {/each}
    <p class='my-5'>Contact me through <a href='https://x.com/Jaarabytes'>X (formerly twitter) Dm's.</a> </p>
    <p>I also accept <a href="/donate" class="font-bold">donations</a></p> 
    {#if $currentTrack}
      <p class='my-3'>You are currently listening to <span class="font-bold">{$currentTrack.name}</span> by <b>{$currentTrack.by}</b></p>
    {:else }
      <p></p>
    {/if}
</div>

<Play />
