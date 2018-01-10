import { Component } from '@angular/core'
//注意这里
import {  NavController,NavParams } from 'ionic-angular' //step1

@Component({
    selector: 'page-test',
    templateUrl:'./test.html'
})
export class TestPage {
	title:string; //step2
	
	//利用NavParams的get方法，可以将home页传进来的页面参数读取出来。
	 //注意这里
    constructor(public navCtrl:NavController,public params:NavParams){
        this.title=this.params.get('title');
		console.log('构造函数触发');
    }
    
     //新方法
    popPage(){
        this.navCtrl.pop();
    }
    
    //钩子
    ionViewDidLoad(){
        console.log('触发ionViewDidLoad');
    }

    ionViewWillEnter(){
        console.log('触发ionViewWillEnter');
    }

    ionViewDidEnter(){
        console.log('触发ionViewDidEnter');
    }

    ionViewWillLeave(){
        console.log('触发ionViewWillLeave');
    }

    ionViewDidLeave(){
        console.log('触发ionViewDidLeave');
    }

    ionViewWillUnload(){
        console.log('触发ionViewWillUnload');
    }

//  ionViewCanEnter() :boolean {
//      if(new Date().getHours()>=8){
//          console.log('触发ionViewCanEnter');
//          return false;
//      }
//      return true;
//  }
//
//  ionViewCanLeave() :boolean {
//      if(new Date().getHours()>=22){
//          console.log('触发ionViewCanLeave');
//          return false;
//      }
//      return true;
//  }


}

