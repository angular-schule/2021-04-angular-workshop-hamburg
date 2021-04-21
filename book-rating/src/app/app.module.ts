import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './books/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // ng add @ngrx/router-store
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
