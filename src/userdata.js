
let data = {
  state: {},
  addTrialData(trialData) {
    this.state.trialData = trialData;
  },
  getData() {
    return this.state;
  }
};

export {data};
