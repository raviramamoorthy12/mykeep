import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Note } from '../note';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {
  constructor(public editNote: MatDialogRef<EditnoteComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
