import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) {

  }

  // Salvar a pergunta do usuário
  save(pergunta: any) {
    this.db.list('perguntas')
    .push(pergunta)
    .then(r => console.log(r));
  }


}
