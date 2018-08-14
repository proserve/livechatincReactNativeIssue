import React from 'react';
import { View, Text } from 'react-native';
import LiveChat from 'react-native-livechat';
export default class SecondTabScreen extends React.Component {
    render(){
        return (
            <View style={{flex: 1}}>
              <LiveChat license={9652040} />
                <Text>Screen two</Text>
            </View>    
        )
    }
}