import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

interface BtnPrincipalProps {
    titulo: string;
    onPress: () => void;
    color?: string;
}

export default function BtnPrincipal({ titulo, onPress, color = '#007AFF' }: BtnPrincipalProps) {
    return (
        <TouchableOpacity style={[estilos.boton, { backgroundColor: color }]} onPress={onPress}>
            <Text style={estilos.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    boton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 8,
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});