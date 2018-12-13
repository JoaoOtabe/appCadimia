import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_URL = 'http://fichaonline.gearhostpreview.com/api/'

  constructor(public http: Http) {}
    
  createAccount(nome:string, email: string, senha: string, login: string){
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        login: login,
        senha: senha,
        email: email
      };

      this.http.post(this.API_URL + 'Cadastro/aluno', data)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  login(login: string, senha: string){
    return new Promise((resolve, reject) => {
      var data = {
      login: login,
      senha: senha
      };

    this.http.post(this.API_URL + 'Consulta/aluno_login', data)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  getAllAlunos(page: number){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users?per_page=10%page=' + page;

    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  getAluno(id: number){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/' + id;

    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  insert(user: any){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users';

    this.http.post(url, user)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  update(user: any){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

    this.http.put(url, user)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

  remove(id: number){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/' + id;

    this.http.delete(url)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json());
      })
    });
  }

}
