import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Scanner: React.FC = () => {
  const onBarCodeRead = e => {
    Alert.alert(`Barcode value is${e.data}`, `Barcode type is${e.type}`);
  };

  return (
    <View style={styles.container}>
      <RNCamera style={styles.preview} onBarCodeRead={onBarCodeRead}>
        <Text
          style={{
            backgroundColor: 'white',
          }}>
          BARCODE SCANNER
        </Text>
      </RNCamera>
    </View>
  );
};

export default Scanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
