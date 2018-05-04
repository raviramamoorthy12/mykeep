import {Component, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditnoteComponent } from '../editnote/editnote.component';
import { NotesService } from '../service/notes.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input() notes: Array<Note>;



  constructor(private dial: MatDialog, private noteService: NotesService) { }

  ngOnInit() {

  }





  onNoteDblClcik(note: Note) {
    console.log('Note:' + note.title);
    const dialogRef = this.dial.open(EditnoteComponent, {
      width: '500px',
      data: { text: note.text, title: note.title, id: note.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Text --->' + result.text);
      console.log('Title --->' + result.title);
      console.log('id --->' + result.id);
      this.noteService.upDateNote(result).subscribe(
        data => {
          console.log('Text' + data.text) ;
          console.log('Title' + data.title) ;
          this.updateNotes();
        }
      );


    });
  }

  updateNotes() {
    this.noteService.getNotes().subscribe(
      data => {
        this.notes = data;
      }
    );
  }

}
