import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
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
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuardService } from '../guard/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { NotePanelComponent } from '../note-panel/note-panel.component';
import { EditnoteComponent } from '../editnote/editnote.component';
import { HeaderComponent } from '../header/header.component';
import { NoteComponent } from '../note/note.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate : [ AuthGuardService ]
  },
  {
    path: '**', component: PagenotfoundComponent
  },
];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NoteComponent,
        NotePanelComponent,
        LoginComponent,
        DashboardComponent,
        EditnoteComponent,
        PagenotfoundComponent

      ],
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
        MatDialogModule,
        RouterModule.forRoot(appRoutes)

      ],
      providers: [NotesService, AuthService, RouterService, { provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
