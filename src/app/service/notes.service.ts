import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Note} from '../note';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class NotesService {
  URL = 'http://localhost:3000/api/v1/notes';
  constructor(private http: HttpClient) {
}
getNotes(): Observable<Array<Note>> {
 return this.http.get<Array<Note>>( this.URL);


}


  upDateNote(note: Note): Observable<Note> {
    return this.http.put<Note>( this.URL + '/' + note.id, note);


  }


addNote(note) {
  return this.http.post(this.URL, note ) ;
}


}
