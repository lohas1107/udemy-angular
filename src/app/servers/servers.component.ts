import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  isServerCreated = false;
  serverList: string[] = ['server1', 'server2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created! The server is ' + this.serverName;
    this.serverList.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
