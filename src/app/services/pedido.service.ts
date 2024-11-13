import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prato } from '../models/prato.model';
import { Pedido } from '../models/pedido.model'; // Verifique se o modelo Pedido está importado


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/api/pedidos'; // Ajuste para o endpoint do seu backend
  private pratosSelecionados: Prato[] = [];

  constructor(private http: HttpClient  ) {}

  criarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>('http://localhost:8080/api/pedidos', pedido);
}


  
  

  listarPedidos(): Observable<Pedido[]> {
    // Método para buscar a lista de pedidos do backend
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  adicionarPrato(prato: Prato): void {
    this.pratosSelecionados.push(prato);
  }
  

  getPratos(): Prato[] {
    console.log("Retornando pratos:", this.pratosSelecionados);
    return this.pratosSelecionados;
  }

  limparPedido(): void {
    this.pratosSelecionados = [];
  }

  atualizarStatus(id: number, status: string): Observable<Pedido> {
    // Método para atualizar o status de um pedido específico
    return this.http.put<Pedido>(`${this.apiUrl}/${id}/status`, { status });
  }

}
