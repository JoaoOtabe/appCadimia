import { UsersProvider } from './../../providers/users/users';
import { HomePage } from '../home/home';
import {ExercicioPage} from '../exercicio/exercicio';
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

  login() {
    this.userProvider.login(this.model.login, this.model.senha)
      .then((result: any) => {
        this.userProvider.getAluno(this.model.login)
          .then((resulta: any) => {
            this.toast.create({ message: 'Usuário logado com sucesso. Olá: ' + this.model.login, position: 'botton', duration: 6000 }).present();
          })
          .catch((error: any) => {
            this.toast.create({ message: "Erro Na consulta do nome", position: 'botton', duration: 6000 }).present();
          });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. ' + "Login ou Senha, Estão errados", position: 'botton', duration: 6000 }).present();
      });
    this.navCtrl.setRoot(ExercicioPage);
  }

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
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
