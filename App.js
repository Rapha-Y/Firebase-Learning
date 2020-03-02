import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './screens/Loading'
import Home from './screens/Home'
import Login from './screens/Login'
import Signin from './screens/Signin'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAmO2SdNPrMIINFiXIq-tdiA2mJEPYLwGY",
  authDomain: "fir-learning-1f459.firebaseapp.com",
  databaseURL: "https://fir-learning-1f459.firebaseio.com",
  projectId: "fir-learning-1f459",
  storageBucket: "fir-learning-1f459.appspot.com",
  messagingSenderId: "704551034358",
  appId: "1:704551034358:web:b4cd12150f8c7313787bd7"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: Home
})

const AuthStack = createStackNavigator({
  Login: Login,
  Signin: Signin,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);