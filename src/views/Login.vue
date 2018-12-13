<template>
  <div class="login">
    <h1>Login/Register Page</h1>

    <a href="tg://resolve?domain=SMUModsBot&start=login" @click="redirectLoginTelegram" >Login with Telegram</a>
    <br/>
    <br/>

    <span>Don't have an account yet? </span>
    <br/>
    <a href="tg://resolve?domain=SMUModsBot&start=signup" @click="redirectLoginTelegram" >Signup with Telegram</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        telegram_bot_login_url: "tg://resolve?domain=SMUModsBot&start=signup"
      }
    },
    methods: {
      redirectLoginTelegram() {
        setTimeout(() => {
          window.location = process.env.VUE_APP_TELEGRAM_BOT_URL + "?start=login"
        }, 3000)
      },
      redirectRegisterTelegram() {
        setTimeout(() => {
          window.location = process.env.VUE_APP_TELEGRAM_BOT_URL + "?start=signup"
        }, 3000)
      }
    }
  }
</script>