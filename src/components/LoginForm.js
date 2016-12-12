import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }


  onLoginSucess() {
    this.setState({
                    email: '',
                    password: '',
                    error: '',
                    loading: false
                  });
  }

  onLoginFailed() {
                this.setState({ error: 'Authentification failed.', loading: false });
  }


  renderButton() {
    if (this.state.loading) {
      return (<Spinner size='small' />);
    }

    return (<Button WhenPress={this.onButtonPress.bind(this)}>
              Login or Sign In
            </Button>);
  }


  render() {
      return (
        <Card>
          <CardSection>
              <Input
                label="Email"
                placeHolder="user@gmail.com"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
          </CardSection>

          <CardSection>
              <Input
                hidetext
                label="Password"
                placeHolder="password"
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
          </CardSection>

          <Text style={Styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      );
  }
}


const Styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
