import { Component } from '@angular/core';
import { Country } from '../../interfaces/search.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term:string):void {
    console.log('- Desde: ByCountryPage');

    this.countriesService.searchCountry(term)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
      }
    )
  }
}
