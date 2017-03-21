<template>
  <div>
    <h1>Step 1</h1>
      <p>{{  $t("joke.1")  }}</p>
      <p>{{  $t("joke.2")  }}</p> 
      <p>{{  $t("joke.3")  }}</p>
      <hr> 
      <p>Tegelikult ei kirjuta ma nalju vaid palun sul üles kirjutata
        paar asja.</p>
      <p>1. Otsi välja palun joonlaud, märkmepaber ja pastakas.</p>
      <p>2. Kirjuta üles mis brauserit sa kasutad. Firefox, Chrome vms</p>
      <p>3. Kui suur on su monitor? Kui tead tollides. Kui ei, siis mõõda ekraani diagonaal joonlauaga. </p>
      <p>4. Vajuta Edasi. </p>
    <router-link to="/step2">
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
