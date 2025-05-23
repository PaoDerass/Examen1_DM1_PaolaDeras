import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface SaldoProps {
    etiqueta: string;
    saldo: number;
    colorFondo?: string;
}

export default function Saldo({ etiqueta, saldo, colorFondo = '#007AFF' }: SaldoProps) {
    return (
        <View style={[estilos.seccion, { backgroundColor: colorFondo }]}>
            <Text style={estilos.etiqueta}>{etiqueta}</Text>
            <Text style={estilos.saldo}>L.{saldo.toLocaleString()}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    seccion: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 16,
        alignItems: 'center',
    },
    etiqueta: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 8,
    },
    saldo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
});