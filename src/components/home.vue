<template>
  <div>
    <h1>{{$t("hello")}}</h1>
    <label>Change language
      <select v-model="language" @change="updateLanguage">
        <option value="et">Estonian</option>
        <option value="en">English</option>
      </select>
    </label>
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

  console.log(store)
  export default {
    data () {
      return {
        answer: null,
        language: "et"
      }
    },
    methods: {
      updateLanguage() {
        Vue.config.lang = this.language;
      },
      send() {
        let answer = {
          id: uuid.v4(),
          text: this.answer,
          date: new Date().getTime()
        };
        store.addAnswer(answer)
      }
    }
  }
</script>

<style scoped>
</style>
