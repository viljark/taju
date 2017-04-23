<template>
  <div>
    <h1>{{$t("hello")}}</h1>
    <p>Language / Keel</p>
    <label>{{$t("chooseLanguage")}}
      <select v-model="language" @change="updateLanguage">
        <option value="et">Estonian</option>
        <option value="en">English</option>
      </select>
    </label>
    <h5>{{$t("nophone")}}
    </h5>
    <p>
      <router-link to="/step1">
        <button >{{$t("forward")}}</button>
      </router-link>
    </p>
  </div>
</template>

<script>
  import Vue from "vue";
  import {store} from "@/store";
  import uuid from "uuid";

  //console.log(store)
  export default {
    data () {
      return {
        answer: null,
        language: "et"
      }
    },
    mounted() {
      this.language = Vue.config.lang;
    },
    methods: {
      updateLanguage() {
        Vue.config.lang = this.language;
        localStorage.setItem("language", this.language);
      },
      send() {
        let answer = {

        };
        store.addAnswer(answer)
      }
    }
  }
</script>

<style scoped>
</style>
