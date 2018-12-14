import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccontPage } from '../pages/create-accont/create-accont';
import { UserListPage } from '../pages/user-list/user-list';
import { menuPrincipal } from '../pages/menuPrincipal/menuPrincipal';
import {LoginPage} from '../pages/login/login';
import { UsersProvider } from '../providers/users/users';

import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateAccontPage,
    menuPrincipal,
    LoginPage,
    UserListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccontPage,
    menuPrincipal,
    LoginPage,
    UserListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
