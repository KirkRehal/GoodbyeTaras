import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Goodbye, Taras';
  public showLockscreen: boolean = false;
  
  ngOnInit() { 

  }

  checkPassword(isPasswordCorrect: boolean) {
    if (isPasswordCorrect) {
      this.showLockscreen = false;
    }
  }
}
