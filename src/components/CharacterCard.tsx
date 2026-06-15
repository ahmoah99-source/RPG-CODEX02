import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Calculator } from '../logic/Calculator';
import { Character } from '../database/schema';

interface Props {
  character: Character;
  levelMult: number;
}

export const CharacterCard = ({ character, levelMult }: Props) => {
  const hp = Calculator.calculateHealth(levelMult, character.baseStats.body);
  const atk = Calculator.calculateAttack(levelMult, character.baseStats.strength, character.baseStats.body, character.baseStats.agility, character.baseStats.spirit, 1);

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.rank}>الرتبة: {character.rank}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>الصحة: {Calculator.formatNumber(hp)} ❤️</Text>
        <Text style={styles.statText}>الهجوم: {Calculator.formatNumber(atk)} ⚔️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#1a1a1a', padding: 15, borderRadius: 10, margin: 10 },
  image: { width: '100%', height: 200, borderRadius: 5 },
  name: { color: '#FFD700', fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  rank: { color: '#fff', fontSize: 16 },
  statsContainer: { marginTop: 10 },
  statText: { color: '#ccc', fontSize: 14 }
});

