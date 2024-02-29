import { environment } from 'src/environments/environment.prod';
import { Request } from './request';
import { AxiosRequestConfig } from 'axios';
import { Injectable } from '@angular/core';

export class BackendRequest {
  private request: Request;

  constructor() {
    this.request = new Request({
      baseURL: environment.backend_url,
    });
  }
  backendRequest() {
    return this.request.request();
  }
}
