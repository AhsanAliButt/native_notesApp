import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import TextInputWithPlaceHolder from '../../../components/textInput/TextInputWithPlaceHolder';

const Home = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInputWithPlaceHolder
          style={{
            width: '70%',
          }}
        />
        <TouchableOpacity
          style={{
            width: '30%',
          }}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
