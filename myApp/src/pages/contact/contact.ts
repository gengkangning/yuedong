import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	
	data:any = [
        {name:'托尼·史塔克', birthYear:1970, gender:1, description:'钢铁侠'},
        {name:'史蒂夫·罗杰斯', birthYear:1920, gender:1, description:'美国队长'},
        {name:'娜塔莎罗·曼诺夫', birthYear:1928, gender:0, description:'黑寡妇'},
        {name:'索尔', birthYear:-5555,gender:1, description:'雷神'},
        {name:'克林顿·巴顿', birthYear:1974, gender:1, description:'鹰眼'},
        {name:'布鲁斯·班纳', birthYear:1975, gender:1, description:'绿巨人浩克'}
    ];


  constructor(public navCtrl: NavController) {

  }
  
//////使用钩子添加了一个间隔定时器，每半秒钟向 data 数组中添加一个元素
////ionViewDidEnter(){
////  setInterval(()=>{
////      this.data.push(this.data.length + 1);
////  },500)
//}

}
