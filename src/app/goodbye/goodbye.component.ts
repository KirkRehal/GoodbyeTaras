import { Component, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {
  public images: string[] = ['lungi.jpg', 'lungi.jpg', 'lungi.jpg'];
  public quotes: string[] = ['test', 'oof', 'womp'];

  public selectedIndex = 0;
  private counter = 0;
  private refreshTimer = 4000;
  private subscription: Subscription = new Subscription();
  
  constructor() { }

  ngOnInit(): void {
    const source = interval(this.refreshTimer);

    this.subscription = source.pipe(
      tap(() => {
        this.counter++;
        this.selectedIndex = this.counter % 3;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
