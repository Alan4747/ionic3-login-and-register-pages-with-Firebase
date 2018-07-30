import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; 


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string='';
  password:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // login 
  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user =>{
      console.log(this.email,this.password);
    }).catch(error =>{
      console.error(error);
    });
    this.navCtrl.setRoot('WelcomePage');

  }

}
