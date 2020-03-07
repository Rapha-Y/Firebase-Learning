import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import Fire from '../Fire'
import * as ImagePicker from 'expo-image-picker'

export default class Post extends React.Component {
    state = {
        text: "",
        image: null
    };

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.android) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != "granted") {
                alert("We kinda need your authorization to access the camera roll");
            }
        }
    };
    
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name="arrow-back" size={24} color="#D8D9DB"></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "500" }}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image 
                        source={{uri: "https://static.myfigurecollection.net/pics/figure/big/655584.jpg"}}
                        style={styles.avatar}
                    ></Image>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={2}
                        style={{flex: 1, textAlignVertical: "top"}}
                        placeholder="I'm empty, write something in me!"
                    ></TextInput>
                </View>

                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Icon name="camera-alt" size={32} color="#D8D9DB"></Icon>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image 
                        source={{ uri: this.state.image }} 
                        style={{ width: "100%", height: "100%" }}
                    >
                    </Image>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1, 
        borderBottomColor: "#D8D9DB",
    },
    inputContainer: {
        marginHorizontal: 32,
        marginVertical: 16,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
});