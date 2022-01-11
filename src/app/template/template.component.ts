import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { template } from '../template';
import { TemplatesService } from '../templates.service';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Data } from '@angular/router';
import tinymce from 'tinymce';

// interface Template {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  templates: template[] = [];
  message!: string;
  subscription!: Subscription;
  // templateNames!: string[];

  constructor(
    private templateService: TemplatesService,
    private data: DataServiceService
  ) { }
  ngOnInit(): void {
    this.templateService.getTemplates().
      subscribe(templates => { this.templates = templates; console.log(this.templates); })

    this.subscription = this.data.currentTemplate.subscribe(message => this.message = message)

  }
  onSelectionChange(ob: any) {
    console.log('selection changed');
    let selectedTemplate = ob.value;
    this.message = selectedTemplate.tempContent;
    this.newMessage(selectedTemplate.tempContent);
    console.log("AFTER NEW MESSAGE CALLED : ", this.message);
    tinymce.activeEditor.setContent(this.message);
    console.log("on change called:", selectedTemplate.tempContent);
    //to pass

  }
  newMessage(content: string) {
    this.data.changeTemplate(content)
  }

}
