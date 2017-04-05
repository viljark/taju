
let data = {
  state: {
    runs: [],
    survey1: {},
    survey2: {},
    survey3: {}
  },
  addRunData(runData) {
    this.state.runs.push(runData);
    console.log(this.state);
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
  [30, 20, 10, 6],
  [18, 26, 10, 6],
  [20, 12, 30, 20],
  [24, 5, 14, 42],
  [6, 16, 24, 30]
];

export {data, modifiers};
