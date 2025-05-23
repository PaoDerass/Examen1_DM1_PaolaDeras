import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Pages/Inicio';
import Transferencias from '../Pages/Transferencias';
import Historial from '../Pages/Historial';

export default function Navegacion() {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#666',
                headerStyle: {
                    backgroundColor: '#007AFF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen 
                name='Inicio' 
                component={Inicio}
                options={{
                    title: 'Mi Banco HN'
                }}
            />
            <Tab.Screen 
                name='Transferencias' 
                component={Transferencias}
                options={{
                    title: 'Transferencias'
                }}
            />
            <Tab.Screen 
                name='Historial' 
                component={Historial}
                options={{
                    title: 'Historial'
                }}
            />
        </Tab.Navigator>
    );
}