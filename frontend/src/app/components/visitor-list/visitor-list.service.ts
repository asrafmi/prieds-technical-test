import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitorListInterface } from './visitor-list.component';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VisitorListService {
  constructor(private http: HttpClient) {}

  getVisitorList(): Observable<VisitorListInterface[]> {
    return this.http.get<VisitorListInterface[]>(
      `${environment.backend_url}/api/users`
    );
  }
}
