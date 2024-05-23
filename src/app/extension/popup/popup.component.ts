import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'] // Fix: Provide the correct file path for the stylesheet
})
export class PopupComponent {
  currentTab: string = 'wallet';

  switchTab(tab: string) {
    this.currentTab = tab;
  }

}
