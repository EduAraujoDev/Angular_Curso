import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer } from 'rxjs';

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
        /*  
        this.route.params.subscribe(
            (parametro: any) => { console.log(parametro) },
            (erro: any) => console.log(erro),
            () => console.log('Deu certo!')    
        );
        */
        
        /*
        let tempo = interval(2000);

        tempo.subscribe((intervalo: number) => {
            console.log(intervalo);
        })
        */

        let meuObservableTeste = Observable.create((observer: Observer<number>) => {
            observer.next(1);
            observer.next(3);
        });

        meuObservableTeste.subscribe(
            (resultado: number) => console.log(resultado + 10)
        );
	}
}