import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
console.log(width, height);
const widthRatio = width - 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 2,
  },
  button: {
    widthRatio,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
