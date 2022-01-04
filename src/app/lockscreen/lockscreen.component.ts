import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
import { TARAS_SECRET_PASSWORD } from 'src/secrets/taras-secret.password';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {
  @Output() public passwordEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  public password: string = "";
  public incorrectPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if (!(this.password === TARAS_SECRET_PASSWORD)) {
      this.incorrectPassword = true;
      setTimeout(() => {
        this.incorrectPassword = false;
      }, 500);
    }

    this.passwordEmitter.emit(this.password === TARAS_SECRET_PASSWORD);
  }
}
