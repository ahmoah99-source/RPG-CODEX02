import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import db from '../database/db';

const DashboardScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // جلب الشخصيات من قاعدة البيانات
    const allChars = db.getAllSync('SELECT * FROM characters');
    setCharacters(allChars);
  }, []);

  const renderCharacterCard = ({ item }) => (
    <ImageBackground 
      source={require('../../assets/images/card-bg.png')} 
      style={styles.card} 
      imageStyle={styles.cardImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.name}>{item.name}</Text>
        {/* عرض الإحصائيات الأساسية المتاحة في الـ Schema */}
        <Text style={styles.stats}>القوة: {item.base_strength} | الرشاقة: {item.base_agility}</Text>
        <Text style={styles.stats}>الجسد: {item.base_body} | الروح: {item.base_spirit}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      {characters.length > 0 ? (
        <FlatList 
          data={characters} 
          renderItem={renderCharacterCard} 
          keyExtractor={(item) => item.id.toString()} 
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>لا توجد شخصيات حالياً، اضغط + للإضافة</Text>
        </View>
      )}
      
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  card: { height: 130, margin: 10 },
  cardImage: { borderRadius: 10, opacity: 0.8 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: 15, borderRadius: 10 },
  name: { color: '#FFD700', fontSize: 20, fontWeight: 'bold' },
  stats: { color: '#FFF', fontSize: 14, marginTop: 5 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#888', fontSize: 16 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#FFD700', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  fabText: { fontSize: 30, color: '#000' }
});

export default DashboardScreen;
