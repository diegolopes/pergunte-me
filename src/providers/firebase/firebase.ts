import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  perguntas : Observable<any>;

  constructor(public db: AngularFireDatabase, public fireStore : AngularFirestore) {

  }

  // Salvar a pergunta do usuário
  save(pergunta: any) {
    this.db.list('/perguntas')
    .push(pergunta)
    .then(r => console.log(r));
  }

  //Salvar avaliacao
  saveAvaliacao(dados:any) {
    this.db.list('/avaliacoes')
    .push(dados)
    .then(r => console.log(r))
  }

  // Retornar todas as perguntas

  getAll() {
    return this.db.list('/perguntas', ref => ref.orderByChild('pergunta')).valueChanges()

  }

}
