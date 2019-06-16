import { Component, OnInit } from '@angular/core'
import * as firebase from 'firebase'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app3';

    ngOnInit(): void {
        var firebaseConfig = {
            apiKey: "AIzaSyBbgrBtxFYL5mt9fVzVw9e797hE0c4Wdg4",
            authDomain: "jta-instagram-clone-78f66.firebaseapp.com",
            databaseURL: "https://jta-instagram-clone-78f66.firebaseio.com",
            projectId: "jta-instagram-clone-78f66",
            storageBucket: "jta-instagram-clone-78f66.appspot.com",
            messagingSenderId: "898277437159",
            appId: "1:898277437159:web:6b4b653787290b22"
          };

        firebase.initializeApp(firebaseConfig)
    }
}