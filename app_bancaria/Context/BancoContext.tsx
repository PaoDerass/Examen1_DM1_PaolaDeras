import { createContext } from 'react';
import { Usuario } from '../Models/Usuario';
import { Transaccion } from '../Models/Transaccion';

interface BancoContextType {
   usuario: Usuario;
    transacciones: Transaccion[];
    depositarDinero: () => void;
    transferirDinero: (monto: number, destinatario: string, numCuenta: number) => boolean;
    ultimasTransacciones: () => Transaccion[];
}

export const BancoContext = createContext<BancoContextType | null>(null);