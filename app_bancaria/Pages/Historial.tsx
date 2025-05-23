import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Transaccion } from '../Models/Transaccion';
import { useBancoContext } from '../Providers/BancoProvider';


export default function Historial() {
    const context = useBancoContext();
    
    if (!context) {
        return <Text>Error: Contexto no disponible</Text>;
    }

    const { transacciones } = context;

    const renderTransaccion = ({ item }: { item: Transaccion }) => (
        <View style={estilos.tarjetaHistorial}>
            <View style={estilos.contenidoTransaccion}>
                <Text style={estilos.descripcion}>{item.descripcion}</Text>
                <Text style={estilos.fecha}>{item.fecha}</Text>
                {item.destinatario && (
                    <Text style={estilos.destinatario}>Para: {item.destinatario}</Text>
                )}
            </View>
            <View style={estilos.contenidoMonto}>
                <Text style={[
                    estilos.monto,
                    { color: item.tipo === 'Deposito' ? '#4CAF50' : '#FF5722' }
                ]}>
                    {item.tipo === 'Deposito' ? '+' : '-'}L.{item.monto}
                </Text>
                <Text style={[
                    estilos.tipo,
                    { color: item.tipo === 'Deposito' ? '#4CAF50' : '#FF5722' }
                ]}>
                    {item.tipo}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={estilos.contenedor}>
            <View style={estilos.encabezado}>
                <Text style={estilos.titulo}>Historial de Transacciones</Text>
                <Text style={estilos.totalTransacciones}>
                    Total: {transacciones.length} transacciones
                </Text>
            </View>

            {transacciones.length > 0 ? (
                <FlatList
                    data={transacciones}
                    renderItem={renderTransaccion}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={estilos.lista}
                />
            ) : (
                <View style={estilos.sinTransacciones}>
                    <Text style={estilos.textoSinTransacciones}>
                        No hay transacciones registradas
                    </Text>
                    <Text style={estilos.sugerencia}>
                        Realiza un depósito o transferencia para ver tu historial
                    </Text>
                </View>
            )}
        </View>
    );
}
    const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    encabezado: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    totalTransacciones: {
        fontSize: 16,
        color: '#666',
    },
    lista: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    tarjetaHistorial: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    contenidoTransaccion: {
        flex: 1,
        marginRight: 16,
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    fecha: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    destinatario: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
    },
    contenidoMonto: {
        alignItems: 'flex-end',
    },
    monto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    tipo: {
        fontSize: 12,
        fontWeight: '500',
    },
    sinTransacciones: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    textoSinTransacciones: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 8,
    },
    sugerencia: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
});