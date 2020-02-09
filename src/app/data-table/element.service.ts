import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Element } from './element.interface';

@Injectable()
export class ElementService {
  constructor(private http: HttpClient) {}

  getElements() {
    return this.http.get<Element[]>(`/api/elements`);
  }
}
