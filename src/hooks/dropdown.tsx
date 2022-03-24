import React, {useRef, createContext, useContext, ReactNode} from 'react';
import styled from 'styled-components/native';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';

const DropDownContext = createContext(null);

interface DropdownProps {
  children: ReactNode;
}

export function DropDownComponentProvider({children}: DropdownProps) {
  const ref = useRef<DropdownAlertType>();
  return (
    <DropDownContext.Provider
      value={{
        ref,
      }}>
      {children}
      <DropdownAlert ref={ref} />
    </DropDownContext.Provider>
  );
}

export const useDropDown = () => useContext(DropDownContext);
