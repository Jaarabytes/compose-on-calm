<script lang='ts'>
  import { currentTrack } from '$lib/stores/musicStore'

  let audioPlayer: HTMLAudioElement;
  let isPlaying = false;
  let error = ''

  function togglePlay() {
    if ( isPlaying ) {
      audioPlayer.pause();
    }
    else {
      audioPlayer.play().catch((e) => {
      error = "Error playing audio" + e.message;
      isPlaying = false;
      })
    }

    isPlaying = !isPlaying
  }

  function handleAudioError(event: Event) {
    error = "Error loading audio";
    isPlaying = false;
  }

</script>


<main>
  {#if $currentTrack}
    <div class="fixed bottom-4 right-4">
      <button on:click={togglePlay} class="px-6 py-2 bg-blue-500 text-white rounded animate-pulse-slow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          <p class='py-2'>{isPlaying ? 'Stop!' : 'Play!'}</p>
      </button>
      <audio bind:this={audioPlayer} src={$currentTrack.link} on:ended={() =>{isPlaying = false}} on:error={handleAudioError} />
    </div>
    {#if error}
      <p class='text-red-700 px-3 sm:px-[20%] font-bold'>{error}</p>
    {/if}
  {:else}
    <p class='text-red-700 px-3 sm:px-[20%]'>No track available</p>
  {/if}
</main>
