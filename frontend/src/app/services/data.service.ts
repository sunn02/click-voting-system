import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../mods/movies/models/movies.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = `${environment.apiUrl}`; 

      constructor(private http: HttpClient) { }

      getData(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
      }

      searchData(query: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/search`, { params: { title: query } });
      }

      postData(newMovie: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/movie`, newMovie);
      }

      getDataFromApi(query: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/movie`, { params: { imdbID: query }});
      }

      deleteData(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/movie/${id}`);
      }

      voteData(id: number): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/vote/${id}`, {});
      }



}
