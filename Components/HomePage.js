import React from 'react'
import { StyleSheet ,Button, View, Text } from 'react-native';

class HomePage extends React.Component {
    render() {
        return (
            <View style={StyleSheet.mainHomePage}>
                <Text>Hello</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainHomePage: {
        backgroundColor:'red'
    }
})

export default HomePage