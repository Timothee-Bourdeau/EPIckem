import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegalContent } from './legal-content';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  protected readonly content = inject(ActivatedRoute).snapshot.data['content'] as LegalContent;
}
