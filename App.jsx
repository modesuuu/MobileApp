import react from "react";
import profile from "./screens/profile";
import Layouting from "./screens/layouting";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from "./screens/home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#17a65b',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -3 },
        },
      }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused, color, size }) => (<Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />) }} />
        <Tab.Screen name="Layouting" component={Layouting} options={{ tabBarIcon: ({ focused, color, size }) => (<Ionicons name={focused ? "grid" : "grid-outline"} size={size} color={color} />) }} />
        <Tab.Screen name="Profile" component={profile} options={{ tabBarIcon: ({ focused, color, size }) => (<Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
