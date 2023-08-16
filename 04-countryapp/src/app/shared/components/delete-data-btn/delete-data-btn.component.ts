import { Component } from '@angular/core';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'shared-delete-data-btn',
  templateUrl: './delete-data-btn.component.html'
})
export class DeleteDataBtnComponent {
  constructor(private countriesService:CountriesService) {}

  deleteDataBtn() {
    this.countriesService.deleteData()
  }
}
