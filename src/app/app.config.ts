import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'sellmyride-408da',
          appId: '1:43788889093:web:9e8009a242d34fc179006c',
          storageBucket: 'sellmyride-408da.appspot.com',
          apiKey: 'AIzaSyDNUjtF6I5eHpG_6gu_5jzzEaEbFBJhwzw',
          authDomain: 'sellmyride-408da.firebaseapp.com',
          messagingSenderId: '43788889093',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
