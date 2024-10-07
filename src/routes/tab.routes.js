// routes/tab.routes.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Saiba from '../screens/saiba_mais';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarHideOnKeyboard: false,
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 10,
          backgroundColor: '#1C88C9',
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
