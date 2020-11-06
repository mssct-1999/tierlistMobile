import React from 'react'
import {Stylesheet, Button, View, Text} from 'react-native'

const UnderlineTitle = ({text}) => {
    return (
        <View style={{marginTop:15}}>
            <View style={{backgroundColor:'#d2565d', width: 120,height:15,overflow:"visible",padding:2, overflow:"visible", opacity:0.33}}>
            </View>
            <Text style={{color:'white',textTransform:'uppercase',fontWeight:'bold', marginTop:-21, marginLeft:5}}>{text}</Text>
        </View>
    )
}

export default UnderlineTitle;