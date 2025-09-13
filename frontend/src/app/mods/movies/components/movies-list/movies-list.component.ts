import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../services/imports';
import { ranking } from '../../../../utils/ranking';
import { Movie } from '../../models/movies.model';
import { ListEvent } from '../../../../utils/listEvent';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, ImportsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnChanges{

  rankedMovies: any[] = [];
  

  @Input() list: Movie[] = [];
  @Output() action = new EventEmitter<ListEvent>();

  constructor() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list'] && this.list) {
      this.loadMovies();
    }
  }

  loadMovies(){
    this.rankedMovies = ranking(this.list);
  }

  emitEvent(eventType: string, movie: any){
    this.action.emit(
        {
          type: eventType,
          value: movie
        }
      );
  }

  onRowClick(movie: any){
    this.emitEvent('selected', movie.id);
  }

  onDelete(movie: any){
    this.emitEvent('delete', movie.id);
  }


}
