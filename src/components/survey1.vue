<template>
  <div>
    <h1>Survey 1</h1>
    <section v-if="step == 1">
      <h2>{{$t("questionIB")}}</h2>
      <p>
        <label>Jah <input v-model="vastus.ib" type="radio" :value="true" name="vastus.ib"></label>
      </p>
      <p>
        <label>Ei <input v-model="vastus.ib" type="radio" :value="false" name="vastus.ib"></label>
      </p>
      <p v-if="vastus.ib !== null">
        <button @click="step = 2">{{$t("forward")}}</button>
      </p>
    </section>
    <section v-if="step == 2">
      <h2 v-if="vastus.ib">IB 1</h2>
      <h2 v-if="!vastus.ib">IB 0</h2>

      <div>
        <h3>{{$t("questionUes.1")}}</h3>
        <p>
          <select v-model="vastus.liikus" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="jah">{{$t("answerUes.11")}}</option>
            <option value="ei">{{$t("answerUes.12")}}</option>
          </select>
        </p>
        <p v-if="vastus.liikus !== null">
          <button @click="step = 3">{{$t("forward")}}</button>
        </p>
      </div>
    </section>
    <section v-if="step == 3">
      <button @click="saveData">Salvesta</button>
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
          liikus: null
        }
      }
    },
    created() {
      console.log("have you been here", this.visited);
      console.log("data", data.getData());
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
