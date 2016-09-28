import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';


export default class ProfileZone extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {balance, total, total_color, reset} = this.props;
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{flex:1}}>
          <Text style={styles.profileHead}>Balance</Text>
          <Text style={styles.profileData}>{balance}</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.profileHead}>Reset</Text>
          <TouchableOpacity onPress={reset} style={styles.resetbutton}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{"reset"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.profileHead}>Total</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop:20, color: total_color}}>{total}</Text>
        </View>
      </View>
    );
  }
}
