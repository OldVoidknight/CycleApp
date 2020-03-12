import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  toMap(){
    this.router.navigate(['map'])
  }

  toActivity(){
    this.router.navigate(['activity'])
  }

  toRecords(){
    this.router.navigate(['records'])
  }

  toSettings(){
    this.router.navigate(['settings'])
  }
}
