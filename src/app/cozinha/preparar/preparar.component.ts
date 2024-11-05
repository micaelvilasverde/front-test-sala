import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido.model';

@Component({
  standalone: true,
  selector: 'app-preparar',
  imports: [RouterModule, CommonModule],
  templateUrl: './preparar.component.html',
  styleUrl: './preparar.component.css'
})
export class PrepararComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(
  private router: Router,
  private location: Location,
  private pedidoService: PedidoService){}


  ngOnInit(): void {
    this.carregarPedidos(); // Carregar pedidos ao inicializar o componente
  }

  carregarPedidos(): void {
    this.pedidoService.listarPedidos().subscribe(
      (response: Pedido[]) => {
        this.pedidos = response.filter(pedido => pedido.status === 'A_PREPARAR');
      },
      error => {
        console.error('Erro ao carregar pedidos:', error);
      }
    );
  }
  preparando(pedidoId: number): void {
    // Atualiza o status do pedido para "PREPARANDO"
    this.pedidoService.atualizarStatus(pedidoId, 'PREPARANDO').subscribe(
      response => {
        console.log('Status atualizado para PREPARANDO:', response);
        this.router.navigate(['/preparando']); // Redireciona para a tela de "preparando"
      },
      error => {
        console.error('Erro ao atualizar status:', error);
      }
    );
  }


  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }


}
