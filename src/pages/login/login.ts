import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: User;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {

      this.model = new User();

  }

  login(){
    this.userProvider.createAccount(this.model.email,this.model.login, this.model.nome, this.model.senha)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000}).present();
      //this.navCtrl.setRoot(menuPrincipal);
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao logar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000}).present();
    })
  }

  pageLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

export class User{
  nome:string;
  email: string;
  senha: string;
  login: string;
}
