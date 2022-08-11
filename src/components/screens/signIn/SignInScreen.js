import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import TexTInputWithPlaceHolder from '../../textInput/TextInputWithPlaceHolder';
import useSignIn from './useSignIn';

const SignInScreen = () => {
  const img = require('../../../../assets/background.jpg');
  const {email, password, setEmail, setPassword, handleSignIn} = useSignIn();
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.background}>
        <Text style={styles.text}>SignInScreen</Text>
        <View style={styles.secondContainer}>
          <TexTInputWithPlaceHolder
            header={'UserName'}
            placeholder={'Plz Enter Your email'}
            onChangeText={setEmail}
            value={email}
          />
          <TexTInputWithPlaceHolder
            header={'Password'}
            placeholder={'Plz Enter Your Password'}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
