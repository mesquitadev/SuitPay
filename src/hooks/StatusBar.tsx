import React, {useCallback} from 'react';
import {Platform, StatusBar, StatusBarStyle} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useStatusBar = (style: string, color: string) => {
  const animated = true;
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style as StatusBarStyle, animated);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(color);
      }
    }, [animated, color, style]),
  );
};
