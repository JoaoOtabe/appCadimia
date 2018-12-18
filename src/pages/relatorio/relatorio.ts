import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html',
})
export class RelatorioPage {
  users: any[];
  page: number;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
  }

  getAllAlunos (page:number){
    this.userProvider.getAllAlunos(page)
      .then((result: any) => {
        for(var i = 0; i < result.data.lenght; i++) {
          var user = result.data[i];
          this.users.push(user);
        }
        //this.users = result.data;
      })  
      .catch((error: any) => {
        this.toast.create({ message: 'Erro a o Listar os usuários'})
      });
  }

  openAluno(id : string){
    this.userProvider.getAluno(id)
      .then((result:any) => {
        this.navCtrl.push('TelaDetalhesAluno', { user: result.data})
      })
  }

  deletarAluno(user:any){
    this.userProvider.remove(user.id)
      .then((result:any) => {
        let index = this.users.indexOf(user);
        this.users.splice(index,1);

        this.toast.create({ message: "Usuário Excluido", position: "botton", duration: 6000}).present();
      })
      .catch((error: any) => {
        this.toast.create({message: 'Erro', position: "botton", duration: 6000}).present();
      })
  }

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
