import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles/styles';


export default class LogsZone extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const {logs} = this.props;
    return(
      <View style={{flex:1, justifyContent: 'center'}}>
        <View>
          <Text style={styles.welcome}>Logs</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',}}>
          {
            (logs.slice(0,20)).map((log) => (
              <View key={log['idx']}>
                <Text style={{textAlign: 'center'}}>{log['log']}</Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}
