
let data = {
  state: {
    runs: [],
    survey1: {},
    survey2: {},
    survey3: {}
  },
  addRunData(runData) {
    this.state.runs.push(runData);
    //console.log(this.state);
  },
  addSurveyData(surveyData, nr) {
    this.state["survey" + nr] = surveyData;
  },
  getData() {
    return this.state;
  }
};
// 1. jälgitav, 2. ja 3. segajad ja 4. risti suurus
let modifiers = [
  [ 8, 12, 32, 32],
  [ 12, 18, 24, 24], 
  [18, 12, 24, 18],
  [ 24, 18, 12, 12],
  [ 32, 12, 8, 8],
];

export {data, modifiers};
