import React from 'react';
import IcoMoon from 'react-icomoon';
import {Svg, Path} from 'react-native-svg';
import icoMoonConfig from './selection.json';

function Icon(props) {
  return (
    <IcoMoon
      native
      SvgComponent={Svg}
      PathComponent={Path}
      iconSet={icoMoonConfig}
      {...props}
    />
  );
}

export default Icon;
