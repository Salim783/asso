import { HOME_SECTION_ROUTES, ROUTES } from '@/config/routes';

const en = {
  locale: 'en',
  label: 'EN',
  messages: {
    common: {
      associationName: 'MIA',
      associationTagline: 'Solidarity movement across France & Morocco',
      contactEmail: 'contact@mia-asso.fr',
      learnMore: 'Learn more',
    },
    languageSwitcher: {
      ariaLabel: 'Change language',
    },
    header: {
      menuAriaLabel: 'Open menu',
      navigation: [
        { href: HOME_SECTION_ROUTES.whoWeAre, label: 'Our mission' },
        { href: HOME_SECTION_ROUTES.services, label: 'Our actions' },
        { href: ROUTES.contact, label: 'Contact us' },
      ],
      associations: [
        { href: ROUTES.franceBranch, label: 'France branch' },
        { href: ROUTES.moroccoBranch, label: 'Morocco branch' },
      ],
    },
    footer: {
      description:
        'MIA supports vulnerable communities through a concrete approach: material aid, human connection, education, and local coordination.',
      sections: [
        {
          title: 'Association',
          items: [
            { label: 'Our mission', href: HOME_SECTION_ROUTES.whoWeAre },
            { label: 'Our actions', href: HOME_SECTION_ROUTES.services },
            { label: 'Contact', href: ROUTES.contact },
          ],
        },
        {
          title: 'Branches',
          items: [
            { label: 'France', href: ROUTES.franceBranch },
            { label: 'Morocco', href: ROUTES.moroccoBranch },
          ],
        },
        {
          title: 'Information',
          items: [
            { label: 'Legal notice', href: ROUTES.legalMentions },
            { label: 'Terms', href: ROUTES.terms },
          ],
        },
      ],
      copyright: '(c) 2026 MIA. All rights reserved.',
      contact: 'Contact: contact@mia-asso.fr',
      socials: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
      ],
    },
    home: {
      hero: {
        eyebrow: 'Field-driven nonprofit',
        title: 'Organized solidarity, visible impact, real dignity.',
        description:
          'MIA builds useful actions across France and Morocco with one clear standard: support should be readable, human, and truly actionable on the ground.',
        primaryAction: { href: ROUTES.contact, label: 'Contact us' },
        secondaryAction: { href: ROUTES.moroccoBranch, label: 'Explore our branches' },
        highlights: ['Food aid', 'Educational support', 'Solidarity drives', 'Local partnerships'],
        asideTitle: 'An association that acts quietly, but with method.',
        asideDescription:
          'We organize resources, volunteers, and local action around a simple goal: help better, not just do more.',
        stats: [
          { value: '2', label: 'active territories' },
          { value: '3', label: 'core solidarity pillars' },
          { value: '1', label: 'clear direction' },
        ],
      },
      intro: {
        eyebrow: 'Who we are',
        title: 'A nonprofit structure designed to last.',
        description:
          'MIA connects field work, urgent needs, and local networks within one coherent dynamic. The association relies on clarity to act more fairly.',
        cardTitle: 'Our story',
        cardBody:
          'The association was created to respond to two linked urgencies: social hardship and educational fragility. Our work does not seek noise; it seeks continuity, trust, and concrete usefulness.',
        quote: 'Every action should leave a useful mark in someone’s life.',
        points: [
          'A vision that partners and volunteers can understand quickly.',
          'Actions designed to be sustained, not just launched.',
          'Equal attention to dignity, urgency, and coordination.',
        ],
      },
      priorities: {
        eyebrow: 'Our pillars',
        title: 'Three commitments shape the whole association.',
        description:
          'These pillars guide both the purpose of the project and the way it is built: help, protect, and create durable local support.',
        items: [
          {
            title: 'Respond to hardship',
            description: 'Fundraising, direct support, and local action focused on immediate needs.',
          },
          {
            title: 'Support educational pathways',
            description: 'School support, supplies, and practical help to reduce rupture and restore perspective.',
          },
          {
            title: 'Strengthen local ties',
            description: 'Work with field actors, families, and nonprofit relays to act more solidly.',
          },
        ],
      },
      actions: {
        eyebrow: 'Operating model',
        title: 'An association that structures its acts of solidarity.',
        description:
          'The site now takes a more editorial direction: it shows the mission, the method, and the rhythm of action without diluting the essentials.',
        items: [
          { title: 'Solidarity drives', description: 'Mobilize money and material donations around clearly identified goals.' },
          { title: 'Local partnerships', description: 'Build reliable relays with nonprofits, social structures, and neighborhood actors.' },
          { title: 'Field presence', description: 'Observe, listen, and adjust action from the reality of the people being supported.' },
          { title: 'Educational support', description: 'Provide useful resources for learning and reduce breaks in student pathways.' },
          { title: 'Human accompaniment', description: 'Maintain a respectful bond that matters as much as material aid.' },
          { title: 'Readable organization', description: 'Make every action easier to understand, track, and strengthen over time.' },
        ],
      },
      closing: {
        title: 'Do less, but do it well, together.',
        description:
          'MIA aims for a sober, demanding, and credible solidarity. The new site follows the same logic in its visual language.',
      },
    },
    contact: {
      section: {
        eyebrow: 'Contact',
        title: 'A clear entry point to speak, propose, or support.',
        description:
          'The contact page becomes more direct: useful information, location, and collaboration intent in one place.',
      },
      infos: [
        { title: 'Phone', description: '+33 6 00 00 00 00' },
        { title: 'Email', description: 'contact@mia-asso.fr' },
        { title: 'Address', description: 'Paris, France' },
      ],
      mapTitle: 'Access map',
      supportTitle: 'Why reach out',
      supportDescription:
        'To join the association, propose a partnership, donate, or share a request, we favor direct and concrete exchanges.',
      commitments: [
        { title: 'Clear exchange', description: 'A readable summary of your need or proposal helps us answer more effectively.' },
        { title: 'Field anchoring', description: 'The most relevant requests usually start from a real and situated need.' },
        { title: 'Long-term collaboration', description: 'We prioritize reliable relationships that can continue beyond a one-time action.' },
      ],
    },
    france: {
      hero: {
        eyebrow: 'France branch',
        title: 'A local presence that turns events into solidarity levers.',
        description:
          'The France branch works through connection, mobilization, and the ability to gather people around concrete support.',
        primaryAction: { href: ROUTES.contact, label: 'Join the team' },
        secondaryAction: { href: ROUTES.home, label: 'Back home' },
        highlights: ['Solidarity events', 'Local collections', 'Volunteer mobilization'],
        asideTitle: 'Proximity is the first strength.',
        asideDescription:
          'In France, actions are designed both to help and to gather a community capable of supporting over time.',
        stats: [
          { value: '3', label: 'action formats' },
          { value: '1', label: 'goal: create connection' },
          { value: '100%', label: 'local anchoring' },
        ],
      },
      section: {
        title: 'Three formats to keep solidarity alive.',
        description:
          'The France branch focuses on actions that are visible, engaging, and relatively simple to organize well.',
      },
      actions: [
        {
          title: 'Community lunches',
          description:
            'Friendly gatherings that bring people together, raise support, and finance useful initiatives.',
        },
        {
          title: 'Clothing collections',
          description:
            'A direct mobilization around a concrete need, with collection, sorting, and local redistribution.',
        },
        {
          title: 'Charity concerts',
          description:
            'A cultural format that helps circulate energy, support, and visibility around the association.',
        },
      ],
      closing: {
        title: 'Create an event without losing the mission.',
        description:
          'Every format must remain a tool serving the cause, never an empty performance.',
      },
    },
    morocco: {
      hero: {
        eyebrow: 'Morocco branch',
        title: 'Actions focused on material, food, and educational support.',
        description:
          'The Morocco branch follows a practical logic: provide, distribute, support, and make useful aid visible where it is needed most.',
        primaryAction: { href: ROUTES.contact, label: 'Propose a partnership' },
        secondaryAction: { href: ROUTES.home, label: 'Back home' },
        highlights: ['Fundraising', 'Clothing support', 'Food aid', 'School support'],
        asideTitle: 'Act on real need, without unnecessary detours.',
        asideDescription:
          'The work stays focused on immediate needs and on the conditions that help people recover some stability.',
        stats: [
          { value: '4', label: 'visible action axes' },
          { value: '1', label: 'priority: usefulness' },
          { value: '0', label: 'room for excess' },
        ],
      },
      section: {
        title: 'Concrete gestures linked to real needs.',
        description:
          'The Morocco branch relies on actions that are simple to understand but strong in their practical effect.',
      },
      actions: [
        {
          title: 'Fundraising',
          description:
            'Campaigns that finance priority support and strengthen local intervention capacity.',
        },
        {
          title: 'Clothing distribution',
          description:
            'A direct material response for families and people whose access to resources remains limited.',
        },
        {
          title: 'Food aid',
          description:
            'Targeted distributions designed to support households facing everyday urgency.',
        },
        {
          title: 'School donations',
          description:
            'Supplies, materials, and practical support that reinforce fragile but essential school pathways.',
        },
      ],
      closing: {
        title: 'Sober, visible, useful support.',
        description:
          'The site now reflects that same logic through a clearer and more grounded visual structure.',
      },
    },
    legalMentions: {
      section: {
        eyebrow: 'Information',
        title: 'Legal notice',
        description:
          'This page remains intentionally sober, in line with the rest of the site: clear, structured, and without noise.',
      },
      cardTitle: 'Content in progress',
      cardDescription:
        'The final legal notice will be added once the required information has been confirmed.',
    },
    terms: {
      section: {
        eyebrow: 'Information',
        title: 'Terms of use',
        description:
          'This page will be completed once the usage framework and related mentions are finalized.',
      },
      cardTitle: 'Framework to finalize',
      cardDescription:
        'The legal content will be added later with the same attention to clarity and readability.',
    },
  },
};

export default en;
