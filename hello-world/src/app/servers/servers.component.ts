import { Component, OnInit } from '@angular/core';
import { asTextData } from '@angular/core/src/view';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatinStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver, Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreatinStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
