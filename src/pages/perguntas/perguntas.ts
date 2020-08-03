import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


/**
 * Generated class for the PerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

}
