import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { Router } from '@angular/router';
import { FileUploader, FileSelectDirective, FileItem, FileDropDirective } from 'ng2-file-upload';

const _Eventurl = 'http://localhost:3000/api/addEvent';
const _SpecialEventurl = 'http://localhost:3000/api/addSpecial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events = [];
  submitted = false;
  addEventForm : FormGroup;
  addSpecialEventForm : FormGroup;
  add = {};
  spl = {ename: '', edate: '', edesc: ''};
  public ename = '';
  public edate = '';
  public edesc = '';
  public createdBy = localStorage.getItem('email');

  public uploader : FileUploader = new FileUploader({
    url : _Eventurl , itemAlias : 'imgFile'
  });

  public specialUploader : FileUploader = new FileUploader({
    url : _SpecialEventurl , itemAlias : 'specialImgFile'
  });

  constructor(private _authService:AuthService, private _eventService:EventService,
    private formBuilder:FormBuilder, private _router : Router ){ }
  
  ngOnInit(){
    this.addEventForm = this.formBuilder.group({
      ename: ['', Validators.required],
      edate: ['', Validators.required],
      edesc: ['', Validators.required]
    })

    this.addSpecialEventForm = this.formBuilder.group({
      ename: ['', Validators.required],
      edate: ['', Validators.required],
      edesc: ['', Validators.required]
    })

    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false;
      console.log("File" ,file); 
    }
    this.uploader.onCompleteItem = (item : any, response : any, status : any, headers : any) => {
      console.log("Image Uploaded succesfully: ", item, response, status);
    }

    this.specialUploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false;
      console.log("Special" ,file); 
    }
    this.specialUploader.onCompleteItem = (item : any, response : any, status : any, headers : any) => {
      console.log("Image Uploaded succesfully: ", item, response, status);
    }

  }

  onAddEvent(){
    this.submitted = true;
    if (this.addEventForm.invalid) {
      return;
  }
  this.uploader.options.additionalParameter = {
    ename: this.ename,
    edate: this.edate,
    edesc: this.edesc,
    createdBy : this.createdBy
  };
    this.uploader.uploadAll();
    this._eventService.addEvent(this.add)
    .subscribe(
      res => {
      console.log(res);
    },
      err => console.log(err)      
    )
    //location.reload();
    this._router.navigate(['/events']);
  }

  onAddSpecialEvent(){
    this.submitted = true;
    if (this.addSpecialEventForm.invalid) {
      return;
  }
  this.specialUploader.options.additionalParameter = {
    ename: this.spl.ename,
    edate: this.spl.edate,
    edesc: this.spl.edesc,
    createdBy : this.createdBy
  };
    this.specialUploader.uploadAll();
    this._eventService.addSpecialEvent(this.add)
    .subscribe(
      res => {
      console.log(res);
    },
      err => console.log(err)      
    )
    //location.reload();
    this._router.navigate(['/special']);
  }

  get f() { 
return this.addEventForm.controls; 
}

get s() {
  return this.addSpecialEventForm.controls;
}
}
