//app.component.ts 定义了整个 APP 的根页面
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage} from '../pages/login/login';
import { StartPage} from '../pages/start/start';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  	if(window.localStorage.getItem('username')){
  		this.rootPage=TabsPage;
  	}else{
  		this.rootPage=StartPage;
  	}
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  } 
}
