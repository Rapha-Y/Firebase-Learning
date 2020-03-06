import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export default class Post extends React.Component {
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

                <TouchableOpacity style={styles.photo}>
                    <Icon name="camera-alt" size={32} color="#D8D9DB"></Icon>
                </TouchableOpacity>
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