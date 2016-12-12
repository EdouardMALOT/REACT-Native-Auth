import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={Styles.SpinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const Styles = {
    SpinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
};

export { Spinner };
