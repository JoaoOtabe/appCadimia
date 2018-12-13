import { Component } from '@angular/core';
import { NavController, Button } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {UsersProvider} from 'd:/nodeJS/appTG/src/providers/users/users';

//import  { crud } from '../cadastro/crud';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';




@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})



export class cadastro {
  model: User;
  
  constructor(public navCtrl: NavController, public alert:AlertController, 
    private toast: ToastController, private userProvider: UsersProvider) {
      this.model = new User();
      
  }

  createAcount(){
    this.userProvider.createAccount(this.model.email,this.model.login, this.model.nome, this.model.senha)
    .then((result: any) => {
      this.toast.create({ message: "Usuário Criado com sucesso."})
    })
    .catch((error: any) => {

    })
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

export class User{
  nome:string;
  email: string;
  senha: string;
  login: string;
}
