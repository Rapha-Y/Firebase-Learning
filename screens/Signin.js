import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

Icon.loadFont();

export default class Signin extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        username: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.username
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                
                <TouchableOpacity style={styles.back} onPress={() => {this.props.navigation.goBack(); console.log("hi");}}>
                    <Icon name="arrow-back" size={40} color="#FFF"></Icon>
                </TouchableOpacity>
            
                <Text style={styles.greeting}>{"Welcome! Err...\nWhat do you go by?"}</Text>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={styles.avatar}>
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
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>E-mail Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
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
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#E1E2E6",
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    }
});