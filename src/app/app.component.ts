import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDialogOpen = false;
  currentTab: string = 'wallet';

  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
