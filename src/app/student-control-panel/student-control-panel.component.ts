import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component'
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-student-control-panel',
  templateUrl: './student-control-panel.component.html',
  styleUrls: ['./student-control-panel.component.css']
})
export class StudentControlPanelComponent implements OnInit {
  @Input() studentDetails:any={};
  @Output() edit= new EventEmitter<any>();
    constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

ngOnInit() {
}

fireEdit(){
  this.edit.next(this.studentDetails);

}

openDeleteDialog() {
  let dialogRef = this.dialog.open(DialogComponent, {
    data: { delete: true, deleteContent: "Are you you want to delete?" }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result == true) {
      this.delete();
    }

  });
}


delete(){
  this.showToast("Sucess");
}
showToast(message) {
  this.snackBar.open(message, 'close', {
    duration: 3000
  });
}

}
