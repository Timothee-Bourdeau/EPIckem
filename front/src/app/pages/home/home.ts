import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly features: Feature[] = [
    {
      title: 'Pronostics',
      description:
        'Devinez le vainqueur de chaque match et répondez aux questions bonus du tournoi.',
    },
    {
      title: 'Tournois en direct',
      description:
        'Suivez les arbres et les résultats mis à jour en temps réel, depuis votre téléphone.',
    },
    {
      title: 'Classements',
      description:
        'Comparez-vous aux autres joueurs : les points sont recalculés à chaque résultat.',
    },
    {
      title: 'Tournois importés',
      description:
        'Retrouvez aussi les tournois Start.gg, en lecture seule, à côté des tournois créés ici.',
    },
  ];

  protected readonly steps: Step[] = [
    { title: 'Créez votre compte', description: 'Un compte suffit pour pronostiquer.' },
    { title: 'Choisissez un tournoi', description: 'Parcourez les tournois ouverts aux pronostics.' },
    { title: 'Pronostiquez', description: 'Validez vos choix avant le début des matchs.' },
    { title: 'Grimpez au classement', description: 'Gagnez des points à chaque bon pronostic.' },
  ];
}
