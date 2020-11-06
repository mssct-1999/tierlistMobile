import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'

class AvatarItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.fileName = this.props.fileName;
        this.nom = this.props.nom
    }
    
    getAvatarImage() {
        switch(this.fileName) {
            case 'mehdi':
                return require('../assets/mehdi.png');
            case 'neefa':
                return require('../assets/neefa.png');
            case 'yerim':
                return require('../assets/yerim.png');
            case 'sandra':
                return require('../assets/sandra.png');
        }
    }

    render() {
        return (
            <View>
                <View style={styles.wrapperAvatar}>
                    <View style={styles.circleDiv}>
                        <Image
                        style={styles.avatarImage}
                        source={this.getAvatarImage()}/>
                    </View>
                    <Text style={styles.nomAvatar}>{this.nom}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperAvatar: {
        flex:1,
        alignItems:"center"
    },
    circleDiv: {
        backgroundColor: "#121123",
        width: 100,
        height:100,
        borderRadius: 50,
        overflow:"hidden"
    },
    avatarImage: {
        flex:1,
        width: null, 
        height:null,
        resizeMode: 'contain'
    },
    nomAvatar: {
        color:'white',
        fontWeight:'bold',
        marginTop: 10
    }
})

export default AvatarItem;