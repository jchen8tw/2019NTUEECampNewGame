const initial_state = {
    Commissions: {
      f: { show: true },
      u: { show: true },
      c: { show: true },
      k: { show: false }
    },
    teamData: {
      2: { score: 100 },
      1: { score: 200 },
      3: { score: 500 },
      4: { score: 300 },
      5: { score: 400 },
      6: { score: 300 },
      7: { score: 300 },
      8: { score: 700 },
      9: { score: 900 },
      10: { score: 300 }
    },
    Tweets: [
      { teamName: "team1", StageName: "stage1", Points: 10 },
      { teamName: "team2", StageName: "stage2", Points: -10 }
    ],
    Operations: {
      贛: {
        "b2d48c20-520f-42e5-9774-fa7e07a3805b": { teamid: 1, addpoints: 10 },
        "e1f8180b-a65d-4456-b915-25dc26dfd97e": { teamid: 2, addpoints: -10 }
      }
    }
};
module.exports = initial_state;