<script>
    import "../App.css"
    // I need help, especially with the Machine Learning part
    const builders = [{ name: "Jaarabytes", x: 'https://x.com/Jaarabytes' }]
</script>

<!-- This will be continued later, thank you -->
<div class="text-center my-5 ">
    <h1 class="text-[50px] font-extrabold my-3">Compose on calm.</h1>
    <p class="text-xl font-bold">Compose on calm helps enjoyers & idealists compose, create and listen to classical music.</p>
    <p class='my-5'>We are integrating Machine Learning models & python libraries for audio surgery and yes, you <b>CAN</b> compose with AI</p>

    <p>Builders: </p>
    {#each builders as builder, i}
        <li><a href={builder.x}>{builder.name}</a></li>
    {/each}

    <p class='my-5'>Contact us through X (formerly twitter) Dm's. thank you!</p>
</div>
