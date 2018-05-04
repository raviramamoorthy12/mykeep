import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NotesService} from '../service/notes.service';
import {Note} from '../note';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  note: Note = new Note();
  notes: Array<Note> ;

  constructor(private noteService: NotesService, public snackBar: MatSnackBar, private routerService: RouterService) {

  }
  ngOnInit() {
    this.noteService.getNotes().subscribe(
      data => this.notes = data, // success path
      error => {
        this.openSnackBar(error.message, 'error');
        this.routerService.navigateToLogin();
      }/// error path
    );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 8000,
    });
  }

  saveNote(note) {
    this.noteService.addNote(note).subscribe(
      data =>   this.notes.push(note), // success path
      error => {
        this.openSnackBar(error.message, 'error');
      }// error path
    );
  }
  handleAddNote (note) {
    this.saveNote(note);


  }

}
