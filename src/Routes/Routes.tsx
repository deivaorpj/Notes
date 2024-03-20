// src/Navigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../pages/ListScreen';
import AddNota from '../pages/AddNota';
import { MaterialIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

interface Bottom {
  color: string;
  size: number;
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={ListScreen}
          options={{
            tabBarIcon: ({ color, size }: Bottom) => <MaterialIcons name="list" color={color} size={size} />
          }}
        />
        <Tab.Screen name="Add" component={AddNota}
          options={{
            tabBarIcon: ({ color, size }: Bottom) => <MaterialIcons name="plus-one" color={color} size={size} />
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
