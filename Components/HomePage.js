import React from 'react'
import { StyleSheet ,Button, View, Text } from 'react-native';
import UnderlineTitle from './UnderlineTitle'
import AvatarItem from './AvatarItem'

class HomePage extends React.Component {
    render() {
        return (
            <View style={styles.mainHomePage}>
                <UnderlineTitle text="L'émission"/>
                <View style={styles.divDescription}>
                    <Text style={styles.textDescription}>Tier List est une émission produite par <Text style={{fontWeight:"bold"}}>Studio Majorelle</Text>.</Text>
                    <Text style={styles.textDescription}>Le but de cette émission est de classer tous les albums de l'Histoire du rap français.</Text>
                    <Text style={styles.textDescription}>Pour ce faire 4 intervenants, décortiquent chaque semaine 5 albums différents et en profitent pour livrer leurs ressentis à tour de rôle pour établir une liste pas du tout impartial, mais c'est ça qu'on aime.</Text>
                    <Text style={styles.textDescription}>A noter que le concept est inspiré de celui du podcast <Text style={{fontWeight:"bold"}}>Super Ciné Battle</Text> de <Text style={{fontWeight:"bold"}}>Daniel Andreyev</Text> et <Text style={{fontWeight:"bold"}}>Papa / GKPluginBaby</Text> qui gravent dans le marbre la liste ultime du Cinéma.</Text>
                </View>
                <UnderlineTitle text="S/O EKIP"/>
                <View style={styles.divDescription}>
                    <View style={styles.rowAvatar}>
                        <AvatarItem fileName="mehdi" nom="Mehdi Maïzi"/>
                        <AvatarItem fileName="yerim" nom="Yérim Sar"/>
                    </View>
                    <View style={styles.rowAvatar}>
                        <AvatarItem fileName="neefa" nom="Neefa"/>
                        <AvatarItem fileName="sandra" nom="Sandra Gomes"/>   
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainHomePage: {
        // backgroundColor:'red'
    },
    divDescription: {
        backgroundColor: "#212038",
        borderRadius:5,
        padding:9,
        marginTop: 10,
        marginBottom: 25
    },
    textDescription: {
        color:'white',
        marginTop:5,
        marginBottom:5
    },
    rowAvatar: {
        marginBottom: 15,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around"
    }
})

export default HomePage