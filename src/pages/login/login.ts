import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController} from 'ionic-angular';
import { FormGroup, FormControl, Validators ,FormBuilder,AbstractControl } from "@angular/forms";
import {Home} from '../Home/Home'

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
  loginForm:FormGroup;
  email:AbortController;
  password:AbortController; 

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formbuilder : FormBuilder,
     public navParams: NavParams)
     {
      this.loginForm = new FormGroup({
        email: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.email])
        ),
        password: new FormControl("", Validators.compose([Validators.required]))
      });
      this.email=this.loginForm.get("email").value;
      this.password=this.loginForm.get("password").value;
  }

  ionViewDidLoad() {
 
  }

  sign_in() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.navCtrl.setRoot(Home);
  }
  
}

