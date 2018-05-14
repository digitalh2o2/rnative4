import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import LoginForm from "./components/LoginForm";

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB1Em1CVPNt74wsdtT9I3_y60x9bQP4bxE",
      authDomain: "manager-ce3d5.firebaseapp.com",
      databaseURL: "https://manager-ce3d5.firebaseio.com",
      projectId: "manager-ce3d5",
      storageBucket: "manager-ce3d5.appspot.com",
      messagingSenderId: "168224570695"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
