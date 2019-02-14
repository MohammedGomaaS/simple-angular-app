import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.component.html',
  styleUrls: ['./home-land.component.css']
})
export class HomeLandComponent implements OnInit {
   selectedStudentDetails:any;
   stuentControlPanelAvailable:any;
   editing:boolean;
   addEditAvailable:boolean;
  constructor() { }

  ngOnInit() {
  }
  viewStuentControlPanel(selectedStudentDetails){
    this.selectedStudentDetails=selectedStudentDetails;
    this.stuentControlPanelAvailable=true;
  }
  editStudent(student){
    this.addEditAvailable=true;
 this.editing=true;


  }
  addStudent(){
    this.addEditAvailable=true;
    this.editing=false;
  }
  hideAddEditStudent(){
    this.addEditAvailable=false;
  }

}
