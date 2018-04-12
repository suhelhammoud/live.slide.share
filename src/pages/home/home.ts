import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  constructor(public navCtrl: NavController,
    private socket: Socket) {
  }

  joinPresentaion() {
    if (this.username !== '') {

      this.navCtrl.push('PresentationRoomPage',
        {
          username: this.username,
          socket: this.socket
        });
    }
  }
}
