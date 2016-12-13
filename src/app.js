import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { LoggedIn: null }

  componentWillMount() {
    // Initialize Firebase
      Firebase.initializeApp({
        apiKey: 'AIzaSyCDDsCzc1JJLnwjByt8tu4phDrR2dOM5y4',
        authDomain: 'authreactnative-c6d29.firebaseapp.com',
        databaseURL: 'https://authreactnative-c6d29.firebaseio.com',
        storageBucket: 'authreactnative-c6d29.appspot.com',
        messagingSenderId: '958248288742'
      });

      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ LoggedIn: true });
        } else {
          this.setState({ LoggedIn: false });
        }
      });
  }


  renderContent() {
    switch (this.state.LoggedIn) {
      case true:
                return (
                  <CardSection>
                    <Button WhenPress={() => Firebase.auth().signOut()}>Logout</Button>
                  </CardSection>
                );
      case false:
                return (<LoginForm />);
      default:
                return (<CardSection><Spinner /></CardSection>);
    }
  }


  render() {
      return (
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
