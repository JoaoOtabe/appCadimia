import { Component } from '@angular/core';
import { NavController, Button } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
//import  { crud } from '../cadastro/crud';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';




@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})



export class cadastro {

  
  constructor(public navCtrl: NavController, public alert:AlertController) {

  }



  

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  cadastrar(){

    this.showAlert();
  }

  showAlert() {
    const alert = this.alert.create({
      title: 'Cadastro!',
      subTitle: 'Msg de acordo com o cadastro',
      buttons: ['OK']
    });
    alert.present();
  }
 

  

}
