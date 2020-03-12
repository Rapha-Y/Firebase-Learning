import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Fire from '../Fire';
import { ScrollView } from 'react-native-gesture-handler';
import UserPermissions from '../utilities/UserPermissions';
import * as ImagePicker from 'expo-image-picker';

Icon.loadFont();

export default class Signin extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        user: {
            username: "",
            email: "",
            password: "",
            avatar: null
        },
        errorMessage: null
    };

    handlePickAvatar = async () => {
        UserPermissions.getCameraPermission();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri } });
        }
    }

    handleSignUp = () => {
        Fire.shared.createUser(this.state.user);
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                
                <TouchableOpacity style={styles.back} onPress={() => {this.props.navigation.goBack();}}>
                    <Icon name="arrow-back" size={40} color="#FFF"></Icon>
                </TouchableOpacity>
            
                <Text style={styles.greeting}>{"Welcome! Err...\nWhat do you go by?"}</Text>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={styles.avatarPlaceholder} onPress={this.handlePickAvatar}>
                        <Image source={{uri: this.state.user.avatar}} style={styles.avatar} />
                        <Icon name="add" size={40} color="#FFF" style={{marginTop: 6}}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={username => this.setState({ user: { ...this.state.user, username } })}
                            value={this.state.user.username}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>E-mail Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                            value={this.state.user.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ user: { ...this.state.user, password } })}
                            value={this.state.user.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        //styles below are only present so the Text component doesn't overlap the TouchableOpacity
        alignSelf: "center",
        width: 200
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        //give marginBottom to the page's last component
        marginBottom: 100
    },
    back: {
        position: "absolute",
        top: 32,
        left: 28,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#E9446A",
        alignItems: "center",
        justifyContent: "center"
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#E1E2E6",
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});