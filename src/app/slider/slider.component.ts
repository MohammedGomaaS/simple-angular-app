import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  students: any = [{ name: "Mohammed", age: 21, facultyName: "Helwan", phone: "01100000000", address: "Haram",dateOfBirth:"10/2/1994", image: "assets/images/student1.png" },
  { name: "Ali", age: 25, facultyName: "Ain Shams", phone: "01110000000", address: "Dokki",dateOfBirth:"11/2/1994", image: "assets/images/student2.png" },
  { name: "Saber", age: 24, facultyName: "Cairo", phone: "01100000010", address: "Tgam3",dateOfBirth:"12/2/1994", image: "assets/images/student3.png" },
  { name: "Ahmed", age: 24, facultyName: "Ismalia", phone: "01100002200", address: "Marg",dateOfBirth:"13/2/1994", image: "assets/images/student4.png" }];
  @Output() fire = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  viewStudent(student) {
    this.fire.next(student);
  }

}
