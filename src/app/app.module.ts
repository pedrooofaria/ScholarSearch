import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from 'src/services/search.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';



const firebaseConfig = {
    projectId: 'scholar-search-8338c',
    appId: '1:21085572953:web:9f7e91580bb72a0b6ec648',
    storageBucket: 'scholar-search-8338c.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDWv8I5cc1SnEhuxJSGHo_bbF0s8oWsEIE',
    authDomain: 'scholar-search-8338c.firebaseapp.com',
    messagingSenderId: '21085572953',
    measurementId: 'G-25WHPZ638V',
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    SearchComponent
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }