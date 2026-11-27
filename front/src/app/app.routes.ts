import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Legal } from './pages/legal/legal';
import { LEGAL_PAGES } from './pages/legal/legal-content';

export const routes: Routes = [
  { path: '', component: Home, title: 'Epickem' },
  ...LEGAL_PAGES.map((page) => ({
    path: page.path,
    component: Legal,
    title: `${page.title} | Epickem`,
    data: { content: page },
  })),
];
