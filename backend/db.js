const initial_state = {
    Commissions: {
      f: { show: true },
      u: { show: true },
      c: { show: true },
      k: { show: true },
      y: { show: true },
      o: { show: true },
      uu: { show: true },
      l: { show: true },
      a: { show: true },
      h: { show: true }
    },
    teamData: {
      1: { score: 0 },
      2: { score: 0 },
      3: { score: 0 },
      4: { score: 0 },
      5: { score: 0 },
      6: { score: 0 },
      7: { score: 0 },
      8: { score: 0 },
      9: { score: 0},
      10: { score: 0 }
    },
    Tweets: [
      { teamName: "team1", StageName: "stage1", Points: 10 },
      { teamName: "team2", StageName: "stage2", Points: -10 }
    ],
    Operations: {
      // 贛: {
      //   "b2d48c20-520f-42e5-9774-fa7e07a3805b": { teamid: 1, addpoints: 10 },
      //   "e1f8180b-a65d-4456-b915-25dc26dfd97e": { teamid: 2, addpoints: -10 }
      // }
    }
};
module.exports = initial_state;