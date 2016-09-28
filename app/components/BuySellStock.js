import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles/styles';


export default class BuySellStock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: 0
    }
    this.clearText = this.clearText.bind(this);
  }
  clearText() {
    this._textInput.setNativeProps({text: ''});
  }
  render(){
    const {name, priceOrQuantity, action, update, buttontext, updateProfile, color} = this.props;
    return(
      <View style={styles.buyStocksRow}>
        <View style={{flex:1}}>
          <Text style={styles.buyStock}>{name}</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={{fontSize: 17, marginTop:10, fontWeight: 'bold', textAlign: 'center', color: color}}>{priceOrQuantity}</Text>
        </View>
        <TouchableOpacity onPress={() => {action(name, parseInt(this.state.text)); this.clearText()}} style={styles.button}>
          <Text>{buttontext}</Text>
        </TouchableOpacity>
        <View style={{flex:1}}>
          <TextInput
            ref={component => this._textInput = component}
            style={{flex:1,fontSize: 15, fontWeight: 'bold',textAlign: 'center'}}
            placeholder="Type Here"
            onChangeText={(text) => {this.setState({text:text});}}
            />
        </View>
      </View>
    )
  }
}
