import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
'username': new FormControl(null,Validators.required),
'email': new FormControl(null, Validators.required),
'course': new FormControl('1')
    });
  }

  onSubmit(){
    console.log(this.myReactiveForm);
  }

}
