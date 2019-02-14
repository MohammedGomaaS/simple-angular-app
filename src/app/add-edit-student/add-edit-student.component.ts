import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  @Input() student = { name: "", age: 21, facultyName: "", phone: "", address: "",dateOfBirth:"", image: "" }
  @Input() editing: boolean;
  @Output() cancel=new EventEmitter<any>();
  myform: FormGroup;
  name: FormControl;
  phone:FormControl;
  facultyName: FormControl;
  dateOfBirth: FormControl;
  address:FormControl;
  image:FormControl;

  constructor() { }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.name = new FormControl(this.student.name, [Validators.required, Validators.maxLength(50)]);
    this.phone = new FormControl(this.student.phone, [Validators.required,Validators.pattern("^01[0-2]{1}[0-9]{8}")]);
    this.facultyName = new FormControl(this.student.facultyName, Validators.required);
    this.dateOfBirth = new FormControl(this.student.dateOfBirth, Validators.required);
    this.address = new FormControl(this.student.address, Validators.required);
    this.image = new FormControl(this.student.image, Validators.required);

  }
  createForm() {
    this.myform = new FormGroup({ name: this.name, phone: this.phone, facultyName: this.facultyName,
      dateOfBirth: this.dateOfBirth,address: this.address,image:this.image});
  }

  onSubmit() {
    if (this.myform.valid) {
      if (this.editing) {
        this.edit();
      }
      else {
        this.add();
      }
    }
  }
  edit() {
    alert("sucess edit");
  }
  add() {
    alert("sucess add");
  }

closeForm(){
  this.cancel.next();

}

}
