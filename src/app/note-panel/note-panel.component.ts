import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.css']
})
export class NotePanelComponent implements OnInit {
 note: Note = new Note();
 error: Boolean;
 errorMsg: String = 'Title or Description can not be empty';
  @Output() addnoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  titleOnClick() {
    this.error = false;
}
  textOnClick () {
    this.error = false;
  }

  takeNotes() {
    if (this.note.title !== '' && this.note.text !== '') {
      const note1 = new Note();
      note1.title = this.note.title;
      note1.text = this.note.text;
      console.log(note1.title);
      console.log(note1.text);
      this.addnoteEvent.emit(note1);
      this.note.title = '';
      this.note.text = '';


    } else {
      this.error = true;
    }
  }

}
