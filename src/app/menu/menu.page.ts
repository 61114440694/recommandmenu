import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'app-menu', templateUrl: './menu.page.html', styleUrls: ['./menu.page.scss']})
export class MenuPage implements OnInit {

    data : any = [
        {
            name: "ทอด"
        },
        {
            name: "ต้ม"
        },
        {
            name: "ย่าง"
        },
        {
            name: "ผัด"
        }, {
            name: "ของหวาน"
        }
    ]


    menuRD : any = [{
            img: "https://nlovecooking.com/wp-content/uploads/2017/12/food66-300x157.jpg",
            name: "ข้าวผัด"
        }]


    constructor(public nav : NavController) {}
    ngOnInit() {}


    go(items) {
        if (items == "ทอด") {
            this.nav.navigateForward(['dessert', items]);
        }
        if (items == "ต้ม") {
            this.nav.navigateForward(['dessert', items]);

        }
        if (items == "ย่าง") {
            this.nav.navigateForward(['dessert', items]);
        }
        if (items == "ผัด") {
            this.nav.navigateForward(['dessert', items]);
        }
        if (items == "ของหวาน") {
            this.nav.navigateForward(['dessert', items]);
        }
    }


}
