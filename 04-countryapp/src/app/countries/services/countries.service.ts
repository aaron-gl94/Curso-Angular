import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/search.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }

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
        return this.httpClient.get<Country[]>(url)
            .pipe(
                tap(countries => console.log('- .tap() - INICIO', countries)),     // Inicia el Request y se obtiene respuesta
                // map(countries => {                                                 // Metodo para iterar la respuesta
                //     console.log(countries);
                // }),
                catchError(error => {                                              // En caso de Error retorna el arreglo Countries[] vacio
                    console.error(error);
                    return of([])
                }), 
                tap(countries => console.log('- .tap() - FIN', countries)),        // Se manda la respuesta al Suscriptor
            );
    }

    searchCountry(term:string):Observable<Country[]> {
        const url: string = `${this.apiURL}/name/${term}`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError( error => {
                    console.error(error);
                    return of([])
                })
            )
    }

    searchRegion(term: string): Observable<Country[]> {
        const url: string = `${this.apiURL}/region/${term}`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(error => {
                    console.error(error);
                    return of([])
                })
            )
    }
} 