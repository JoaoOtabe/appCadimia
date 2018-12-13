import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import  { CreateAccontPage } from '../create-accont/create-accont';
import  { LoginPage } from '../login/login';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {


  }


  pageLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  pagecadastro(){
    this.navCtrl.setRoot(CreateAccontPage);
  }
}

