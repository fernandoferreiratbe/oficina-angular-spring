import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda: any = { itens: [], frete: 0.0, total: 0.0 };
  item: any = {};

  clientes: Array<any>;
  produtos: Array<any>;

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.vendaService
      .listarClientes()
      .subscribe(response => this.clientes = response);

      this.vendaService
      .listarProdutos()
      .subscribe(response => this.produtos = response);
  }

  incluirItem() {
    this.item.total = this.item.produto.valor * this.item.quantidade;

    this.venda.itens.push(this.item);

    this.item = {};

    this.calcularTotal();
  }

  calcularTotal() {
    const totalItens = this.venda.itens
      .map(i => (i.produto.valor * i.quantidade))
      .reduce((total, v) => total + v, 0);

      this.venda.total = totalItens + this.venda.frete;
  }
}
