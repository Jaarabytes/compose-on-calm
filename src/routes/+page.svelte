<script>
    import "../App.css"
    // I need help, especially with the Machine Learning part

// Tone.js: A powerful web audio library that makes working with the Web Audio API much easier, ideal for music composition.
    // Howler.js: A JavaScript library for working with audio files, providing a simple API for playback.

 //   Also the librosa python libraryb
    const builders = [{ name: "Jaarabytes", x: 'https://x.com/Jaarabytes' }]
</script>

<!-- This will be continued later, thank you -->
<div class='px-3 sm:px-[20%]'>
    <h1 class="text-[50px] font-extrabold my-3">Compose on calm.</h1>
    <p class="text-xl font-bold">Compose on calm helps enjoyers & idealists compose, create and listen to classical music.</p>
    <p class='my-5'>We are integrating Machine Learning models & python libraries for audio surgery and yes, you <b>CAN</b> compose with AI</p>
    <p class='my-5'>We will also <b>teach</b> you how to compose basic music patterns.</p>
    <p>Builders: </p>
    {#each builders as builder, i}
        <li><a href={builder.x}>{builder.name}</a></li>
    {/each}
    <p class='my-5'>Contact us through X (formerly twitter) Dm's. thank you!</p>
    <p>Listen to <a href="https://open.spotify.com/playlist/2qXjPCmMuGRlVDRRFFetAs?si=c81729c302b54fed"><b>this!</b></a></p>
</div>
