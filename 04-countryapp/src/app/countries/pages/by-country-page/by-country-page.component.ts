import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/search.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit{
  public isLoading: boolean = false;
  public placeholder: string = 'Search by Capital';
  public initValue: string = '';
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initValue = this.countriesService.cacheStore.byCountry.term;
    this.countries = this.countriesService.cacheStore.byCountry.countries;
  }

  searchByCountry(term:string):void {
    console.log('- Desde: ByCountryPage');
    this.isLoading = true;

    this.countriesService.searchCountry(term)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
        this.initValue = this.countriesService.cacheStore.byCountry.term;
        this.isLoading = false;
      }
    )
  }
}
