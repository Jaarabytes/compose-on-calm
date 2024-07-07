<script lang="ts">
  import "../../App.css"

  let audioFile: File | null = null;
  let audioUrl: string | null = null;

  function handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      audioFile = input.files[0];
      audioUrl = URL.createObjectURL(audioFile);
    }
  }

  function handleSubmit() {
    if (audioFile) {
      console.log('File selected:', audioFile.name);
      // Here you would typically send the file to your server
      // For example: await fetch('/upload', { method: 'POST', body: audioFile });
    } else {
      console.log('No file selected');
    }
  }
</script>

<div class='sm:px-[20%] px-3'>
  <h2>Audio Upload</h2>
  <input type="file" accept="audio/*" on:change={handleFileSelect} />
  
  {#if audioUrl}
    <div>
      <h3>Preview:</h3>
      <audio controls src={audioUrl}></audio>
    </div>
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
