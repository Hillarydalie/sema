import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaComponent } from './sema/sema.component';
import { SemaFormComponent } from './sema-form/sema-form.component';
import { SemaManenoComponent } from './sema-maneno/sema-maneno.component';
import { SemaTarehePipe } from './sema-tarehe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SemaComponent,
    SemaFormComponent,
    SemaManenoComponent,
    SemaTarehePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
