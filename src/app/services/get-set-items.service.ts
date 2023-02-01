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
  getSetById=(id:number):Observable<SetItem>=>{
    let set=this.http.get<SetItem>(`${this.baseUrl}/exercise_sets/${id}`, httpOptions)
    return set
  }
  saveSet=(setItem:SetItem): Observable<SetItem>=>{
    let set: Observable<SetItem>
    if(setItem.id){
      const url=`${this.baseUrl}/exercise_sets/${setItem.id}`
      set=this.http.put<SetItem>(url,setItem,httpOptions)
    }else{
      set=this.http.post<SetItem>(`${this.baseUrl}/exercise_sets`,setItem,httpOptions)
    }
    return set
  }
  deleteSet=(id:number):Observable<SetItem>=>{
    let set=this.http.delete<SetItem>(`${this.baseUrl}/exercise_sets/${id}`, httpOptions)
    return set
  }
  editSet=(setItem:SetItem,id:number):Observable<SetItem>=>{
    let set=this.http.put<SetItem>(`${this.baseUrl}/exercise_sets/${id}`, httpOptions)
    return set
  }
}
