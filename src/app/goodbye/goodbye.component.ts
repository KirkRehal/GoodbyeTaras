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

  public quotes: string[] = [
    `Holy moly, I didn't know there was watermelon!`, 
    `I see your vision, mama.`, 
    `Listen Sarah, I know everyone has
    their own priorities...but yours are totally f***ed up`,
    `It's matcha powder...or as I like to call it, green cocaine`,
    `
    Person: Where's Tehreem? Didn't she say shes's coming?
    Taras: She's full of s**t!`,
    `It's okay, I'm a strong independent man`,
    `I never had imaginary friends. Now I have 6!`,
    `Daddy's home`,
    `Chama Chama Chama Chama Chama Chameeeeeeleonnnnn`,
    `I love Chicago hotdogs. 
    All the pickles n' s**t`,
    `
    Taras staring at his iPhone:
    I want to FEEL the metal 
    👁️👄👁️`,
    `Are your feet sweaty?`,
    `
    Taras: Do you prefer dashboard A or dashboard B?
    Carly: What's the difference? 
    Taras: Are you legally blind??`,
    `
    Sarah: How was the bathroom?
    Taras: Delicious`
  ];
  public quoteCounter: number = 0;

  public funnyQuotes: string[] = [`Poor Anika`, `Department of 1`, `70 hour weeks`, `No vacations`, `Seriously. No vacations.`];
  public funnyQuoteCounter: number = 0;

  public fin: boolean = false;

  public counter = 0;
  private refreshTimer = 10000;
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

        this.fin = this.counter > this.quoteCounter;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
