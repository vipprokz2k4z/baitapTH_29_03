import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AppNavigator from './src/router/index';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator isLoggedIn={isLoggedIn} />
      <Button title="Toggle Login" onPress={() => setIsLoggedIn(!isLoggedIn)} />
    </View>
  );
}
