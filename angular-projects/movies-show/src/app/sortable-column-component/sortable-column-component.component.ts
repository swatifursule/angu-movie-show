import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-sortable-column-component',
  templateUrl: './sortable-column-component.component.html',
  styleUrls: ['./sortable-column-component.component.css']
})
export class SortableColumnComponentComponent implements OnInit {

  constructor() { }

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  ngOnInit() { }

}
