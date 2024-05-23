import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-more-opp',
  templateUrl: './more-opp.component.html',
  styleUrls: ['./more-opp.component.css'],
})
export class MoreOppComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/more-opportunities.js';
    script.onload = () => this.initializePage();
    document.body.appendChild(script);
  }
  initializePage() {
    // Burada more-opportunities.js dosyasının yüklenmesinden sonra yapılacak işlemleri yazabilirsiniz.
  }
}
