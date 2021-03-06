import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

    public ofertas: Observable<Oferta[]>;
    // public ofertas2: Oferta[];

    private subjectPesquisa: Subject<String> = new Subject<string>();

    constructor(private ofertasService: OfertasService) { }

    ngOnInit() {
        this.ofertas = this.subjectPesquisa
            .pipe(debounceTime(1000))
            .pipe(distinctUntilChanged())
            .pipe(switchMap((termoDaBusca: string) => {
                if (termoDaBusca.trim() === '') {
                    return of<Oferta[]>([]);
                }

                return this.ofertasService.pesquisaOfertas(termoDaBusca); 
            }))
            .pipe(catchError((err: any) => {
                return of<Oferta[]>([])
            }))
        /*
        this.ofertas.subscribe((ofertas: Oferta[]) => {
            this.ofertas2 = ofertas;
            console.log(ofertas);
        });
        */
    }

    public pesquisa(termoDaBusca: string): void {
        this.subjectPesquisa.next(termoDaBusca)
    }

    public limpaPesquisa(): void {
        this.subjectPesquisa.next('');
    }
}