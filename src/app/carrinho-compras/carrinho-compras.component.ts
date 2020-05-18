import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  qtd: number = 0;

  produtos: any[] = [
    {id: '01', descricao: 'TV LCD 70'},
    {id: '02', descricao: 'Vídeo-Game PS4'},
    {id: '03', descricao: 'Vídeo-Game XBOX ONE'},
    {id: '04', descricao: 'Livro Silmarilion'},
    {id: '05', descricao: 'Celular Xiaomi Mi Mix 3'}
  ]

  carrinhos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCarrinho(evento) {
    this.carrinhos.push(evento.produto);
    this.qtd = this.carrinhos.length;
  }

}
