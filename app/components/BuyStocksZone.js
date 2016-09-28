import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import styles from '../styles/styles';
import BuyStockHead from './BuyStockHead';
import BuySellStock from './BuySellStock';


export default class BuyStocksZone extends Component{
  constructor(props) {
    super(props);
    this.props.initial();
  }
  render(){
    const {data, update, action, col1, col2, col3, col4, buttontext, updateProfile, colors} = this.props;
    return(
      <View style={styles.buyStocksContainer}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <BuyStockHead col1={col1} col2={col2} col3={col3} col4={col4}></BuyStockHead>
          {Object.keys(data).map((curr) => (
            <BuySellStock buttontext={buttontext}  key={curr} color={(colors === 'black') ? colors : colors[curr]}  name={curr} priceOrQuantity={data[curr]} update={update} updateProfile={updateProfile} action={action}></BuySellStock>
          ))
        }
      </View>
    </View>
  );
}
}
