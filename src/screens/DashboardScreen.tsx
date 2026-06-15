import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import db from '../database/db';
import { themes } from '../theme';

export default function DashboardScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const theme = themes.dark;
  useFocusEffect(useCallback(() => {
    const data = db.getAllSync('SELECT * FROM characters');
    setCharacters(data);
  }, []));
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>شخصياتي</Text>
      <FlatList data={characters} keyExtractor={(i) => i.id.toString()} renderItem={({ item }) => (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={{ color: theme.accent, fontSize: 18 }}>{item.name}</Text>
        </View>
      )} ListEmptyComponent={<Text style={{ color: theme.text }}>لا توجد شخصيات</Text>} />
      <TouchableOpacity style={[styles.fab, { backgroundColor: theme.accent }]} onPress={() => navigation.navigate('Create')}>
        <Text style={{ fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, title: { fontSize: 24, fontWeight: 'bold' }, card: { padding: 15, borderRadius: 10, marginBottom: 10 }, fab: { position: 'absolute', right: 30, bottom: 30, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' } });
