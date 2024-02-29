import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

export class Request {
  private axiosRequest: any;

  constructor(conf: AxiosRequestConfig = {}) {
    this.axiosRequest = axios.create({ ...conf });
  }

  request() {
    return this.axiosRequest;
  }
}
