import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightQuoteDirective,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HighlightQuoteDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
