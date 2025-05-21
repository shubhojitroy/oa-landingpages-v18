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

    //Issuer array of objects
    const issuers = [
      { id: 1, name: 'regal', issuerid: 'vdno' },
      { id: 2, name: 'regal-funds-management', issuerid: 'vdno' },
      { id: 3, name: 'boardroom', issuerid: 'zzzz' },
      { id: 4, name: 'boardroomlimited', issuerid: 'zzzz' },
      { id: 5, name: 'wam', issuerid: 'zlwq' },
      { id: 6, name: 'wam-global', issuerid: 'zlwq' },
      { id: 7, name: 'realm', issuerid: 'trev' },
      { id: 8, name: 'realm-investment-house', issuerid: 'trev' },
    ];
    //define a constant id is new client and value is theme.is add client
    // Mapping names of clients to issuer id
    // Find the issuerId that matches the brand name.
    const issuerId = issuers.find(
      (i) => i.name === theme.toLocaleLowerCase()
    )?.issuerid;

    // If issuerId exists, then create the stylesheet link element
    if (issuerId) {
      // Create new link element
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'id', this.themeLinkId);
      this.renderer.setAttribute(
        link,
        'href',
        `assets/themes/theme-${issuerId}.scss`
      ); // Assumes file in `assets/themes/

      // Append to head
      this.renderer.appendChild(document.head, link);
    }
  }

  // concerned about the theme lingering after navigating away, implement OnDestroy
  ngOnDestroy(): void {
    const existingLink = document.getElementById(this.themeLinkId);
    if (existingLink) {
      this.renderer.removeChild(document.head, existingLink);
    }
  }
}
