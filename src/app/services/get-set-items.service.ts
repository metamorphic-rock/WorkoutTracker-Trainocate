import { Injectable } from '@angular/core';
import { SetItem } from '../models/set-items';
import{ HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions={
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GetSetItemsService {
  baseUrl: string='http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAllSet=(): Observable<SetItem[]> =>{
    let sets: Observable<SetItem[]>
    sets=this.http.get<SetItem[]>(`${this.baseUrl}/exercise_sets`,httpOptions)
    return sets
  }
}
