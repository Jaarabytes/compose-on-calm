<script lang="ts">
  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];
  let isRecording = false;

  async function toggleRecording() {
    if (isRecording) {
      stopRecording();
    } else {
      await startRecording();
    }
  }

  async function startRecording() {
    try {
      console.log("Attempting to start recording...");
      const stream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: false });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        audioChunks = [...audioChunks, event.data];
      };

      mediaRecorder.onstop = saveRecording;

      mediaRecorder.start();
      isRecording = true;
      console.log("Recording started");
    } catch (error) {
      console.error("Error starting recording:", error);
      alert("Failed to start recording. Please make sure to select 'Share system audio' in the dialog.");
    }
  }

  function stopRecording() {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      isRecording = false;
      console.log("Recording stopped");
    }
  }

  function saveRecording() {
    console.log("Saving recording...");
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const audioUrl = URL.createObjectURL(audioBlob);

    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = "recorded_audio.webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(audioUrl);
    audioChunks = [];
    console.log("Recording saved");
  }
</script>

<button on:click={toggleRecording} class="record-button">
  {isRecording ? "Stop Recording" : "Start Recording"}
</button>

<style>
  .record-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .record-button:hover {
    background-color: #45a049;
  }
</style>
