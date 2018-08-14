import React from 'react';
import { View, Text } from 'react-native';
import LiveChat from 'react-native-livechat';
export default class FirstTabScreen extends React.Component {
    render(){
        return (
            <View>
                <LiveChat license={9652040} />
                <Text>Screen One</Text>
            </View>    
        )
    }
}