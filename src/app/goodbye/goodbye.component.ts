import { Component, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {
  public images: string[] = ['taras1.png'];
  public imageCounter: number = 0;

  public quotes: string[] = [`Daddy's home.`, `Kirk and Sri have always been the best.`, `Ukraine gives me ulcers...`];
  public quoteCounter: number = 0;

  private counter = 0;
  private refreshTimer = 8000;
  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    const source = interval(this.refreshTimer);

    this.subscription = source.pipe(
      tap(() => {
        this.counter++;
        this.imageCounter = this.counter % this.images.length;
        this.quoteCounter = this.counter % this.quotes.length;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
