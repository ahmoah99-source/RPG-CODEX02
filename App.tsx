// App.tsx
import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { initDatabase } from './src/database/db';

export default function App() {
  
  useEffect(() => {
    // Calling the database initialization logic when the app starts
    initDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>RPG System Initialized Successfully!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

