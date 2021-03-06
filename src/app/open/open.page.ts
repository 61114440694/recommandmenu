import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'app-open', templateUrl: './open.page.html', styleUrls: ['./open.page.scss']})
export class OpenPage implements OnInit {
    x = 0;
    constructor(public navCtrl : NavController) {}

    ngOnInit() {
        this.Timer();
    }


    Timer() {
        setTimeout(() => {
            this.go();
        }, 2500);

    }

    go() {
        this.navCtrl.navigateForward('menu');
    }
}
