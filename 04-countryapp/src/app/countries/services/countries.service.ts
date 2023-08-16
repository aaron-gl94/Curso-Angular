import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/search.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital:  { term: '', countries: [] },
        byCountry:  { term: '', countries: [] },
        byRegion:   { region: '', countries: [] },
    }

    constructor(private httpClient: HttpClient) {
        this.loadFromLocalStorage();
        console.log('- ConstriesServices init', '\n - Load data from LocalStorage');
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
        if (!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
    }

    private getCountryRequest( url:string ):Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
            .pipe(
                tap(countries => console.log('- .tap() - INICIO', countries)),     // Inicia el Request y se obtiene respuesta
                // map(countries => {                                              // Metodo para iterar la respuesta
                //     console.log(countries);
                // }),
                catchError(error => {                                              // En caso de Error retorna el arreglo Countries[] vacio
                    console.error(error);
                    return of([])
                }),
                delay(1500),                                                       // Delay propio del pipe
                tap(countries => console.log('- .tap() - FIN', countries)),        // Se manda la respuesta al Suscriptor
            );
    }

    searchCountryByAlphaCode(code:string): Observable<Country | null> {
        const url = `${this.apiURL}/alpha/${code}`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0]: null ),
                catchError( () => of(null) )
            )
    }

    searchCapital(term:string):Observable<Country[]> {
        const url:string = `${this.apiURL}/capital/${term}`;
        return this.getCountryRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byCapital = { term, countries }),
                tap( () => this.saveToLocalStorage() ),
            )
    }

    searchCountry(term:string):Observable<Country[]> {
        const url: string = `${this.apiURL}/name/${term}`;
        return this.getCountryRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byCountry = { term, countries }),
                tap( () => this.saveToLocalStorage() ),
            );
    }

    searchRegion(region: Region): Observable<Country[]> {
        const url: string = `${this.apiURL}/region/${region}`;
        return this.getCountryRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byRegion = { region, countries }),
                tap( () => this.saveToLocalStorage() ),
            )
    }

    deleteData():void {
        this.cacheStore = {
            byCapital: { term: '', countries: [] },
            byCountry: { term: '', countries: [] },
            byRegion: { region: '', countries: [] },
        }

        localStorage.clear();
    }

} 