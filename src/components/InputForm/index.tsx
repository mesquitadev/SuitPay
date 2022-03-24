import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';

import {Input, Container, Icon, Error} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  icon: string;
  error: string;
}

interface InputRef {
  focus(): void;
}

const InputForm: React.ForwardRefRenderFunction<InputRef, Props> = (
  {control, name, icon, error, ...rest}: Props,
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Container isFocused={isFocused} isErrored={!!error}>
            {icon && <Icon name={icon} />}
            <Input
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputElementRef}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </Container>
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </>
  );
};

export default forwardRef(InputForm);
