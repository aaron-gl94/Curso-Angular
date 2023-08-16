import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/search.interface'

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {
  public isLoading: boolean   = false;
  public placeholder: string  = 'Search by Capital';
  public initValue: string    = '';
  public countries: Country[] = [];
  
  constructor(private countriesService:CountriesService) {}

  ngOnInit(): void {
    this.initValue = this.countriesService.cacheStore.byCapital.term;
    this.countries = this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string):void {
    console.log('- Desde: ByCapitalPage');
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
        this.isLoading = false;
      }
    )
  }
}
