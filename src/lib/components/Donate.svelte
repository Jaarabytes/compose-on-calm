<script>
  // implement paystack
  import "../../App.css"
  import { onMount } from "svelte";
  import { env } from '$env/dynamic/public' 

  let amount = ''
  function payWithPaystack () {
    let handler = PaystackPop.setup({
      key: env.PUBLIC_PAYSTACK_KEY,
      email: 'xh3rking96@gmail.com',
      amount: Number(amount) * 100,
      currency: "KES",
      callback: function() {
        alert("Thank you so much!!!");
      },
      onClose: function () {
        alert("NOOO, not yet!!!")
      }
    });

    handler.openIframe();
  }

  onMount(() => {
    const script= document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js'
    document.head.appendChild(script);
  })
</script>

<main>
  <h1 class='font-extrabold text-center text-3xl'>Be blessed!!!</h1>
  <form class="text-center" >
    <label for='amount' class='text-center'>Amount (in Kenyan Shillings)</label><br /> <br />
    <input bind:value={amount} class='bg-slate-200 border-2 border-black text-center rounded-lg text-black py-2 px-3' required /><br /><br />
    <button class="bg-green-900 px-3 py-2 rounded-lg text-white hover:bg-green-700" type='button' on:click={payWithPaystack}>Donate</button>
  </form>
</main>
