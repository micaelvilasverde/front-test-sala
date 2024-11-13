import { Prato } from './prato.model';

export interface Pedido {
    id?: number; // Torna o id opcional
    cliente: string;
    status: string;
    itens: { nome: string; quantidade: number }[];
    pratos?: Prato[]; // Supondo que pratos seja opcional
}
