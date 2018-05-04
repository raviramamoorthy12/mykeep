import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePanelComponent } from './note-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';



import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { MatCardModule, MatExpansionModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { NotesService } from '../service/notes.service';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';


describe('NotePanelComponent', () => {
  let component: NotePanelComponent;
  let fixture: ComponentFixture<NotePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePanelComponent ],
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
        BrowserAnimationsModule,
        RouterModule
      ],
      providers: [NotesService, AuthService, RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
