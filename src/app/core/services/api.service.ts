import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiBase = 'https://6952826b3b3c518fca12e1cb.mockapi.io'

  constructor(private http: HttpClient) { }

  getPost<T>(endpoint: string): Observable<T>{
    return this.http.get<T>(`${this.apiBase}/${endpoint}`)
  }

  postPost<T>(endpoint: string, body: any):Observable<T>{
    return this.http.post<T>(`${this.apiBase}/${endpoint}`, body)
  }

  putPost<T>(endpoint: string, body: any): Observable<T>{
    return this.http.put<T>(`${this.apiBase}/${endpoint}`, body)
  }

  deletePost<T>(endpoint: string): Observable<T>{
    return this.http.delete<T>(`${this.apiBase}/${endpoint}`)
  }
}
