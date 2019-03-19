import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service';

import { Oferta } from '../shared/oferta.model';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService ]
})

export class OfertaComponent implements OnInit, OnDestroy {

	public oferta: Oferta;

	constructor(
        private route: ActivatedRoute, 
        private ofertasServices: OfertasService,
        private carrinhoService: CarrinhoService
    ) {}

	ngOnInit() {
        console.log(this.carrinhoService.exibirItens());

        this.route.params.subscribe((parametros: Params) => {
            this.ofertasServices.getOfertaPotId(parametros.id)
                .then(( oferta: Oferta) => {
                    this.oferta = oferta;
                });
        })
    }
    
    ngOnDestroy() {
    }

    public adicionarItemCarrinho(): void {
        this.carrinhoService.incluirItem(this.oferta);
    }
}