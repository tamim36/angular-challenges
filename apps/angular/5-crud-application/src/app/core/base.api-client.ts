import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiClient {
  private _rootUrl = `https://jsonplaceholder.typicode.com`;

  constructor(protected http: HttpClient) {}

  get rootUrl(): string {
    return this._rootUrl;
  }

  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }
}
