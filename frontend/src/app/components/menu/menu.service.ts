import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { QueueInterface } from './menu.component';

@Injectable({
  providedIn: 'root',
})
export class QueueListService {
  constructor(private http: HttpClient) {}

  getQueueList(): Observable<QueueInterface[]> {
    return this.http.get<QueueInterface[]>(
      `${environment.backend_url}/api/queue`
    );
  }
}
