import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private Dtemplate = new BehaviorSubject('default');
  currentTemplate = this.Dtemplate.asObservable();

  constructor() { }
  changeTemplate(template: string)
{
  this.Dtemplate.next(template);
}
}

