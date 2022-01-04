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

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.passwordEmitter.emit(this.password === TARAS_SECRET_PASSWORD);
  }
}
