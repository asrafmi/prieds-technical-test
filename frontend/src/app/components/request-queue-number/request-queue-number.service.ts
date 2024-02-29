import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RequestQueueNumberInterface } from './request-queue-number.component';

@Injectable({
  providedIn: 'root',
})
export class RequestQueueNumberService {
  constructor(private http: HttpClient) {}

  addQueue(body: RequestQueueNumberInterface) {
    return this.http.post(`${environment.backend_url}/api/queue`, body);
  }
}
