import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   		from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { TmsgComponent }    from './tmsg.component';
import { MainComponent }    from './components/main/main.component';
import { LoginComponent }   from './components/login/login.component';
import { CounselorService } from './services/counselor.service';

import { TmsgRoutingModule }     from './tmsg-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryDataTmsgService }  from './services/in-memory-data-tmsg.service';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    TmsgRoutingModule
  ],
  declarations: [
    TmsgComponent,
    MainComponent,
    LoginComponent
  ],
  providers: [ CounselorService ],
  bootstrap: [ TmsgComponent ]
})

export class TmsgModule { }
