import { Component } from '@angular/core';
import { NavController, Button } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';




@Component({
  selector: 'page-menuPrincipal',
  templateUrl: 'menuPrincipal.html'
})



export class menuPrincipal {

  
  constructor(public navCtrl: NavController, public alert:AlertController) {

  }
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  voltarHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  

}
