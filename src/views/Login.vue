<template>
  <div class="login">
    <h1>Login/Register Page</h1>

    <!-- <a href="tg://resolve?domain={{telegram_bot_name}}&start=login" @click="redirectLoginTelegram" >Login with Telegram</a> -->
    <a :href="'tg://resolve?domain=' + telegram_bot_name + '&start=login'" @click="redirectLoginTelegram" >Login with Telegram</a>
    <br/>
    <br/>

    <span>Don't have an account yet? </span>
    <br/>
    <a :href="'tg://resolve?domain=' + telegram_bot_name + '&start=signup'" @click="redirectRegisterTelegram" >Signup with Telegram</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        telegram_bot_name: process.env.VUE_APP_TELEGRAM_BOT_NAME
      }
    },
    methods: {
      redirectLoginTelegram() {
        setTimeout(() => {
          console.log("redirecting to https://t.me/" + this.telegram_bot_name + "?start=login" )
          window.location = "https://t.me/" + this.telegram_bot_name + "?start=login"
        }, 3000)
      },
      redirectRegisterTelegram() {
        setTimeout(() => {
          console.log("redirecting to https://t.me/" + this.telegram_bot_name + "?start=signup")
          window.location = "https://t.me/" + this.telegram_bot_name + "?start=signup"
        }, 3000)
      }
    }
  }
</script>