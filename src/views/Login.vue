<template>
  <div class="login">
    <h1>Login/Register Page</h1>

    <a :href="telegram_bot_url" @click="someMethod" >Login with Telegram</a>
    <br/>
    <br/>

    <span>Don't have an account yet? </span>
    <br/>
    <a href="">Register with Telegram</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        telegram_bot_url: "tg://resolve?domain=SMUModsBot&start=signup"
      }
    },
    methods: {
      someMethod() {
        setTimeout(() => {
          console.log("Zach method works", process.env.VUE_APP_TELEGRAM_BOT_URL)
          window.location = process.env.VUE_APP_TELEGRAM_BOT_URL
        }, 3000)
      }
    }
  }
</script>