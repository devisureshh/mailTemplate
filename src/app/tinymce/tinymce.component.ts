import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import tinymce from 'tinymce';

import { DataServiceService } from '../data-service.service';

//javascript function

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  message!: string;
  message2!: string;
  subscription!: Subscription;
  constructor(private data: DataServiceService) { }
  init = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min',       // Suffix to use when loading resources
    height: 300,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    menubar: false,
    toolbar: 'undo redo | formatselect | fontselect | fontsizeselect |' +
      '| bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent |' +
      'removeformat | link image media |',
    font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace',

  };

  ngOnInit(): void {
    this.subscription = this.data.currentTemplate.subscribe(message2 => { this.message2 = message2; }
    );
    console.log("message 2 is", this.message2);
  }

  onChangeNote() {
    console.log("message 2 in editor is", this.message2);
    console.log(this.message);
    this.newItemEvent.emit(this.message);
  }

}
