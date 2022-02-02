import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TitlecasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    By,
    DebugElement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
