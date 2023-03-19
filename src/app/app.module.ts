import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdMUW-aUI_3hPBt64HTtZtkE0KfeZ_vq0',
  authDomain: 'restaurantapp-788ee.firebaseapp.com',
  projectId: 'restaurantapp-788ee',
  storageBucket: 'restaurantapp-788ee.appspot.com',
  messagingSenderId: '264063064310',
  appId: '1:264063064310:web:53de83f66e165bc539f4d7',
};

//const firebaseApp = initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
