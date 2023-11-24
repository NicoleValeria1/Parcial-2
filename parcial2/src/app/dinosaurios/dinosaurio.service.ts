import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Dinosaurio } from './dinosaurio';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {

  private apiUrl: string = environment.baseUrl + 'dinosaurios';

  constructor(private http: HttpClient) { }

  getDinosaurios(): Observable<Dinosaurio[]>{
    return this.http.get<Dinosaurio[]>(this.apiUrl)
  }

}
