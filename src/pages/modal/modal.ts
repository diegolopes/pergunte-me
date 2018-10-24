import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public modalCtrl:ModalController, public params: NavParams, public navCtrl: NavController, public viewCtrl : ViewController) {

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  public fecharModal(){
    this.viewCtrl.dismiss();
    
  }

  valor : string = this.params.get('item');
  resposta : string = this.params.get('resposta');
  

}
