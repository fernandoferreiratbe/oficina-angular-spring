import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda = {};
  item = {};

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

}
