import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { initDatabase } from './src/database/db';
import DashboardScreen from './src/screens/DashboardScreen';

export default function App() {
  useEffect(() => {
    // بناء الجداول مرة واحدة عند تشغيل التطبيق
    initDatabase();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar بتغير لونها حسب الوضع الليلي أو الفاتح 
        ممكن نربطها لاحقاً بالثيم برضه
      */}
      <StatusBar barStyle="light-content" />
      <DashboardScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // اللون الافتراضي الأساسي
  },
});
