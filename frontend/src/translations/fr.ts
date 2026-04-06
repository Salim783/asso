import { HOME_SECTION_ROUTES, ROUTES } from '@/config/routes';

const fr = {
  locale: 'fr',
  label: 'FR',
  messages: {
    common: {
      associationName: 'MIA',
      associationTagline: 'Mouvement solidaire France & Maroc',
      contactEmail: 'contact@mia-asso.fr',
      learnMore: 'En savoir plus',
    },
    languageSwitcher: {
      ariaLabel: 'Changer de langue',
    },
    header: {
      menuAriaLabel: 'Ouvrir le menu',
      navigation: [
        { href: HOME_SECTION_ROUTES.whoWeAre, label: 'Notre mission' },
        { href: HOME_SECTION_ROUTES.services, label: 'Nos actions' },
        { href: ROUTES.contact, label: 'Nous joindre' },
      ],
      associations: [
        { href: ROUTES.franceBranch, label: 'Antenne France' },
        { href: ROUTES.moroccoBranch, label: 'Antenne Maroc' },
      ],
    },
    footer: {
      description:
        "MIA accompagne les publics fragilises avec une approche concrete: aide materielle, lien humain, education et coordination locale.",
      sections: [
        {
          title: 'Association',
          items: [
            { label: 'Notre mission', href: HOME_SECTION_ROUTES.whoWeAre },
            { label: 'Nos actions', href: HOME_SECTION_ROUTES.services },
            { label: 'Contact', href: ROUTES.contact },
          ],
        },
        {
          title: 'Antennes',
          items: [
            { label: 'France', href: ROUTES.franceBranch },
            { label: 'Maroc', href: ROUTES.moroccoBranch },
          ],
        },
        {
          title: 'Informations',
          items: [
            { label: 'Mentions legales', href: ROUTES.legalMentions },
            { label: 'CGU', href: ROUTES.terms },
          ],
        },
      ],
      copyright: '(c) 2026 MIA. Tous droits reserves.',
      contact: 'Contact: contact@mia-asso.fr',
      socials: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
      ],
    },
    home: {
      hero: {
        eyebrow: 'Association de terrain',
        title: 'Une solidarite organisee, visible et digne.',
        description:
          "MIA construit des actions utiles entre la France et le Maroc, avec une exigence simple: rendre l'aide lisible, humaine et vraiment applicable sur le terrain.",
        primaryAction: { href: ROUTES.contact, label: 'Nous contacter' },
        secondaryAction: { href: ROUTES.moroccoBranch, label: 'Voir nos antennes' },
        highlights: ['Aide alimentaire', 'Soutien scolaire', 'Collectes solidaires', 'Partenariats locaux'],
        asideTitle: 'Une association qui agit sans bruit, mais avec methode.',
        asideDescription:
          "Nous organisons les ressources, les benevoles et les actions autour d'un objectif clair: aider mieux, pas seulement faire plus.",
        stats: [
          { value: '2', label: 'territoires d action' },
          { value: '3', label: 'grands axes solidaires' },
          { value: '1', label: 'ligne directrice claire' },
        ],
      },
      intro: {
        eyebrow: 'Qui sommes-nous',
        title: 'Une structure associative pensee pour durer.',
        description:
          "MIA relie le terrain, les besoins urgents et les reseaux locaux dans une meme dynamique. L'association s appuie sur une organisation claire pour agir plus juste.",
        cardTitle: 'Notre histoire',
        cardBody:
          "L'association a ete creee pour repondre a deux urgences complementaires: la precarite sociale et la fragilite educative. Notre travail ne cherche pas l'effet d annonce; il cherche la continuite, la confiance et l utilite concrete.",
        quote: 'Chaque action doit laisser une trace utile dans la vie de quelqu un.',
        points: [
          'Une vision simple a expliquer aux partenaires et aux benevoles.',
          'Des actions pensees pour etre maintenues, pas seulement lancees.',
          'Une attention egale a la dignite, a l urgence et a la coordination.',
        ],
      },
      priorities: {
        eyebrow: 'Nos piliers',
        title: 'Trois engagements structurent toute l association.',
        description:
          'Ces piliers guident le fond du projet comme sa forme: aider, proteger et construire des relais durables.',
        items: [
          {
            title: 'Repondre a la precarite',
            description:
              'Collectes, soutien direct et actions de proximite pour repondre aux besoins les plus immediats.',
          },
          {
            title: 'Soutenir les parcours educatifs',
            description:
              'Aide scolaire, materiel et accompagnement pour limiter les ruptures et redonner des perspectives.',
          },
          {
            title: 'Renforcer les liens locaux',
            description:
              'Travail avec les acteurs de terrain, les familles et les relais associatifs pour agir de facon plus solide.',
          },
        ],
      },
      actions: {
        eyebrow: 'Mode d action',
        title: 'Une association qui structure ses gestes solidaires.',
        description:
          "Le site assume maintenant une composition plus editoriale: il montre le fond, la methode et le rythme des actions sans noyer l'essentiel.",
        items: [
          { title: 'Collectes solidaires', description: 'Mobiliser des dons financiers et materiels autour d objectifs clairement identifies.' },
          { title: 'Partenariats locaux', description: 'Construire des relais fiables avec les associations, les structures sociales et les acteurs de quartier.' },
          { title: 'Maraudes et presence terrain', description: 'Observer, ecouter et ajuster l action a partir de la realite concrete des personnes accompagnees.' },
          { title: 'Soutien scolaire', description: 'Fournir des ressources utiles pour l apprentissage et limiter les ruptures dans les parcours.' },
          { title: 'Accompagnement humain', description: 'Maintenir un lien respectueux qui compte autant que l aide materielle elle-meme.' },
          { title: 'Organisation lisible', description: 'Rendre chaque action plus facile a comprendre, suivre et renforcer dans la duree.' },
        ],
      },
      closing: {
        title: 'Faire peu mais le faire bien, ensemble.',
        description:
          'MIA cherche une solidarite sobre, exigeante et credible. Le nouveau site adopte cette meme logique dans sa forme.',
      },
    },
    contact: {
      section: {
        eyebrow: 'Contact',
        title: 'Un point de contact clair pour echanger, proposer ou soutenir.',
        description:
          'La page contact devient un espace plus direct: informations utiles, localisation et intentions de collaboration.',
      },
      infos: [
        { title: 'Telephone', description: '+33 6 00 00 00 00' },
        { title: 'Email', description: 'contact@mia-asso.fr' },
        { title: 'Adresse', description: 'Paris, France' },
      ],
      mapTitle: "Plan d'acces",
      supportTitle: 'Pourquoi nous ecrire',
      supportDescription:
        "Pour rejoindre l'association, proposer un partenariat, faire un don ou orienter une demande, nous privilegions des echanges simples et concrets.",
      commitments: [
        { title: 'Echange clair', description: 'Une presentation lisible de vos besoins ou de votre proposition nous permet de repondre plus utilement.' },
        { title: 'Ancrage terrain', description: 'Les prises de contact les plus pertinentes sont celles qui partent d un besoin reel et situe.' },
        { title: 'Collaboration durable', description: 'Nous privilegions les liens fiables, capables de se prolonger au-dela d une action ponctuelle.' },
      ],
    },
    france: {
      hero: {
        eyebrow: 'Antenne France',
        title: 'Une presence locale qui transforme les evenements en leviers solidaires.',
        description:
          "L'antenne France travaille le lien, la mobilisation et la capacite a reunir des personnes autour d'une solidarite concrete.",
        primaryAction: { href: ROUTES.contact, label: "Rejoindre l'equipe" },
        secondaryAction: { href: ROUTES.home, label: "Retour a l'accueil" },
        highlights: ['Evenements solidaires', 'Collectes locales', 'Mobilisation benevole'],
        asideTitle: 'La proximite comme premiere force.',
        asideDescription:
          'En France, les actions servent autant a aider qu a rassembler une communaute capable de soutenir dans la duree.',
        stats: [
          { value: '3', label: 'formats d action' },
          { value: '1', label: 'objectif: creer du lien' },
          { value: '100%', label: 'ancrage local' },
        ],
      },
      section: {
        title: 'Trois formats pour faire vivre la solidarite.',
        description:
          'L antenne France mise sur des actions visibles, federatrices et relativement simples a mettre en place.',
      },
      actions: [
        {
          title: 'Dejeuners dansants',
          description:
            'Des rendez-vous conviviaux pour reunir, sensibiliser et financer des actions utiles dans un cadre accessible.',
        },
        {
          title: 'Collectes de vetements',
          description:
            'Une mobilisation directe autour d un besoin concret, avec tri, redistribution et coordination locale.',
        },
        {
          title: 'Concerts de charite',
          description:
            'Un format culturel pour faire circuler l energie associative, les soutiens et la visibilite du projet.',
        },
      ],
      closing: {
        title: 'Faire evenement, mais sans perdre le sens.',
        description:
          'Chaque format doit rester un outil au service de la mission, jamais une mise en scene vide.',
      },
    },
    morocco: {
      hero: {
        eyebrow: 'Antenne Maroc',
        title: "Des actions tournees vers l'aide materielle, alimentaire et educative.",
        description:
          "L'antenne Maroc s'inscrit dans une logique d impact concret: fournir, distribuer, accompagner et rendre l'aide visible la ou elle manque.",
        primaryAction: { href: ROUTES.contact, label: 'Proposer un partenariat' },
        secondaryAction: { href: ROUTES.home, label: "Retour a l'accueil" },
        highlights: ['Collecte de dons', 'Vetements', 'Aide alimentaire', 'Soutien scolaire'],
        asideTitle: 'Agir sur le besoin, sans detour inutile.',
        asideDescription:
          'Le travail se concentre sur les besoins immediats et les conditions qui permettent a chacun de retrouver un peu de stabilite.',
        stats: [
          { value: '4', label: 'axes visibles' },
          { value: '1', label: 'priorite: l utilite' },
          { value: '0', label: 'place pour le superflu' },
        ],
      },
      section: {
        title: 'Des gestes concrets, relies a des besoins reels.',
        description:
          'L antenne Maroc s appuie sur des actions simples a comprendre mais fortes dans leurs effets pratiques.',
      },
      actions: [
        {
          title: 'Collecte de dons',
          description:
            'Des campagnes qui servent a financer les aides prioritaires et a renforcer les moyens d intervention locale.',
        },
        {
          title: 'Distribution de vetements',
          description:
            'Une reponse materielle directe pour les familles et les personnes dont l acces aux ressources reste limite.',
        },
        {
          title: 'Aide alimentaire',
          description:
            'Des distributions ciblees pour soutenir les foyers en difficulte et soulager les urgences du quotidien.',
        },
        {
          title: 'Dons aux ecoles',
          description:
            'Du materiel, des fournitures et un appui scolaire pour renforcer des parcours fragiles mais essentiels.',
        },
      ],
      closing: {
        title: 'Une aide sobre, visible et utile.',
        description:
          'Le site traduit cette logique par une mise en page plus claire, plus solide et plus digne du projet.',
      },
    },
    legalMentions: {
      section: {
        eyebrow: 'Informations',
        title: 'Mentions legales',
        description:
          'Cette page reste volontairement sobre, dans la meme ligne que le reste du site: claire, structuree et sans surcharge.',
      },
      cardTitle: 'Contenu en preparation',
      cardDescription:
        'Les mentions legales definitives seront integrees une fois les informations juridiques confirmees.',
    },
    terms: {
      section: {
        eyebrow: 'Informations',
        title: "Conditions generales d'utilisation",
        description:
          "Cette page sera completee une fois le cadre d'utilisation et les mentions associees stabilises.",
      },
      cardTitle: 'Cadre a finaliser',
      cardDescription:
        'Le contenu legal sera ajoute dans une version ulterieure avec la meme attention a la clarte et a la lisibilite.',
    },
  },
};

export default fr;
