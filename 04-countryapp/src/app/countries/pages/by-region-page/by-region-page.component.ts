import { Component } from '@angular/core';
import { Country } from '../../interfaces/search.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {
  
  public countries: Country[] = [];

  constructor(private countriesService:CountriesService) {}

  searchByRegion(term:string):void {
    console.log('- Desde: ByRegionPage');

    this.countriesService.searchRegion(term)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
      }
    )
  }
}
