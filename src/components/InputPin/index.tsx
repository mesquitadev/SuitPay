import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';

import {Error, Input} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  icon: string;
  error: string;
}

function InputForm({control, name, error, ...rest}: Props) {
  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            keyboardType="numeric"
            codeLength={6}
            onTextChange={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </>
  );
}

export default InputForm;
