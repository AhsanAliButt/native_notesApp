import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bcd4',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.button}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
