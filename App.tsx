import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

// هذه البيانات تجريبية (Mock Data) للتأكد من أن كل شيء يعمل
// يمكنك لاحقاً استبدالها بقراءة ملفات الـ JSON القادمة من الإكسيل
const mockCharacter = {
  id: "1",
  name: "اوزوريس",
  category: "أوليمبي",
  level: "الثاني",
  rank: "F",
  image: "https://via.placeholder.com/400", 
  baseStats: { strength: 10, agility: 10, body: 20, spirit: 10 },
  finalStats: { strength: 10, agility: 10, body: 20, spirit: 10 },
  race: "بشري",
  world: "الأرض",
  weaponId: "w1"
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          initialParams={{ character: mockCharacter }}
          options={{ title: 'تفاصيل الشخصية', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFD700' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
