import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ OfertasService ]
})

export class HomeComponent implements OnInit {

    public ofertas: Array<Oferta>;

    constructor(private ofertasService: OfertasService) { }

    ngOnInit() {
        //this.ofertas = this.ofertasService.getOfertas();

        this.ofertasService.getOferta2()
        .then(
            ( ofertas: Array<Oferta>) => { this.ofertas = ofertas},
            ( param: any ) => { console.log(param) }
        );
    }
}