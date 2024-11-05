// pedido.model.ts
export interface Pedido {
    id: number;
    status: string;
    itens: { nome: string; quantidade: number }[]; // Estrutura do item do pedido
  }
  