import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface EntradaProps {
    etiqueta: string;
    placeholder: string;
    valor: string;
    onChangeText: (texto: string) => void;
    Teclado?: 'numeric' | 'default' | 'decimal-pad';
}

export default function Entrada({ 
    etiqueta, 
    placeholder, 
    valor, 
    onChangeText, 
    Teclado = 'default' 
}: EntradaProps) {
    return (
        <View style={estilos.campo}>
            <Text style={estilos.etiqueta}>{etiqueta}</Text>
            <TextInput
                style={estilos.entrada}
                placeholder={placeholder}
                value={valor}
                onChangeText={onChangeText}
                keyboardType={Teclado}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    campo: {
        marginBottom: 16,
    },
    etiqueta: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#333',
    },
    entrada: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
});