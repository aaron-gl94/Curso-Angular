import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/search.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnInit {
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public initValue?: Region;
  public countries: Country[] = [];

  constructor(private countriesService:CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initValue = this.countriesService.cacheStore.byRegion.region;
    console.log(this.initValue);
    
  }
  
  searchByRegion(region:Region):void {
    console.log('- Desde: ByRegionPage');
    this.isLoading = true;
    
    this.countriesService.searchRegion(region)
    .subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
        this.initValue = this.countriesService.cacheStore.byRegion.region;
        this.isLoading = false;
      }
    )
  }
}
