import { Component, ElementRef, EventEmitter, Input, Output, RESPONSE_INIT, SimpleChanges, ViewChild } from '@angular/core';
import { ImportsModule } from '../../../../services/imports';
import { CommonModule } from '@angular/common';
import { ListEvent } from '../../../../utils/listEvent';

@Component({
  selector: 'app-search-bar',
  imports: [ImportsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  
  constructor() {}

  @ViewChild('searchInputField') searchInput!: ElementRef;
  @Input() results: any[] = [];
  @Output() action = new EventEmitter<ListEvent>();

  emitEvent(eventType: string, value: any){
    this.action.emit(
        {
          type: eventType,
          value
        }
      );
  }

  onInput(event: any){
    this.emitEvent('search', event.target.value);
  }

  onAdd(imdbID: string){
    this.emitEvent('add', imdbID);
  }

  clearInput() {
    if (this.searchInput?.nativeElement) {
      this.searchInput.nativeElement.value = '';
    }
  }

}
