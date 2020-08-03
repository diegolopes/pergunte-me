import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntasPage } from './perguntas';

@NgModule({
  declarations: [
    PerguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntasPage),
  ],
})
export class PerguntasPageModule {}
