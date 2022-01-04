import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TinymceComponent } from '../tinymce/tinymce.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message!:string;
  content!:string;
  subject: string ='';
  to: string ='';


  emailForm = this.fb.group({
    to: [],
    subject: [],
  })
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get emailFormControl() {
    return this.emailForm.controls;
  }
 updateContent(data:string)
 {//get content from editor, save in local storage in case user clicks submit

   console.log("in update : " ,data);
   localStorage.setItem('localContent',data);
 }
  submit(data:any){
    console.log("from local storage : ", localStorage.getItem('localContent'));    
    console.log(this.emailForm.value);    

  }


}
