import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import  { cadastro } from '../cadastro/cadastro';
import  { menuPrincipal } from '../menuPrincipal/menuPrincipal';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pagecadastro(){
    this.navCtrl.setRoot(cadastro);
  }

  pageMenuPrincipal(){
    this.navCtrl.setRoot(menuPrincipal);
  }

}
