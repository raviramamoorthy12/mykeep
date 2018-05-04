import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatExpansionModule, MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { NotePanelComponent } from './note-panel/note-panel.component';
import {NotesService} from './service/notes.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './service/auth.service';
import { RouterService } from './service/router.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { TokenInterceptor } from './service/token.interceptor';

import { EditnoteComponent } from './editnote/editnote.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomErrorHandlerService } from './custom-error-handler.service';




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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    NotePanelComponent,
    LoginComponent,
    DashboardComponent,
    EditnoteComponent,
    PagenotfoundComponent,

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
  entryComponents: [EditnoteComponent],
  providers: [NotesService, AuthService, RouterService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {provide: ErrorHandler, useClass: CustomErrorHandlerService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
