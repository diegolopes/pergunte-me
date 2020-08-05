import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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
  perguntas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: FirebaseProvider) {
    this.perguntas  = this.db.getAll();
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

}
