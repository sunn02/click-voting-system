import { Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ListEvent } from '../../utils/listEvent';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Movie } from './models/movies.model';
import { movieExists } from '../../utils/duplicated';

@Component({
  selector: 'app-movies',
  imports: [MoviesListComponent, SearchBarComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movies: Movie[] = [];
  results: any[] = [];
  newMovie: any;


  constructor(private dataService: DataService) {
  }

  @ViewChild(SearchBarComponent) searchBar!: SearchBarComponent
  
  ngOnInit(){
    this.loadMovies();
  }  

  loadMovies(){
    this.dataService.getData().subscribe({
      next: (response) => (this.movies = response),
      error: (err) => (console.error(err))
    })
  }

  onListAction(event: ListEvent) {
    switch (event.type) {
      case 'selected':
        this.onVote(event.value);
        break;
      case 'delete':
        this.onDelete(event.value);
        break
      default:
        break;
    }
  }

  onDelete(id: number){
    this.dataService.deleteData(id).subscribe({
      next: () => (this.loadMovies()),
      error: (err) => (console.error(err))
    })
  }

  onVote(id: number){
    this.dataService.voteData(id).subscribe({
      next: () => (this.loadMovies()),
      error: (err) => (console.error(err))
    })
  }


  onSearchAction(event: ListEvent) {
    switch (event.type) {
      case 'search':
        this.onSearchInput(event.value);
        break;
      case 'add':
        this.onAdd(event.value);
        break
      default:
        break;
    }
  }

  
  onSearchInput(query: any){
    this.dataService.searchData(query.trim()).subscribe(
      response => {
        if (response.Response === 'True') {
        this.results = response.Search; 
        } else {
          this.results = []; 
        }
      }
    )
    }
    
  onAdd(imdbID: string) {
      this.dataService.getDataFromApi(imdbID).subscribe({
        next: (value) => {
          this.newMovie = {
            title: value.Title,
            year: parseInt(value.Year),
            poster: value.Poster,
            genre: value.Genre,
            imdbID: value.imdbID,
            vote: 0,
          };

          this.addMovie(this.newMovie);
        },
        error: (err) => console.error('Error al obtener datos:', err)
      });
    }

  addMovie(newMovie: Movie){
    if ( !movieExists(this.movies, newMovie.imdbID)){
          this.dataService.postData(newMovie).subscribe({
            next: () => {
              this.loadMovies();
              this.clear();
            },
            error: (err) => console.error('Error al guardar:', err)
        });
    } else {
        console.log('The movie already exists!. Please add another')
      }
  }

  clear() {
    this.searchBar.clearInput();
    this.results = [];
  }


  }







