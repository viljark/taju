
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

let modifiers = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 6, 7],
  [4, 2, 10],
  [5, 2, 10]
];

export {data, modifiers};
