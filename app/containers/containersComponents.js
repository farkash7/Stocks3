import { connect } from 'react-redux';
import {fetchFunc, reset_src, profile_src, quotes_src, buyQuoteSrc, sellQuoteSrc} from './containersConstants'
import {BuyStockHead, BuySellStock, BuyStocksZone, LogsZone, ProfileZone} from '../components/components'

const mapStateToPropsLogsZone = (state) => {
  return {
    logs: state.logs
  }
}

const mapStateToPropsProfileZone = (state) => {
  return {
    balance: state.balance,
    total: state.total.value,
    total_color: state.total.color,
  }
}

const mapDispatchToPropsProfileZone = (dispatch) => {
  const updateProfile = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATEPROFILE', data: responseData})})};
  const updateQuotes = (responseData) => {dispatch({type: 'UPDATEQUOTES', data: responseData})};
  const updateTotal = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATETOTAL'})})};
  const resetState = () => {dispatch({type: 'RESET'})};
  const updateQuotesAndTotal = () => {
    fetch(quotes_src)
    .then((response) => response.json())
    .then((responseData) => {
      updateQuotes(responseData);
    })
    .then(() => {
      updateTotal();
    })
    .done();
  }
  const reset = () => {
    fetch(reset_src)
    .then(() => {
      resetState();
    })
    .then(() => {
      updateProfile();
    })
    .then(() => {
      updateQuotesAndTotal()
    })
    .done();
  }
  return {
    reset: reset
  }
}


const mapStateToPropsBuyZone = (state) => {
  return {
    data: state.quotes,
    colors: state.quotes_colors
  }
}

const mapDispatchToPropsBuyZone = (dispatch) => {
  const updateProfile = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATEPROFILE', data: responseData})})};
  const updateQuotes = (responseData) => {dispatch({type: 'UPDATEQUOTES', data: responseData})};
  const updateTotal = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATETOTAL'})})};
  const updateQuotesAndTotal = () => {
    fetch(quotes_src)
    .then((response) => response.json())
    .then((responseData) => {
      updateQuotes(responseData);
    })
    .then((responseData) => {
      updateTotal();
    })
    .done();
  }
  updateInterval = () => {setInterval(updateQuotesAndTotal, 5000)};
  const buyAction = (responseData, name, quantity) => {dispatch({type: 'BUYQUOTE', data: responseData, name: name, quantity: quantity})};
  const action = (name, quantity) => {
    fetch(buyQuoteSrc(name, quantity))
    .then((response) => response.json())
    .then((responseData) => {
      buyAction(responseData, name, quantity);
    })
    .then((responseData) => {
      updateProfile();
    })
    .done();
  }
  return {
    initial: () => {updateProfile(); updateQuotesAndTotal(); updateInterval();},
    updateProfile: updateProfile,
    action: action,
  }
}

const mapStateToPropsSellZone = (state) => {
  return {
    data: state.profile,
    colors: 'black'
  }
}

const mapDispatchToPropsSellZone = (dispatch) => {
  const updateProfile = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATEPROFILE', data: responseData})})};
  const updateTotal = () => {fetchFunc(profile_src, (responseData) => {dispatch({type: 'UPDATETOTAL'})})};
  const sellAction = (responseData, name, quantity) => {dispatch({type: 'SELLQUOTE', data: responseData, name: name, quantity: quantity})};
  const action = (name, quantity = 0) => {
    fetch(sellQuoteSrc(name, quantity))
    .then((response) => response.json())
    .then((responseData) => {
      sellAction(responseData, name, quantity);
    })
    .then((responseData) => {
      updateProfile();
    })
    .done();
  }
  return {
    initial: () => {},
    action: action
  }
}

const BuyZoneContainer = connect(mapStateToPropsBuyZone, mapDispatchToPropsBuyZone)(BuyStocksZone);
const SellZoneContainer = connect(mapStateToPropsSellZone, mapDispatchToPropsSellZone)(BuyStocksZone);
const LogsZoneContainer = connect(mapStateToPropsLogsZone)(LogsZone);
const ProfileZoneContainer = connect(mapStateToPropsProfileZone, mapDispatchToPropsProfileZone)(ProfileZone);

export {BuyZoneContainer, SellZoneContainer, LogsZoneContainer, ProfileZoneContainer};
