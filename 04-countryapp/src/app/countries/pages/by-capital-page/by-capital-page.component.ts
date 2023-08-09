import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/search.interface'

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService:CountriesService) {}

  searchByCapital(term: string):void {
    console.log('- Desde: ByCapitalPage');

    this.countriesService.searchCapital(term)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
      }
    )
  }
}
