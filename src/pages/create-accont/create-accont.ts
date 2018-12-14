import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-create-accont',
  templateUrl: 'create-accont.html',
})
export class CreateAccontPage {
  model: User;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
      
      this.model = new User();
  }

  createAcount(){
    this.userProvider.createAccount(this.model.email,this.model.login, this.model.nome, this.model.senha)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário Criado com sucesso.' ,position: 'botton', duration: 3000}).present();
      this.navCtrl.setRoot(HomePage);
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000}).present();
    })
  }

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
}

export class User{
  nome:string;
  email: string;
  senha: string;
  login: string;
}