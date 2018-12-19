import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAlunosPage } from './lista-alunos';

@NgModule({
  declarations: [
    ListaAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAlunosPage),
  ],
})
export class ListaAlunosPageModule {}
