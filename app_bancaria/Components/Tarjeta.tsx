import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Transaccion } from '../Models/Transaccion';

interface TarjetaProps {
    transaccion: Transaccion;
}

export default function Tarjeta({ transaccion }: TarjetaProps) {
    return (
        <View style={estilos.tarjeta}>
            <Text style={estilos.descripcion}>{transaccion.descripcion}</Text>
            <Text style={estilos.fecha}>{transaccion.fecha}</Text>
            <Text style={[
                estilos.monto,
                { color: transaccion.tipo === 'Deposito' ? '#4CAF50' : '#FF5722' }
            ]}>
                {transaccion.tipo === 'Deposito' ? '+' : '-'}L.{transaccion.monto}
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descripcion: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    fecha: {
        fontSize: 12,
        color: '#666',
        marginHorizontal: 8,
    },
    monto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});