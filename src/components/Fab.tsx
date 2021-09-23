import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface FabType {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({ title, onPress, position = 'br' }: FabType) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[
          style.buttonContainer,
          position === 'bl' ? style.left : style.right,
        ]}
      >
        <View style={style.button}>
          <Text style={style.buttonText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          style.buttonContainer,
          position === 'bl' ? style.left : style.right,
        ]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
        >
          <View style={style.button}>
            <Text style={style.buttonText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

export default Fab;

const style = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 20,
  },
  left: {
    left: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#887ee2',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#acd9ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: '#eee',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
