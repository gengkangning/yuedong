import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { TabsPage} from '../tabs/tabs';
import { RegisterPage} from '../register/register';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})

export class StartPage{
	constructor(public navCtrl:NavController){
			
	}
	pushLoginPage(){
		this.navCtrl.push(LoginPage);
	}
	setRootHomePage(){
		this.navCtrl.setRoot(TabsPage);
	}
	setRootRegisterPage(){
		this.navCtrl.setRoot(RegisterPage);
	}
	ionViewDidLoad(){
        console.log('触发ionViewDidLoad');
    }
}
