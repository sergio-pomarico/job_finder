import React, {forwardRef, useState} from 'react';

import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import Box from '../atoms/box';
import {useTheme} from '../../config/theme';

interface InputProps extends TextInputProps {
  placeholder: string;
  onChance: (text: string) => void;
}

const Input = forwardRef<TextInput, InputProps>(({onChance, ...props}, ref) => {
  const theme = useTheme();
  const {value} = props;
  const [text, setText] = useState(value);

  const onChangeText = (input: string) => {
    setText(input);
    onChance(input);
  };

  return (
    <Box
      flexDirection="row"
      height={48}
      borderRadius="sm"
      alignItems="center"
      width="100%"
      padding="sm"
      backgroundColor="lightGray">
      <TextInput
        ref={ref}
        underlineColorAndroid="transparent"
        {...props}
        placeholderTextColor={theme.colors.secondary}
        autoCapitalize="none"
        style={styles.input}
        {...{onChangeText, value: text}}
      />
    </Box>
  );
});

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});

export default Input;
