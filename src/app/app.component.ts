import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
// import { initializeApp } from "../../node_modules/firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'scholar_search';

  ngOnInit(): void {
    
  }
}
