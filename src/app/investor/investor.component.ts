import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor',
  standalone: true,
  imports: [],
  templateUrl: './investor.component.html',
  styleUrl: './investor.component.scss',
})
export class InvestorComponent implements OnInit, OnDestroy {
  private themeLinkId = 'theme-stylesheet';

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const theme = params.get('theme');
      if (theme) {
        this.loadThemeCss(theme);
      }
    });
  }

  loadThemeCss(theme: string): void {
    // Remove previous theme link if it exists
    const existingLink = document.getElementById(this.themeLinkId);
    if (existingLink) {
      this.renderer.removeChild(document.head, existingLink);
    }

    // Create new link element
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'id', this.themeLinkId);
    this.renderer.setAttribute(
      link,
      'href',
      `assets/themes/theme-${theme}.scss`
    ); // Assumes file in `assets/themes/

    // Append to head
    this.renderer.appendChild(document.head, link);
  }

  // concerned about the theme lingering after navigating away, implement OnDestroy
  ngOnDestroy(): void {
    const existingLink = document.getElementById(this.themeLinkId);
    if (existingLink) {
      this.renderer.removeChild(document.head, existingLink);
    }
  }
}
