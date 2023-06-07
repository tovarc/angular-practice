import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { DarkService } from './dark.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule],
})
export class AppComponent implements OnInit {
  constructor(private readonly darkService: DarkService) {
    effect(() => (this.dark = this.darkService.dark()));
  }

  public dark!: boolean;

  public myName: string = 'Jose';

  public myLastName = signal<string>('Tovar');

  public balance = signal<number>(20);

  public quantity = signal<number>(5);

  public price = signal<number>(20);

  public total = computed(() => this.quantity() * this.price());

  ngOnInit(): void {}

  public updateBalance(): void {
    this.balance.update((currentBalance) => currentBalance + 20);
  }

  public changeMyName(): void {
    this.myName = 'Miguel';

    this.myLastName.set('Lorem');
  }

  public toggleDarkTheme(): void {
    this.darkService.toggleCurrentDarkMode();
  }
}
