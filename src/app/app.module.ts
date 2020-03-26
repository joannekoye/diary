import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { HighlightDirective } from './highlight.directive';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryDetailComponent,
    HighlightDirective,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
