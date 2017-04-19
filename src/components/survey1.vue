<template>
  <div>
    <h1>{{$t("survey")}}</h1>
    <section v-if="step == 1">
      <h2>{{$t("questionIB")}}</h2>
      <p>
        <label>{{$t("agree")}} <input v-model="vastus.ib" type="radio" :value="true" name="vastus.ib"></label>
      </p>
      <p>
        <label>{{$t("disagree")}} <input v-model="vastus.ib" type="radio" :value="false" name="vastus.ib"></label>
      </p>
      <p v-if="vastus.ib !== null">
        <button @click="step = 2">{{$t("forward")}}</button>
      </p>
    </section>
    <section v-if="step == 2">
      <h2 v-if="vastus.ib">{{$t("sawit")}}</h2>
      <h2 v-if="!vastus.ib">{{$t("sawitnot")}}</h2>

      <div>
        <p>{{$t("questionUes.1")}}</p>
        <p>
          <select v-model="vastus.liikus" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="jah">{{$t("answerUes.11")}}</option>
            <option value="ei">{{$t("answerUes.12")}}</option>
          </select>
        </p>
        <p>{{$t("questionUes.2")}}</p>
        <p>
          <select v-model="vastus.kuju" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="Ruut">{{$t("answerUes.21")}}</option>
            <option value="Rist">{{$t("answerUes.22")}}</option>
            <option value="Kleit">{{$t("answerUes.23")}}</option>
            <option value="Kastekann">{{$t("answerUes.24")}}</option>
          </select>
        </p>
        <p>{{$t("questionUes.3")}}</p>
        <p>
          <select v-model="vastus.värv" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="Kollane">{{$t("answerUes.31")}}</option>
            <option value="Sinine">{{$t("answerUes.32")}}</option>
            <option value="Punane">{{$t("answerUes.33")}}</option>
            <option value="Valge">{{$t("answerUes.34")}}</option>
          </select>
        </p>
        <p>{{$t("questionUes.4")}}</p>
        <p>
          <select v-model="vastus.suund" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="alla">{{$t("answerUes.41")}}</option>
            <option value="üles">{{$t("answerUes.42")}}</option>
            <option value="paremale">{{$t("answerUes.43")}}</option>
            <option value="vasakule">{{$t("answerUes.44")}}</option>
          </select>
        </p>
        <p>{{$t("questionUes.5")}}</p>
        <p>
          <select v-model="vastus.teinud" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="Jah">{{$t("answerUes.51")}}</option>
            <option value="Ei">{{$t("answerUes.52")}}</option>
            <option value="Ei mäleta">{{$t("answerUes.53")}}</option>
          </select>
        </p>
        <p>{{$t("questionUes.6")}}</p>
        <p>
          <select v-model="vastus.ootas" name="">
            <option selected value="null" disabled>{{$t("choose")}}</option>
            <option value="Jah">{{$t("answerUes.61")}}</option>
            <option value="Ei">{{$t("answerUes.62")}}</option>
          </select>
        </p>
        <p v-if="vastus.liikus !== null && vastus.kuju !== null && vastus.värv !== null
        && vastus.suund !== null && vastus.teinud !== null && vastus.ootas !== null">
          <button @click="saveData">{{$t("forward")}}</button>
        </p>
      </div>
    </section>
    <!--<p v-if="!visited">-->
    <!--<router-link :to="{name: 'run', params: {id: 4}}">-->
    <!--<button>{{$t("forward")}}</button>-->
    <!--</router-link>-->
    <!--</p>-->
    <!--<p v-if="visited">-->
    <!--<router-link :to="{name: 'survey1'}">-->
    <!--<button>{{$t("forward")}}</button>-->
    <!--</router-link>-->
    <!--</p>-->
  </div>
</template>

<script>
  import {data} from "@/userdata";

  export default {
    data () {
      return {
        visited: this.$route.params.visited,
        step: 1,
        vastus: {
          ib: null,
          liikus: null,
          kuju: null,
          värv: null,
          suund: null,
          teinud: null,
          ootas: null
        }
      }
    },
    created() {
    //  console.log("have you been here", this.visited);
    //  console.log("data", data.getData());
    },
    methods: {
      saveData() {
        if (this.visited) {
          data.addSurveyData(this.vastus, 2);
          this.$router.push({name: 'survey2'});
        } else {
          data.addSurveyData(this.vastus, 1);
          this.$router.push({name: 'run', params: {id: 4}});
        }

      }
    }
  }
</script>

<style scoped>
</style>
