import {TextInput, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const TexTInputWithPlaceHolder = ({
  onChangeText,
  onChange,
  value,
  header,
  placeholder,
  secureTextEntry,
  style,
}) => {
  return (
    <>
      <Text style={styles.text}>{header}</Text>
      <TextInput
        type="text"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        onChangeText={onChangeText}
        onChange={onChange}
        value={value}
        style={style}
      />
    </>
  );
};

export default TexTInputWithPlaceHolder;
