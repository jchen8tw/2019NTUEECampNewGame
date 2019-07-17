import {
  DISPLAY_COMMISSION,
  SUBMIT_OPERATION,
  DELETE_OPERATION,
  GET_DATA
} from "./actionsTypes";
const initial_state = {};
// const initial_state = {
//   Commissions: {
//     f: { show: true },
//     u: { show: true },
//     c: { show: true },
//     k: { show: false }
//   },
//   teamData: {
//     2: { score: 100 },
//     1: { score: 200 },
//     3: { score: 500 },
//     4: { score: 300 },
//     5: { score: 400 },
//     6: { score: 300 },
//     7: { score: 300 },
//     8: { score: 700 },
//     9: { score: 900 },
//     10: { score: 300 }
//   },
//   Tweets: [
//     { teamName: "team1", StageName: "stage1", Points: 10 },
//     { teamName: "team2", StageName: "stage2", Points: -10 }
//   ],
//   Operations: {
//     贛: {
//       "b2d48c20-520f-42e5-9774-fa7e07a3805b": { teamid: 1, addpoints: 10 },
//       "e1f8180b-a65d-4456-b915-25dc26dfd97e": { teamid: 2, addpoints: -10 }
//     }
//   }
// };
function rootReducer(state = initial_state, action) {
  console.log(state);
  if (action.type === DISPLAY_COMMISSION) {
    let newObj = JSON.parse(JSON.stringify(state));
    newObj.Commissions[action.payload].show = !newObj.Commissions[
      action.payload
    ].show;
    return newObj;
  } else if (action.type === SUBMIT_OPERATION) {
    let newObj = JSON.parse(JSON.stringify(state));
    //this adds operation records
    // if (!newObj.Operations[action.payload.stagename]) {
    //   newObj.Operations[action.payload.stagename] = {
    //     [`${action.payload.uuid}`]: {
    //       teamid: action.payload.teamid,
    //       addpoints: action.payload.addpoints
    //     }
    //   };
    // } else {
    //   newObj.Operations[action.payload.stagename][action.payload.uuid] = {
    //     teamid: action.payload.teamid,
    //     addpoints: action.payload.addpoints
    //   };
    // }
    //TODO change later to connect to server
    //this adds tweets
    newObj.Tweets.push({
      teamName: action.payload.teamid,
      StageName: action.payload.stagename,
      Points: action.payload.addpoints
    });
    //this adds actual points
    //newObj.teamData[action.payload.teamid].score += action.payload.addpoints;
    return newObj;
  } else if (action.type === DELETE_OPERATION) {
    let newObj = JSON.parse(JSON.stringify(state));
    // newObj.teamData[action.payload.teamid].score -= action.payload.addpoints;
    // delete newObj.Operations[action.payload.stagename][action.payload.uuid];
    return newObj;
  } else if (action.type === GET_DATA) {
    return action.payload;
  } else {
    return JSON.parse(JSON.stringify(state));
  }
}
export default rootReducer;
