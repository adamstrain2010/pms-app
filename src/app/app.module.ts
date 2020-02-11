import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailabilityComponent } from './views/availability/availability.component';
import { AvailabilityGridComponent } from './components/availability-grid/component/availability-grid.component';
import { AvailabilityGridReducer } from './components/availability-grid.reducer';
import { AvailabilityGridEffects } from "./components/availability-grid.effects";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { AvailabilityToolbarComponent } from './components/availability-toolbar/availability-toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    AvailabilityGridComponent,
    ToolbarComponent,
    AvailabilityToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      roomAvailability: AvailabilityGridReducer 
    }),
    EffectsModule.forRoot([AvailabilityGridEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
