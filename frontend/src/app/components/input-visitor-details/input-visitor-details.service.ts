import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { InputVisitorDetailsInterface } from './input-visitor-details.component';

@Injectable({
  providedIn: 'root',
})
export class InputVisitorDetailsService {
  constructor(private http: HttpClient) {}

  addVisitor(body: InputVisitorDetailsInterface) {
    console.log(body);
    return this.http.post(`${environment.backend_url}/api/users`, body);
  }
}
