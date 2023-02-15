import React from 'react';
import {Text, View} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color:'#f5c4d', fontSize: 40, textAlign:'center'}}>Bhot maza aa riya ay...!</Text>
      <Text style={{color:'blue', fontSize: 20, textAlign:'center'}}>Dill garden garden sa ho raha hai...!</Text>
    </View>
  );
};

export default YourApp;