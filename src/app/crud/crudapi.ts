import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({providedIn: 'root'})

export class crudapi {
    constructor(public fs : AngularFirestore) {}

    readData() {
        return this.fs.collection('menu').snapshotChanges();
    }
    addData() {}
    delData() {}
    updateData() {}

}
