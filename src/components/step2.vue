<template>
  <div>
    <h1>Step 2</h1>
    <p>Järgmisel lehel näed enda ees kasti siniste pallidega</p>
    <p>Lisaks tekib ka hüpikaken. Täida selle sees olevaid juhiseid enne kui OK vajutad</p>
    <p>NB! Tekkivat hüpikakent saad vajadusel nihutada hiirega.</p>
    <router-link to="/step3">
      <button >{{$t("forward")}}</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
