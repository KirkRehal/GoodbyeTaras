import { Component, OnInit } from '@angular/core';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {
  public images: string[] = ['taras1.png', 'taras2.png', 'taras3.png', 'taras4.png', 'taras5.png', 'taras6.png', 'taras7.png', 'taras12.png', 'taras9.png', 'taras10.png', 'taras11.png', 'taras8.png', 'taras13.png', 'taras14.png', ];
  public imageCounter: number = 0;

  public quotes: string[] = [`Daddy's home.`, `Kirk and Sri have always been the best.`, `Ukraine gives me ulcers...`];
  public quoteCounter: number = 0;

  public funnyQuotes: string[] = [`Poor Anika`, `Department of 1`, `70 hour weeks`, `No vacations`, `Seriously.`];
  public funnyQuoteCounter: number = 0;

  public fin: boolean = false;

  public counter = 0;
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
        this.funnyQuoteCounter = this.counter % this.funnyQuotes.length;

        this.fin = this.counter > this.imageCounter;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
