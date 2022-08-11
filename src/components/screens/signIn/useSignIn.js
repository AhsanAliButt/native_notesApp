import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const useSignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    if (email === 'ahsan' && password === '123456') {
      navigation.navigate('Home');
      console.log('Sign in success');
    } else {
      console.log('Sign in failed');
    }
  };

  return {handleSignIn, email, password, setEmail, setPassword};
};

export default useSignIn;
