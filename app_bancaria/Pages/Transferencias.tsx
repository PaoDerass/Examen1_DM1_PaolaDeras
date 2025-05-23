import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useBancoContext } from '../Providers/BancoProvider';
import Entrada from '../Components/Entrada';
import BtnPrincipal from '../Components/BtnPrincipal';
import Saldo from '../Components/Saldo';


export default function Transferencias() {
    const context = useBancoContext();
    
    if (!context) {
        return <Text>Error: Contexto no disponible</Text>;
    }

    const { usuario, transferirDinero } = context;

    const [numeroCuenta, setNumeroCuenta] = useState('');
    const [nombreDestinatario, setNombreDestinatario] = useState('');
    const [monto, setMonto] = useState('');

    function limpiarFormulario() {
        setNumeroCuenta('');
        setNombreDestinatario('');
        setMonto('');
    }

    function manejarTransferencia() {
        if (!numeroCuenta || !nombreDestinatario || !monto) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        const montoNumerico = parseFloat(monto);

        if (isNaN(montoNumerico) || montoNumerico <= 0) {
            Alert.alert('Error', 'Por favor ingresa un monto válido');
            return;
        }

        const transferenciaExitosa = transferirDinero(montoNumerico, nombreDestinatario, numCuenta);

        if (transferenciaExitosa) {
            Alert.alert(
                'Transferencia exitosa',
                `Se transfirió L.${montoNumerico} a ${nombreDestinatario}`,
                [{ text: 'OK', onPress: limpiarFormulario }]
            );
        } else {
            Alert.alert(
                'Saldo insuficiente',
                'No cuenta con el saldo para completar la transacción'
            );
        }
    }

    return (
        <ScrollView style={estilos.contenedor}>
            <Saldo etiqueta="Saldo disponible" saldo={usuario.saldo} />

            <View style={estilos.formulario}>
                <Text style={estilos.titulo}>Realizar Transferencia</Text>

                <Entrada
                    etiqueta="Número de Cuenta"
                    placeholder="Ingrese número de cuenta"
                    valor={numeroCuenta}
                    onChangeText={setNumeroCuenta}
                    Teclado="numeric"
                />

                <Entrada
                    etiqueta="Nombre del Destinatario"
                    placeholder="Ingrese nombre completo"
                    valor={nombreDestinatario}
                    onChangeText={setNombreDestinatario}
                />

                <Entrada
                    etiqueta="Monto a Transferir"
                    placeholder="Ingrese el monto"
                    valor={monto}
                    onChangeText={setMonto}
                    Teclado="decimal-pad"
                />

                <BtnPrincipal 
                    titulo="Transferir Saldo" 
                    onPress={manejarTransferencia}
                    color="#FF9800"
                />
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    formulario: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
});