import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
  // بيانات تجريبية لمحاكاة الشكل النهائي
  const characters = [{ id: '1', name: 'اوزوريس', talent: 'مصر القديمة', talentRank: 'S', atk: 850, maxAtk: 1000, level: 50, levelColor: '#00FF00' }];

  const renderCharacterCard = ({ item }) => (
    <ImageBackground source={require('../../assets/images/card-bg.png')} style={styles.card} imageStyle={styles.cardImage}>
      <View style={styles.overlay}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.talent}>الموهبة: {item.talent} | الرتبة: {item.talentRank}</Text>
        
        {/* شريط الهجوم */}
        <View style={styles.barContainer}>
          <Text style={styles.barLabel}>الهجوم: {item.atk} / {item.maxAtk}</Text>
          <View style={styles.barBg}><View style={[styles.barFill, { width: '85%', backgroundColor: '#FF4500' }]} /></View>
        </View>

        <Text style={[styles.level, { color: item.levelColor }]}>المستوى: {item.level}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList data={characters} renderItem={renderCharacterCard} keyExtractor={(item) => item.id} />
      <TouchableOpacity style={styles.fab}><Text style={styles.fabText}>+</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  card: { height: 160, margin: 10 },
  cardImage: { borderRadius: 10, opacity: 0.8 }, // الشفافية المطلوبة
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: 15, borderRadius: 10 }, // Overlay للوضوح
  name: { color: '#FFD700', fontSize: 20, fontWeight: 'bold' },
  talent: { color: '#CCC', fontSize: 12, marginBottom: 10 },
  barContainer: { marginBottom: 8 },
  barLabel: { color: '#FFF', fontSize: 10 },
  barBg: { height: 10, backgroundColor: '#222', borderRadius: 5 },
  barFill: { height: '100%', borderRadius: 5 },
  level: { fontWeight: 'bold', fontSize: 14, marginTop: 5 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#FFD700', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  fabText: { fontSize: 30, color: '#000' }
});

export default DashboardScreen;

