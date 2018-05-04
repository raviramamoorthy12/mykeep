import {Component, OnInit, Version, VERSION} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NotesService} from './service/notes.service';
import {Note} from './note';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle(`My Keep Version 2 ${VERSION.full}`);
  }
  ngOnInit() {

}

}
