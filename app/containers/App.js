import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

import StocksReducer from '../reducers/stock'
import {styles} from '../components/components'
import {BuyZoneContainer, SellZoneContainer, LogsZoneContainer, ProfileZoneContainer} from './containersComponents';


export default class App extends Component{
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <Provider store={createStore(StocksReducer)}>
            <View style={{flex: 1}}>
              <ViewPagerAndroid style={{flex: 3}} initialPage={1}>
                <View style={styles.pageStyle, styles.container}>
                  <View style={{flex: 1,justifyContent: 'center',}}>
                    <Text style={styles.welcome}>{'Sell Zone'}</Text>
                  </View>
                  <SellZoneContainer col1={'Name'} col2={'Quantity'} col3={'Sell'} col4={'How Many'} buttontext={'sell'}></SellZoneContainer>
                </View>
                <View style={styles.pageStyle, styles.container}>
                  <View style={{flex: 1,justifyContent: 'center',}}>
                    <Text style={styles.welcome}>{'Buy Zone'}</Text>
                  </View>
                  <BuyZoneContainer col1={'Name'} col2={'Price'} col3={'Buy'} col4={'How Many'} buttontext={'buy'}></BuyZoneContainer>
                </View>
                <View style={styles.pageStyle, styles.container}>
                  <View>
                    <LogsZoneContainer></LogsZoneContainer>
                  </View>
                </View>
              </ViewPagerAndroid>
              <View style={{flex: 1}}>
                <ProfileZoneContainer></ProfileZoneContainer>
              </View>
            </View>
          </Provider>
        </View>
      );
    }
  }
