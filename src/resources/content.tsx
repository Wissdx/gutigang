import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Julien",
  lastName: "Gutierrez",
  name: `Julien Gutierrez`,
  role: "Athlète, Coach & Arbitre en Force Athlétique",
  avatar: "/images/avatar-01.jpg",
  email: "juliengutierrez96@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>S'abonner à la newsletter de {person.firstName}</>,
  description: <>Une newsletter hebdomadaire sur l'entraînement, la performance et le coaching</>,
};

const social: Social = [
  // Les liens sont affichés automatiquement.
  // Importez de nouvelles icônes dans /resources/icons.ts
  {
    name: "ESN (Code: GUTI)",
    icon: "esn",
    link: "https://www.esn.com/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/julienguti",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@juliengutierrez57",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `GutiGang – Coaching Force Athlétique`,
  description: `Site officiel du GutiGang. Coaching en Force Athlétique, programmation et suivi par Julien Gutierrez.`,
  headline: <>GutiGang : Performance & Passion</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Nouveau</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Rejoindre l'équipe
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Coaching en Force Athlétique par {person.firstName} {person.lastName}.<br />
      Athlète de haut niveau, arbitre national et coach, je vous accompagne vers vos sommets.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Rencontrez ${person.name}, ${person.role} (${person.location})`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    // rediriger vers la page /work
    link: "/work",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Julien est un passionné de force athlétique. Athlète, coach et arbitre, il partage un
        parcours dédié à la performance, à la pédagogie et à la communauté.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "GUTIGANG",
        timeframe: "2020 - Aujourd'hui",
        role: "Coach en powerlifting",
        achievements: [
          <>
            Accompagnement d'athlètes vers leurs objectifs avec des programmations personnalisées.
          </>,
          <>
            Organisation de sessions techniques et préparation / accompagnement aux compétitions officielles.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/rejoins_gutigang.jpg",
            alt: "Once UI Project",
            width: 4,
            height: 5,
          },
        ],
      },
      {
        company: "SWGYM",
        timeframe: "2024 - 2025",
        role: "Coach & Gérant de salle de sport",
        achievements: [
          <>
            Suivi de groupes et ateliers d'initiation à la force.
          </>,
          <>
            Mise en place de plans d'entraînement progressifs et individualisés.
          </>,
        ],
        images: [],
      },
      {
        company: "Équipe de France",
        timeframe: "2019 - 2025",
        role: "Athlète de Haut Niveau (-59kg)",
        achievements: [
          <>
            Vice-champion d'Europe Open (2024) et double champion d'Europe de l'Ouest (2021, 2022).
          </>,
          <>
            Meilleures performances : Squat 195kg, Bench 122,5kg, Deadlift 242,5kg (Total 570kg).
          </>,
        ],
        images: [],
      },
      {
        company: "FFForce",
        timeframe: "2023 - Aujourd'hui",
        role: "Arbitre National",
        achievements: [
          <>
            Arbitrage officiel sur les compétitions nationales de Force Athlétique.
          </>,
          <>
            Garant du respect des règles techniques et de l'équité sportive.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "BTS Diététique",
        description: <>Nutrition, biochimie, physiopathologie et techniques culinaires.</>,
        icon: "apple",
      },
      {
        name: "CQP IF",
        description: <>Titre de Coach, Formation en préparation physique, suivi technique, programmation ...</>,
        icon: "dumbbell",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Programmation d'entraînement",
        description: (
          <>Planification, suivi et ajustements de programmes orientés force.</>
        ),
        tags: [
          {
            name: "Coaching",
            icon: "person",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Préparation à la compétition",
        description: (
          <>Périodisation, affûtage et gestion de la performance le jour J.</>
        ),
        tags: [
          {
            name: "Force",
            icon: "rocket",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/surcompensation.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "404",
  description: `Page non trouvée.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Coaching",
  title: `Coaching – ${person.name}`,
  description: `Contactez ${person.name} pour discuter d'un accompagnement personnalisé en Force Athlétique. Envoyez un email pour planifier un appel de découverte.`,
  // This route is focused on coaching/contact rather than project listings
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photo – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/gutigang_swgym_contest.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gutigang_limoges.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // {
    //   src: "/images/gallery/horizontal-3.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/gutigang_france_jr.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gutigang_girl_power.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gutigang_swgym_contest_2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/gutigang_swmeet.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
