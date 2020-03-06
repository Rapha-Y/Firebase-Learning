import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import Loading from './screens/Loading';
import Home from './screens/Home';
import Login from './screens/Login';
import Signin from './screens/Signin';
import Message from './screens/Message';
import Notification from './screens/Notification';
import Post from './screens/Post';
import Profile from './screens/Profile';


import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAmO2SdNPrMIINFiXIq-tdiA2mJEPYLwGY",
  authDomain: "fir-learning-1f459.firebaseapp.com",
  databaseURL: "https://fir-learning-1f459.firebaseio.com",
  projectId: "fir-learning-1f459",
  storageBucket: "fir-learning-1f459.appspot.com",
  messagingSenderId: "704551034358",
  appId: "1:704551034358:web:b4cd12150f8c7313787bd7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor}></Icon>
          }
        },
        Messages: {
          screen: Message,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="chat" size={24} color={tintColor}></Icon>
          }
        },
        Post: {
          screen: Post,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon 
                name="add-circle" 
                size={48} 
                color={"#E9446A"}
                style={{
                  shadowColor: "#E9446A",
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}
              ></Icon>
            )
          }
        },
        Notifications: {
          screen: Notification,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={24} color={tintColor}></Icon>
          }
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="person" size={24} color={tintColor}></Icon>
          }
        },
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({navigation, defaultHandler}) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          }
        },
        tabBarOptions: {
          activeTintColor: "#161F3D",
          inactiveTintColor: "#B8BBC4",
          showLabel: false
        }
      },
    ),
    postModal: {
      screen: Post
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "postModal"
  }
); 

const AuthStack = createStackNavigator({
  Login: Login,
  Signin: Signin,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);