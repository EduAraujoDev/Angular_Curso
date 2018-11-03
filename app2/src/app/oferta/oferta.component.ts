import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService ]
})

export class OfertaComponent implements OnInit {

	private oferta: Oferta;

	constructor(private route: ActivatedRoute, private ofertasServices: OfertasService) {}

	ngOnInit() {
		this.ofertasServices.getOfertaPotId(this.route.snapshot.params['id'])
			.then(( oferta: Oferta) => {
				this.oferta = oferta;
            });
            
        this.route.params.subscribe(
            (parametro: any) => { console.log(parametro) },
            (erro: any) => console.log(erro),
            () => console.log('Deu certo!')    
        );
	}
}