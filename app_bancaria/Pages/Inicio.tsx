import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import React from 'react';
import { useBancoContext } from '../Providers/BancoProvider';
import { Transaccion } from '../Models/Transaccion';
import BotonPrincipal from '../Components/BtnPrincipal';
import Saldo from '../Components/Saldo';
import TarjetaTransaccion from '../Components/Tarjeta';


export default function Inicio() {
    const context = useBancoContext();
    
    if (!context) {
        return <Text>Error: Contexto no disponible</Text>;
    }

    const { usuario, depositarDinero, ultimasTransacciones } = context;

    function manejarDeposito() {
        depositarDinero();
        Alert.alert('Éxito', 'Depósito de L.500 realizado correctamente');
    }

    const transaccionesUltimas = ultimasTransacciones();

    const renderTransaccion = ({ item }: { item: Transaccion }) => (
        <TarjetaTransaccion transaccion={item} />
    );

    return (
        <View style={estilos.contenedor}>
            <View style={estilos.seccionSaludo}>
                <Text style={estilos.saludo}>Hola, {usuario.nombre}</Text>
                <Text style={estilos.bienvenida}>Bienvenido al Banco HN</Text>
            </View>

            <Saldo etiqueta="Saldo Actual" saldo={usuario.saldo} />

            <BotonPrincipal 
                titulo="Depositar 500 Lempiras" 
                onPress={manejarDeposito}
                color="#4CAF50"
            />

            <View style={estilos.seccionHistorial}>
                <Text style={estilos.tituloHistorial}>Historial de ultimas 5 transacciones</Text>
                {transaccionesUltimas.length > 0 ? (
                    <FlatList
                        data={transaccionesUltimas}
                        renderItem={renderTransaccion}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text style={estilos.sinTransacciones}>No hay transacciones recientes</Text>
                )}
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    seccionSaludo: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 16,
        alignItems: 'center',
    },
    saludo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    bienvenida: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    seccionHistorial: {
        flex: 1,
    },
    tituloHistorial: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    sinTransacciones: {
        textAlign: 'center',
        color: '#666',
        fontSize: 16,
        marginTop: 20,
    },
});