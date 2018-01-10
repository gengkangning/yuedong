import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { TestPage} from '../test/test';
import { LoginPage} from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	//在 HomePage 类中定义 testPage 属性;
	testPage;
	//双向绑定
	name:string="Tony Stark";
	username:string="";
	
  constructor(public navCtrl: NavController,public appCtrl:App) {
  	
  	//在构造函数中将 testPage 指向 TestPage，以便模板可以使用。
		this.testPage=TestPage;
  }
  
  //使用push方法进行跳转,第二个参数用于将参数传递给下一个页面
  pushTestPage(){
    this.appCtrl.getRootNav().push(TestPage,{
        title:'没有人可以比我帅'
    });
  }
  
  ionViewWillEnter(){
  	this.username=window.localStorage.getItem('username');
  }
  
  //注销登录
  logout(){
  	window.localStorage.removeItem('username');
  	this.appCtrl.getRootNav().setRoot(LoginPage);
  }

}
