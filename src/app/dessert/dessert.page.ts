import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {crudapi} from "../crud/crudapi";

@Component({selector: 'app-dessert', templateUrl: './dessert.page.html', styleUrls: ['./dessert.page.scss']})
export class DessertPage implements OnInit {
    a : any;


    Idata : any;
    loop : any = [];
    constructor(private activatedRoute : ActivatedRoute, public getCrud : crudapi) {}

    ngOnInit() {


        this.Idata = this.activatedRoute.snapshot.paramMap.get('items');

        this.getCrud.readData().subscribe(data => {
            this.a = data.map(e => {


                return {
                    id: e.payload.doc.id,
                    image: e.payload.doc.data()['image'.toString()],
                    name: e.payload.doc.data()['name'.toString()],
                    type: e.payload.doc.data()['type'.toString()],
                    descript: e.payload.doc.data()['descript'.toString()]

                }

            });
            for (let i = 0; i < this.a.length; i++) {
                console.log(this.a);
                if (this.Idata == this.a[i].type) {
                  this.loop.push(this.a[i]);
                }
            }
        });


    }


}
