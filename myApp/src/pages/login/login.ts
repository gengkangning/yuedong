import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage{
	userData:any={
		username:'',
		password:''
	}
	//在构造函数中注入实例
	constructor(private navCtrl:NavController,private alertCtrl:AlertController){
	
	}
	presentAlert() {
  		//创建一个登录验证Alert,AlertController 的 create 方法接收一个对象参数，这个对象向 create 方法提供了创建的选项
		let alert=this.alertCtrl.create({
			title:'提示信息',
			subTitle:'用户名和密码错误',
			buttons:['确定']
		});
  		alert.present();
	}
	login(){
		if(this.userData.username==='test'&&this.userData.password==="123"){
			window.localStorage.setItem('username',this.userData.username);
			//跳转到tabs页,push是将新页面推送到页面栈中，新页面可以 pop 回旧页面；而 setRoot 是将原有的根页面替换成新页面，相当于换了一个新的页面栈，原有的页面已经被回收掉了，这时候新页面是无法 pop 回旧页面的。
			this.navCtrl.setRoot(TabsPage);
		}else{
			//触发alert
			this.presentAlert();
		}
	};
}
