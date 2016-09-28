import * as types from '../actions/actionTypes';

const initialState = {
  profile: {},
  quotes: {},
  logs: [],
  idx: 0,
  total: {value: null, color: 'green'},
  quotes_colors: 'black',
  balance: null
}

const quotesColors = (old_quotes, new_quotes) => {
  let ans = {};
  Object.keys(old_quotes).map((curr) => {
    if (old_quotes[curr] > new_quotes[curr]) ans[curr] = 'red'
    else ans[curr] = 'green'
  })
  return ans;
}

const calculateTotal = (profile, quotes, balance) => {
  let newtotal = balance;
  Object.keys(quotes).map((good) => {newtotal+= quotes[good] * profile[good];});
  return newtotal;
}

export default function StocksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET:
    console.log("reset");
    return {profile: {}, quotes: {}, logs: [], idx: 0, total: {value: null, color: 'green'},quotes_colors: 'black', balance: null};
    break;
    case types.UPDATEPROFILE:
    console.log("update profile");
    let balance = action.data.balance;
    delete action.data.balance;
    return Object.assign({}, state, {profile: action.data, balance: balance});
    break;
    case types.UPDATEQUOTES:
    console.log("update quates");
    let quotes_colors = quotesColors(state.quotes, action.data);
    return Object.assign({}, state, {quotes: action.data, quotes_colors: quotes_colors});
    break;
    case types.UPDATETOTAL:
    console.log("update total");
    let totalColor = 'green';
    let newTotal = calculateTotal(state.profile, state.quotes, state.balance);
    if (newTotal < 5000) totalColor = 'red';
    return Object.assign({}, state, {total: {value: newTotal, color: totalColor}});
    break;
    case types.BUYQUOTE:
    switch(action.data){
      case -2:
      console.log("Illegal quantity, should be a positive natural number");
      return Object.assign({}, state, {logs: [{log: "Illegal quantity, should be a positive natural number", idx: state.idx}].concat(state.logs), idx: state.idx+1});
      break;
      case -3:
      console.log("Not enough money");
      return Object.assign({}, state, {logs: [{log: "Not enough money", idx: state.idx}].concat(state.logs), idx: state.idx+1});
      break;
      default:
      console.log("Bought "+action.quantity+" units of "+action.name);
      return Object.assign({}, state, {logs: [{log: "Bought "+action.quantity+" units of "+action.name, idx: state.idx}].concat(state.logs), idx: state.idx+1});
    }
    break;
    case types.SELLQUOTE:
    switch(action.data){
      case -2:
      console.log("Illegal quantity, should be a positive natural number");
      return Object.assign({}, state, {logs: [{log: "Illegal quantity, should be a positive natural number", idx: state.idx}].concat(state.logs), idx: state.idx+1});
      break;
      case -3:
      console.log("Not enough units");
      return Object.assign({}, state, {logs: [{log: "Not enough units", idx: state.idx}].concat(state.logs), idx: state.idx+1});
      break;
      default:
      console.log("Sold "+action.quantity+" units of "+action.name);
      return Object.assign({}, state, {logs: [{log: "Sold "+action.quantity+" units of "+action.name, idx: state.idx}].concat(state.logs), idx: state.idx+1});
    }
    break;
    default:
    return state;
  }
}
