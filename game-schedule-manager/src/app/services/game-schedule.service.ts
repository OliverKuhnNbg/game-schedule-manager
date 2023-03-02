import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameScheduleData } from '../models/game-schedule-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameScheduleService {

  private gamesUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.gamesUrl = 'http://localhost:8083/get-all-game-dates';
  }

  public findAll(): Observable<GameScheduleData[]> {
		return this.httpClient.get<GameScheduleData[]>(this.gamesUrl);
	}
}
