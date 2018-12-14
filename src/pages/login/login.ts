import { UsersProvider } from './../../providers/users/users';
import { HomePage } from '../home/home';
import { UserListPage } from '../user-list/user-list';
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
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        this.listaDeAlunos();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  listaDeAlunos(){
    this.navCtrl.setRoot(UserListPage);
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
