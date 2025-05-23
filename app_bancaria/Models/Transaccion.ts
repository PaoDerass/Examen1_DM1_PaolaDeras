export interface Transaccion {
    id: string;
    tipo: 'Transferencia' | 'Deposito'  ;
    monto: number;
    descripcion: string;
    destinatario?: string;
    fecha: string;
}