import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../store/models/character';



@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url: string = 'https://www.breakingbadapi.com/api/characters'
  public searchRes: string = '';

  constructor(private http: HttpClient) { }
  getCharacters(){
    return this.http.get<Character>(
      this.url
    )
  }
}
