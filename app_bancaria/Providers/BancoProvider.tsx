import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { Plantilla } from '../Models/Plantilla';
import { Usuario } from '../Models/Usuario';
import { Transaccion } from '../Models/Transaccion';
import { BancoContext } from '../Context/BancoContext';

export default function ProviderBanco({ children }: Plantilla) {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: 'Paola Deras',
        saldo: 15000
    });

    const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

    function depositarDinero() {
        const transaccionNueva: Transaccion = {
            id: Date.now().toString(),
            tipo: 'Deposito',
            monto: 500,
            descripcion: 'Depósito de 500 Lempiras',
            fecha: new Date().toLocaleDateString()
        };

        setUsuario(saldoAnterior => ({
            ...saldoAnterior,
            saldo: saldoAnterior.saldo + 500
        }));

        setTransacciones(transaccionesAnteriores => [transaccionNueva, ...transaccionesAnteriores]);
    }

    function transferirDinero(monto: number, destinatario: string, numCuenta: number): boolean {
        if (usuario.saldo < monto) {
            return false;
        }

        const nuevaTransaccion: Transaccion = {
            id: Date.now().toString(),
            tipo: 'Transferencia',
            monto: monto,
            descripcion: `Transferencia de ${monto} Lempiras a ${destinatario}`,
            fecha: new Date().toLocaleDateString(),
            destinatario: destinatario
        };

        setUsuario(saldoAnterior => ({
            ...saldoAnterior,
            saldo: saldoAnterior.saldo - monto
        }));

        setTransacciones(transaccionesAnteriores => [nuevaTransaccion, ...transaccionesAnteriores]);
        return true;
    }

    function ultimasTransacciones(): Transaccion[] {
        return transacciones.slice(0, 5);
    }

    return (
        <BancoContext.Provider value={{
            usuario,
            transacciones,
            depositarDinero,
            transferirDinero,
            ultimasTransacciones
        }}>
            {children}
        </BancoContext.Provider>
    );
}

export const useBancoContext = () => {
    return useContext(BancoContext);
};