import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { Auth, EmailAuthProvider } from '@angular/fire/auth';
import firebase from 'firebase/compat';
import 'firebaseui/dist/firebaseui.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'sell-my-ride-public';

  //ui!: firebaseui.auth.AuthUI;

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    const uiConfig: firebaseui.auth.Config = {
      signInOptions: [EmailAuthProvider.PROVIDER_ID],
      signInSuccessUrl:
        'https://firebase.google.com/docs/auth/web/firebaseui?hl=fr',
    };

    const ui = new firebaseui.auth.AuthUI(this.auth);

    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
