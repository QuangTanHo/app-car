import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-create-advice-vehicles',
  templateUrl: './popup-create-advice-vehicles.component.html',
  styleUrls: ['./popup-create-advice-vehicles.component.scss']
})
export class PopupCreateAdviceVehiclesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PopupCreateAdviceVehiclesComponent>,
  ) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
