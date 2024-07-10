<script lang="ts">
  import "../../App.css"
  let audioFile: File | null = null;
  let audioUrl: string | null = null;
  let outputFile: File |  null = null;

  function handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      audioFile = input.files[0];
      audioUrl = URL.createObjectURL(audioFile);
    }
  }

  function handleSubmit () {

  }
</script>

<svelte:head>
<!-- Recommended meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <!-- PyScript CSS -->
    <link rel="stylesheet" href="https://pyscript.net/releases/2024.5.2/core.css">

    <!-- This script tag bootstraps PyScript -->
    <script type="module" src="https://pyscript.net/releases/2024.5.2/core.js"></script>
</svelte:head>

<div class="my-5">
  <h2 class='text-3xl font-extrabold my-5 text-center'>Audio Upload</h2>
  <p>Or upload your local music file here</p>
  <p>[Don't upload huge files, <b>Please</b>]</p>
  <input type="file" accept="audio/*" class="my-5" on:change={handleFileSelect} />
  
  {#if audioUrl}
    <div>
      <h3>Preview:</h3>
      <div class="sm:px-[31%]">
        <audio controls src={audioUrl} class='flex justify-center'></audio>
      </div>
    </div>
  {/if}

  {#if outputFile}
    <a href={URL.createObjectURL(outputFile)} download="for_revered_biggydog.wav">Download cleaned audio</a>
  {/if}
  <button on:click={handleSubmit}>Upload</button>
</div>

<style lang="postcss">
  div {
    margin: 20px;
  }
  h2 {
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 10px;
  }
  button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
