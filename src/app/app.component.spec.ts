import { ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';


import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NotesService } from './service/notes.service';
import { AuthService } from './service/auth.service';
import { RouterService } from './service/router.service';
import {
  MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import { AuthGuardService } from './guard/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NotePanelComponent } from './note-panel/note-panel.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { NoteComponent } from './note/note.component';

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
describe('AppComponent', () => {
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
      providers: [NotesService, AuthService, RouterService,
         { provide: APP_BASE_HREF, useValue: '/'}
        ]


    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
     expect(app).toBeTruthy();
  }));

});
