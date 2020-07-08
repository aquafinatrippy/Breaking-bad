import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../store/models/character';
import { Episode } from '../store/models/episode';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private charUrl: string = 'https://www.breakingbadapi.com/api/characters';
  private epUrl: string = 'https://www.breakingbadapi.com/api/episodes';
  public searchRes: string = '';

  constructor(private http: HttpClient) {}
  getCharacters() {
    return this.http.get<Character>(this.charUrl);
  }
  getEpisodes() {
    return this.http.get<Episode>(this.epUrl);
  }
}
