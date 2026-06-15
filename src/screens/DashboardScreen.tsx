import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { themes } from '../theme'; 
import db from '../database/db';

const DashboardScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const theme = isDarkMode ? themes.dark : themes.light;
  const [characters, setCharacters] = useState([]);

  // هذا هو الجزء الذي كان ينقص الكود ليعمل فعلياً
  useEffect(() => {
    try {
      const allChars = db.getAllSync('SELECT * FROM characters');
      setCharacters(allChars);
    } catch (error) {
      console.error("خطأ في جلب الشخصيات:", error);
    }
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList 
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={{ color: theme.text, textAlign: 'center', marginTop: 50 }}>لا توجد شخصيات</Text>}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.name, { color: theme.accent }]}>{item.name}</Text>
            {/* يمكنك إضافة المزيد من الحقول هنا لاحقاً */}
          </View>
        )}
      />
      
      <TouchableOpacity style={[styles.fab, { backgroundColor: theme.accent }]}>
        <Text style={{ color: theme.background, fontWeight: 'bold', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { padding: 15, margin: 10, borderRadius: 12 },
  name: { fontSize: 20, fontWeight: 'bold' },
  fab: { 
    position: 'absolute', bottom: 30, right: 30, width: 50, height: 50, 
    borderRadius: 25, justifyContent: 'center', alignItems: 'center',
    elevation: 5 // للظلال على أندرويد
  }
});

export default DashboardScreen;
