<template>
  <div>
    <h1>Survey 2</h1>
    <section v-if="step == 1">
        <p>{{$t("questionRaal.1")}}</p>
        <p>
          <select v-model="vastus.device" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="Sülearvuti">{{$t("answerRaal.11")}}</option>
            <option value="Lauaarvuti">{{$t("answerRaal.12")}}</option>
            <option value="Nutitelefon">{{$t("answerRaal.13")}}</option>
            <option value="Tahvelarvuti">{{$t("answerRaal.14")}}</option>
          </select>
        </p>
        <p>{{$t("questionRaal.2")}}</p>
        <p>
          <input v-model="vastus.deviceAge" name="" value=""> {{$t("answerRaal.21")}}
       </p>
        <p>{{$t("questionRaal.3")}}</p>
        <p>
          <input v-model="vastus.diagonal" name="" value=""> {{$t("answerRaal.31")}}
       </p>
        <p>{{$t("questionRaal.4")}}</p>
        <p>
          <select v-model="vastus.widescreen" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="Jah">{{$t("answerRaal.41")}}</option>
            <option value="Ei">{{$t("answerRaal.42")}}</option>
          </select>
      <p v-if="vastus.device !== null && vastus.deviceAge !== null && vastus.diagonal !== null
      && vastus.widescreen !== null">
        <button @click="step = 2">{{$t("forward")}}</button>
      </p>
    </section>
    <section v-if="step == 2">
        <p>{{$t("questionKI.1")}}</p>
        <p>
          <input v-model="vastus.KIAge" name="" value=""> {{$t("answerKI.11")}}
       </p>
       <p>{{$t("questionKI.2")}}</p>
          <select v-model="vastus.gender" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="Naine">{{$t("answerKI.21")}}</option>
            <option value="Mees">{{$t("answerKI.22")}}</option>
          </select>
       <p>{{$t("questionKI.3")}}</p>
          <select v-model="vastus.vision" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="Jah">{{$t("answerKI.31")}}</option>
            <option value="Ei">{{$t("answerKI.32")}}</option>
          </select>       
       <p>{{$t("questionKI.4")}}</p>
          <select v-model="vastus.haridus" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="1">{{$t("answerKI.41")}}</option>
            <option value="2">{{$t("answerKI.42")}}</option>
            <option value="3">{{$t("answerKI.43")}}</option>
            <option value="4">{{$t("answerKI.44")}}</option>
            <option value="5">{{$t("answerKI.45")}}</option>
            <option value="6">{{$t("answerKI.46")}}</option>
          </select>     
       <p>{{$t("questionKI.5")}}</p>
       <p>
          <label>{{$t("answerKI.51")}} <input v-model="vastus.ktr" type="radio" :value="false" name="inputname"></label></br>   
          <label>{{$t("answerKI.52")}} <input v-model="vastus.ktr" type="radio" :value="false" name="inputname"></label></br>   
          <label>{{$t("answerKI.53")}} <input v-model="vastus.ktr" type="radio" :value="true" name="inputname"></label></br>   
          <label>{{$t("answerKI.54")}} <input v-model="vastus.ktr" type="radio" :value="false" name="inputname"></label></br>   
          <label>{{$t("answerKI.55")}} <input v-model="vastus.ktr" type="radio" :value="false" name="inputname"></label></br>   
      </p>
        <p v-if="vastus.KIAge !== null && vastus.gender !== null && vastus.vision !== null
          && vastus.haridus !== null  && vastus.ktr !== null">
          <button @click="step = 3">{{$t("forward")}}</button></p>
    </section>
    <section v-if="step == 3">
       <p>{{$t("questionKI.5")}}</p>
       <p>
          <label>{{$t("answerKI.51")}} <input v-model="vastus.ktrcheck" type="radio" :value="false" name="vastus.ktrcheck"></label></br>
          <label>{{$t("answerKI.52")}} <input v-model="vastus.ktrcheck" type="radio" :value="false" name="vastus.ktrcheck"></label></br>
          <label>{{$t("answerKI.53")}} <input v-model="vastus.ktrcheck" type="radio" :value="true" name="vastus.ktrcheck"></label></br>
          <label>{{$t("answerKI.54")}} <input v-model="vastus.ktrcheck" type="radio" :value="false" name="vastus.ktrcheck"></label></br>
          <label>{{$t("answerKI.55")}} <input v-model="vastus.ktrcheck" type="radio" :value="false" name="vastus.ktrcheck"></label></br>
      </p>
        <p v-if="vastus.krtcheck !== null">
          <button @click="saveData">{{$t("forward")}}</button>
        </p>
    </section>
  </div>
  
</template>

<script>
  import {data} from "@/userdata";
  import {store} from "@/store";

  export default {
    data () {
      return {
          step: 1,
          vastus: {
            device: null,
            deviceAge: null,
            diagonal: null,
            widescreen: null,
            KIAge: null,
            gender: null,
            haridus: null,
            ktr: null,
            ktrcheck: null

          }
      }
    },
    created() {
      console.log("data", data.getData());
    },
    methods: {
        saveData() {
            data.addSurveyData(this.vastus, 3);
            var allData = data.getData();

            store.addAnswer(allData);
            this.$router.push({name: 'end'});
        }
    }
  }
</script>

<style scoped>
</style>
