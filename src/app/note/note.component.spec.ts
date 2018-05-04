import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';



import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import {
  MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import { NotesService } from '../service/notes.service';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';


describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ],
      imports: [
        BrowserModule,
        MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        HttpClientModule,
        FormsModule,
        MatSnackBarModule,
        MatDialogModule,
        BrowserAnimationsModule,
        RouterModule
      ],
      providers: [NotesService, AuthService, RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
