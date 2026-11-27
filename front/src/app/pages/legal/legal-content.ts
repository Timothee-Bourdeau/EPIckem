export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalContent {
  path: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

const CONTACT_EMAIL = 'timothee.bourdeau@epitech.eu marc.ye@epitech.eu';

export const LEGAL_PAGES: LegalContent[] = [
  {
    path: 'mentions-legales',
    title: 'Mentions légales',
    intro: 'Informations légales relatives au site Epickem.',
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          'Epickem est un projet étudiant réalisé dans le cadre de la formation Tek3 par Timothée Bourdeau et Marc Ye.',
          `Responsables de la publication : Timothée Bourdeau et Marc Ye. Contact : ${CONTACT_EMAIL}.`,
        ],
      },
      {
        heading: 'Hébergement',
        paragraphs: [`Le site est hébergé par Timothée Bourdeau et Marc Ye. Contact : ${CONTACT_EMAIL}.`],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          'Le code et les contenus du site sont la propriété de leurs auteurs. Les noms de jeux, de tournois et de joueurs appartiennent à leurs ayants droit respectifs.',
        ],
      },
      {
        heading: 'Données issues de tiers',
        paragraphs: [
          'Certains tournois sont importés depuis start.gg. Ces données sont affichées en lecture seule et restent la propriété de leur source.',
        ],
      },
    ],
  },
  {
    path: 'confidentialite',
    title: 'Politique de confidentialité',
    intro: 'Cette page explique quelles données Epickem collecte, pourquoi, et combien de temps elles sont conservées.',
    sections: [
      {
        heading: 'Responsable du traitement',
        paragraphs: [`Timothée Bourdeau et Marc Ye, joignables à ${CONTACT_EMAIL}.`],
      },
      {
        heading: 'Données collectées',
        items: [
          'Données de compte : adresse e-mail, pseudo, mot de passe (stocké sous forme hachée) et rôle.',
          'Données d’activité : pronostics, réponses aux questions, inscriptions à des tournois et points obtenus.',
          'Journal d’audit : actions sensibles réalisées sur la plateforme, horodatées et rattachées à un compte.',
        ],
      },
      {
        heading: 'Finalités et bases légales',
        items: [
          'Fournir le service (compte, pronostics, classements) : exécution du contrat.',
          'Sécuriser la plateforme et tracer les actions sensibles : intérêt légitime.',
          'Répondre à vos demandes de contact : intérêt légitime.',
        ],
      },
      {
        heading: 'Durée de conservation',
        paragraphs: [
          'Les données de compte sont conservées tant que le compte existe, puis supprimées ou anonymisées. 6 mois',
        ],
      },
      {
        heading: 'Destinataires',
        paragraphs: [
          'Les données ne sont ni vendues ni cédées. Elles sont accessibles aux administrateurs de la plateforme et à l’hébergeur, en tant que sous-traitant.',
        ],
      },
      {
        heading: 'Vos droits',
        paragraphs: ['Vous disposez de droits sur vos données. Ils sont détaillés sur la page « Vos droits sur vos données (RGPD) ».'],
      },
    ],
  },
  {
    path: 'cookies',
    title: 'Gestion des cookies',
    intro: 'Cette page décrit l’utilisation des cookies et du stockage local par Epickem.',
    sections: [
      {
        heading: 'Ce que nous utilisons',
        paragraphs: [
          'Epickem utilise uniquement des cookies ou un stockage local strictement nécessaires au fonctionnement du service, par exemple pour maintenir votre session une fois connecté.',
          'Ces traceurs ne nécessitent pas de consentement préalable.',
        ],
      },
      {
        heading: 'Ce que nous n’utilisons pas',
        paragraphs: ['Aucun cookie publicitaire ni outil de mesure d’audience tiers n’est utilisé à ce jour.'],
      },
      {
        heading: 'Les contrôler',
        paragraphs: [
          'Vous pouvez supprimer ou bloquer les cookies depuis les réglages de votre navigateur. Bloquer les cookies nécessaires peut vous empêcher de rester connecté.',
        ],
      },
    ],
  },
  {
    path: 'droits-donnees',
    title: 'Vos droits sur vos données (RGPD)',
    intro: 'Conformément au RGPD, vous gardez la maîtrise des données personnelles que vous nous confiez.',
    sections: [
      {
        heading: 'Vos droits',
        items: [
          'Accès : obtenir une copie des données vous concernant.',
          'Rectification : corriger des données inexactes.',
          'Effacement : demander la suppression de votre compte et de vos données.',
          'Limitation et opposition : restreindre ou refuser certains traitements.',
          'Portabilité : récupérer vos données dans un format structuré.',
        ],
      },
      {
        heading: 'Exercer vos droits',
        paragraphs: [
          `Écrivez-nous à ${CONTACT_EMAIL} en précisant votre demande et le compte concerné. Nous répondons dans un délai d’un mois.`,
        ],
      },
      {
        heading: 'Réclamation',
        paragraphs: [
          'Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (www.cnil.fr).',
        ],
      },
    ],
  },
  {
    path: 'cgu',
    title: 'Conditions d’utilisation',
    intro: 'En créant un compte ou en utilisant Epickem, vous acceptez les conditions ci-dessous.',
    sections: [
      {
        heading: 'Objet',
        paragraphs: [
          'Epickem permet de pronostiquer les résultats de tournois e-sport, de suivre les matchs et de se comparer aux autres joueurs. Le service est gratuit et ne comporte aucun jeu d’argent.',
        ],
      },
      {
        heading: 'Compte',
        paragraphs: [
          'Vous êtes responsable de la confidentialité de votre mot de passe et des actions faites depuis votre compte. Les informations fournies doivent être exactes.',
        ],
      },
      {
        heading: 'Comportements interdits',
        items: [
          'Utiliser un pseudo trompeur ou injurieux.',
          'Tenter de contourner la sécurité ou de fausser les classements.',
          'Utiliser des moyens automatisés pour pronostiquer à votre place.',
        ],
      },
      {
        heading: 'Pronostics et points',
        paragraphs: [
          'Les pronostics sont verrouillés au début des matchs. Les points sont calculés à partir des résultats et peuvent être recalculés en cas de correction d’un résultat.',
        ],
      },
      {
        heading: 'Suspension et suppression',
        paragraphs: [
          'Un compte peut être suspendu ou supprimé en cas de non-respect de ces conditions. Vous pouvez demander la suppression de votre compte à tout moment.',
        ],
      },
    ],
  },
  {
    path: 'accessibilite',
    title: 'Accessibilité',
    intro: 'Epickem vise la conformité au référentiel WCAG 2.2 niveau AA.',
    sections: [
      {
        heading: 'État de conformité',
        paragraphs: [
          'Le site est en cours de développement. Aucun audit complet n’a encore été réalisé : la conformité est un objectif, pas encore un constat.',
        ],
      },
      {
        heading: 'Mesures mises en place',
        items: [
          'Structure HTML sémantique et titres hiérarchisés.',
          'Lien d’évitement vers le contenu principal.',
          'Navigation complète au clavier et indicateur de focus visible.',
          'Contrastes de couleurs élevés.',
        ],
      },
      {
        heading: 'Signaler un problème',
        paragraphs: [
          `Si un contenu vous est inaccessible, écrivez-nous à ${CONTACT_EMAIL} en décrivant le problème et la page concernée.`,
        ],
      },
    ],
  },
  {
    path: 'contact',
    title: 'Contact',
    intro: 'Une question, un problème ou une demande liée à vos données ?',
    sections: [
      {
        heading: 'Nous écrire',
        paragraphs: [`Par e-mail : ${CONTACT_EMAIL}.`],
      },
      {
        heading: 'Équipe',
        paragraphs: ['Epickem est développé par Timothée Bourdeau et Marc Ye.'],
      },
    ],
  },
];
