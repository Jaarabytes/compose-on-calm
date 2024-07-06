<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  // Please use http status dogs
  import '../App.css'

  // haha, already using it 

  let dogImage = '';
  
  // okay, this is exactly useEffect
  onMount(() => {
    if ( $page.status === 404 || $page.status === 500 ) {
      // only for 404, 500 and 401 maybe
      dogImage = `https://http.dog./${$page.status}.jpg`
    }
  })
</script>

<svelte:head>
  <title>{$page.status}: {$page.error.message}</title>
</svelte:head>

<main>
  {#if dogImage }
    <a href="/"><img src={dogImage} class='mx-auto' alt="HTTP status dog!" /></a>
  {:else}
    <p class='text-center my-5'>An error occured. Please go <a href="/">HOME</a></p>
  {/if}
</main>
