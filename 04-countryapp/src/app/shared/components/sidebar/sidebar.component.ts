import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    .list-group-item {
      cursor: pointer;
    }
  `]
})
export class SidebarComponent { }
