import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import BancoProvider from './Providers/BancoProvider';

export default function App() {
    return (
        <BancoProvider>
            <NavigationContainer>
                <Navegacion />
                <StatusBar style="light" />
            </NavigationContainer>
        </BancoProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});