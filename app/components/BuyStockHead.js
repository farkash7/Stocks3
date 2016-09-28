import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles/styles';


export default class BuyStockHead extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.buyStocksRow}>
        <View style={{flex:1}}>
          <Text style={styles.buyStockHead}>{this.props.col1}</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.buyStockHead}>{this.props.col2}</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.buyStockHead}>{this.props.col3}</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.buyStockHead}>{this.props.col4}</Text>
        </View>
      </View>
    )
  }
}
