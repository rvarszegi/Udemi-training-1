import { Component, OnInit } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStartus: string = 'offline';
  getServerStatus() {
    return this.serverStartus;
  }
  constructor() {
    this.serverStartus = Math.random() > 0.5 ? 'online' : 'offline';
   }
   getColor() {
     return this.serverStartus === 'online' ? 'green' : 'red';
   }
  ngOnInit() {
  }

}
