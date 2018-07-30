import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data ={
    name:'',
    email:'',
    password:'',
    phoneNumber:'',
    address:'',
  } 
  email:string='';
  password:string='';

  itemList:AngularFireList<any>;

  constructor( public db:AngularFireDatabase, public navCtrl: NavController,
               public navParams: NavParams, public angularFireAuth:AngularFireAuth ) {
                 this.itemList = this.db.list('Regsiter');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  // signup
  signup(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(user =>{
      console.log(this.email,this.password);
    }).catch(error =>{
      console.error(error);
    });

    this.itemList.push({
      name:this.data.name,
      email:this.data.email,
      password:this.data.password,
      phone:this.data.phoneNumber,
      address:this.data.address,
    });
    this.navCtrl.setRoot('WelcomePage');




 }
}