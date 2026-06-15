import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CharacterCard } from '../components/CharacterCard';
import { Character } from '../database/schema';

// هذه هي الشاشة التي ستعرض تفاصيل الشخصية المختارة
export const DetailsScreen = ({ route }: { route: any }) => {
  const { character }: { character: Character } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* استدعاء البطاقة التي أنشأناها في الخطوة 5 */}
      <CharacterCard character={character} levelMult={1.5} />
      
      {/* هنا يمكنك إضافة تبويبات (Tabs) للمزيد من المعلومات لاحقاً */}
      <View style={styles.detailsContent}>
        {/* سيتم إضافة بقية تفاصيل المواهب والمهارات هنا */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  detailsContent: { padding: 20 }
});

