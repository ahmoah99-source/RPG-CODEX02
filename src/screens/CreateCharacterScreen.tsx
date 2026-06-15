import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import db from '../database/db';

export default function CreateCharacterScreen({ navigation }) {
  const [name, setName] = useState('');
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="اسم الشخصية" value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />
      <Button title="حفظ" onPress={() => { db.runSync('INSERT INTO characters (name) VALUES (?)', [name]); navigation.goBack(); }} />
    </View>
  );
}
