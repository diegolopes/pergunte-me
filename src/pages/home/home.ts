import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';;
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Http,Headers, RequestOptions } from '@angular/http'; 
import { ModalPage } from '../modal/modal';
import {NavParams} from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


  constructor( 
    platform: Platform,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public params: NavParams,
    public http: Http,
    public appPreferences: AppPreferences 
    
    ){

    }

    ok (value) {
      alert('Então...'+value);
    }
    fail (error) {
      alert(error);
    }

    addNome(){
      this.appPreferences.store('nome',this.inputValue)
    }


    nomes : any

    public setNome(){
     this.appPreferences.fetch('nome').then((res) => {
      this.nomes = res
        })
    }


    public getNome(){
      this.setNome()
      
     }
 
    //Array com respostas
    respostas : any[] = [
      'Sim.'
      ,'Sim, como não?'
      ,'Sim. Você nem precisava me perguntar isso.'
      ,'Certamente que sim!'
      ,'Óbvio que sim.'
      ,'Mas é claro que sim.'

      ,'Não.'
      ,'Jamais'
      ,'Claro que não!'
      ,'Tá viajando, cara? Claro que não'
      ,'Éééééééééééééhhh.... Não!'
      ,'Já falei que não, para de me perguntar isso'
    ];

    public gerarResposta(){
      return this.respostas[Math.floor(Math.random() * this.respostas.length)];
    }


  inputValue: string = "";

  public test(item){
    if(this.inputValue == '' ){
      const alerta = this.alertCtrl.create({
        title: 'Calma ai, amigão',
        message:'Eu não leio mentes. Escreva uma pergunta.',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('Clicked');
            }
          }
  
        ]
      });
      alerta.present();
    }

    else{
        //LEMBRETE: Caso for usar o AppPreferences para pegar o nome, use aqui
        var resposta = this.gerarResposta();
        this.sendPergunta(resposta);
        let modalPage = this.modalCtrl.create('ModalPage', {item: this.inputValue, resposta:resposta} );
        modalPage.present();
        this.limpar();
        
      }
    }


  public limpar(){
    this.inputValue = "";
  }

    public goHelp(){
      this.navCtrl.push(HelpPage)
    }

    data:any = {};

    sendPergunta(resposta){
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

      let options = new RequestOptions({ headers:headers,withCredentials: true});

  

      var link = 'http://localhost/pme/api.php';
    
      var myData = JSON.stringify({pergunta: this.inputValue,resposta:resposta,nome:'Usuário', tipo: 'pergunta'}); // AppPreferences: this.nomes
      
      this.http.post(link, myData)
      .subscribe(data => {
      this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
      console.log(error);
      });
      }

    }


 


    

  

