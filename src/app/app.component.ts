import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Http,Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public http: Http,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public appPreferences: AppPreferences

       
       ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Sobre', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goSettings(){
    this.appPreferences.show();
  }

  goAbout(){
    this.nav.setRoot(ListPage);
  }

  goSite(){
    window.open("https://diegolopes.github.io/pme",'_system','location=yes')
  }
  

  goHome(){
    this.nav.setRoot(HomePage);
  }


  exitApp(){
    this.platform.exitApp();
 }

 editarNomePrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Editar nome',
    message: "O nome será usado no App",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
}

avaliarPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Avaliar app',
    message: "Escreva aqui suas opiniões e críticas sobre o app",
    inputs: [
      {
        name: 'nome',
        placeholder: 'Nome (opcional)'
      },

      {
        name: 'review',
        placeholder: 'Escreva sua avaliação aqui...'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.sendReview(data.nome, data.review);
          this.appPreferences.store('nome',data.nome);
        }
      }
    ]
  });
  prompt.present();
}


data:any = {};
review: string = "";
nada : string = "eae";

sendReview(nome, dados){
  var headers = new Headers();
  headers.append('Access-Control-Allow-Origin' , '*');
  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');


  let options = new RequestOptions({ headers:headers,withCredentials: true});

  var link = 'http://appweb-server.000webhostapp.com/pme/api.php';


  var myData = JSON.stringify({nome:nome, review: dados , tipo: 'review' });

  if(dados == ''){
    const alert2 = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Por favor, escreva sua avaliação.',
      buttons: ['OK']
    });
    alert2.present();
  }
  

  else{
    const loader = this.loadingCtrl.create({
      content: "Enviando...",
      duration: 30000  
    });

    loader.present()

    this.http.post(link, myData)
    .subscribe(data => {
    this.data.response = data["_body"],this.alertNetOK(),loader.dismiss();
    }, error => {
      loader.dismiss();
      this.toastNetError();
    });;

  }
}


toastNetError() {
  const toast = this.toastCtrl.create({
    message: 'Erro ao enviar avaliação. Verifique sua conexão com a rede e tente novamente.',
    duration: 10000
  });
  toast.present();
}

alertNetOK() {
  const alert = this.alertCtrl.create({
    title: 'Muito obrigado pela sua avaliação!',
    subTitle: 'Sua avaliação é importante para o desenvolvimento do app!',
    buttons: ['OK']
  });
  alert.present();
}




}
