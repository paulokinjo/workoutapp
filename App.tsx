import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterStoreContext } from './src/stores/CounterStore';

const styles = StyleSheet.create({});

const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);
  const [counter, setCount] = useState(counterStore.counter);

  return (
    <View>
      <Text>Hello from react native web {counter}</Text>
      <Button
        title="increment"
        onPress={() => setCount(counterStore.counter++)}
      />
      <StatusBar style="auto" />
    </View>
  );
});

export default App;
