import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas';

    constructor(private http: Http) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
	}
	
	public getOfertaPotId(id: number): Promise<Oferta> {
		return this.http.get(`${URL_API}/ofertas?id=${id}`)
			.toPromise()
			.then((resposta: any) => resposta.json()[0])
    }
    
    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json()[0].descricao;
            });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json()[0].descricao;
            });
    }

    public pesquisaOfertas(termo: String): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(retry(10))
            .pipe(map((resposta: any) => resposta.json()));
    }
}