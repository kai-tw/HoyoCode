import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-disqus',
  standalone: true,
  imports: [],
  templateUrl: './disqus.component.html',
  styleUrl: './disqus.component.sass'
})
export class DisqusComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    const d = this.document, s = d.createElement('script');
    s.src = 'https://kai-wu-blog.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date().getTime().toString());
    (d.head || d.body).appendChild(s);
  }
}
