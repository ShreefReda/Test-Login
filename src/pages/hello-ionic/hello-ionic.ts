import { Component } from '@angular/core';
import {LoadingController, NavController,AlertController } from 'ionic-angular';
import {Home} from '../Home/Home'
import { FormGroup, FormControl, Validators ,FormBuilder,AbstractControl } from "@angular/forms";



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  loginForm:FormGroup;
  email:AbortController;
  password:AbortController; 

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formbuilder : FormBuilder,
  ) {
    
  }
  sign_in() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.navCtrl.setRoot(Home);
  }
  ionViewDidLoad() {
   
  }

 
}
/* email: string;
  alertEmail = false;
  alertPassword = false;
  alertEmailMessage = "Email is required";
  alertPasswordMessage = "Password is required";
  hiedPassword: Boolean = true;
*/