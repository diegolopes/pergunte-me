import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelpPage } from '../pages/help/help';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';
import { AppPreferences } from '@ionic-native/app-preferences';
import { PerguntasPage } from '../pages/perguntas/perguntas';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    PerguntasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

    // Configurar os dados do SEU Firebase aqui:
    AngularFireModule.initializeApp({

    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    PerguntasPage
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppPreferences,
    FirebaseProvider,
  ]
})
export class AppModule {}


