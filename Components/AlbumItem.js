import React from 'react'
import {StyleSheet,View,Text,Image,Button} from 'react-native'
import {getAlbumFromNameAndArtist,getAlbumCover} from '../API/LastFMAPI'

class AlbumItem extends React.Component {

    constructor(props) {
        super(props)
        this.artist = this.props.artist
        this.album = this.props.album
        this.classement = this.props.classement
        this.state = {
            album:{},
            cover:""
        }
    }

    async componentDidMount() {
        await getAlbumFromNameAndArtist(this.album,this.artist).then(data => {
            this.setState({album:data.album})
            this.setState({cover:data.album.image[2]['#text']})
            
        })
    }

    render() {
        return (
            <View>
                <View style={styles.wrapperClassement}>
                    <Text style={styles.classemment}>#{this.classement}</Text>
                </View>
                <View style={styles.wrapperAlbumItem}>
                    <Image
                    style={styles.albumImage}
                    source={{uri:this.state.cover}}
                    />
                    <View style={styles.wrapperDescription}>
                        <View>
                            <Text style={styles.albumNameText}>{this.state.album.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.albumDescriptionText}>{this.state.album.artist}</Text>
                        </View>
                    </View> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperClassement: {
        marginTop:10
    },
    classemment: {
        color:"#FCFCA3",
        fontWeight:"bold"
    },
    wrapperAlbumItem: {
       marginTop:0,
       backgroundColor: "#212038",
       padding:5,
       borderRadius:50,
       flexDirection:"row"
    },
    wrapperImageAlbum: {
        backgroundColor:"red"
    },
    albumImage: {
        borderRadius:50,
        width: 50,
        height:50,
        backgroundColor:"gray",
        resizeMode:"contain"
    },
    wrapperDescription:{
        marginLeft:5
    },
    albumNameText: {
        color:"white",
        fontWeight:"bold"
    },
    albumDescriptionText: {
        color:"white",
        marginTop: 5
    }
})

export default AlbumItem