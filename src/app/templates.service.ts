import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { template } from './template';
@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

  }
  getTemplates(): Observable<template[]> {
    return this.http.get<template[]>('https://localhost:44334/api/templates');
  }


}
