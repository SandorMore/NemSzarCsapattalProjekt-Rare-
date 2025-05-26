import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hu' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.title': 'Cosmic Simulator',
    'hero.subtitle': 'Experience the beauty and complexity of planetary systems through an advanced Unity-powered simulation. Explore orbital mechanics, gravitational forces, and celestial dynamics in real-time.',
    'hero.install': 'Install',
    'hero.viewGithub': 'View on GitHub',

    // About
    'about.title': 'About the Project',
    'about.description1': 'This planetary system simulation is built using Unity\'s powerful physics engine and custom-written gravitational algorithms. It allows users to explore and interact with procedurally generated solar systems, offering both educational value and stunning visuals.',
    'about.description2': 'The project combines accurate physics calculations with artistic visualization to create an immersive experience that helps users understand complex astronomical concepts.',

    // Features
    'features.title': 'Key Features',

    // Gallery
    'gallery.title': 'Gallery',

    // Development
    'development.title': 'Development Process',
    'development.physics': 'Physics Implementation',
    'development.physicsDesc': 'Implemented accurate gravitational forces and orbital mechanics using Unity\'s physics engine, with custom modifications for precise celestial body interactions.',
    'development.procedural': 'Procedural Generation',
    'development.proceduralDesc': 'Developed algorithms for generating realistic planetary systems, including planet sizes, orbits, and surface features based on astronomical principles.',
    'development.visual': 'Visual Effects',
    'development.visualDesc': 'Created advanced particle systems and shader effects for atmospheric glow, star fields, and space phenomena using Unity\'s VFX Graph system.',
    'development.technical': 'Technical Challenges',
    'development.technicalDesc': 'Overcame performance optimization challenges through efficient physics calculations and LOD systems for handling multiple celestial bodies simultaneously.',

    // Footer
    'footer.about': 'About',
    'footer.aboutDesc': 'An interactive planetary system simulation built with Unity, demonstrating the beauty and complexity of celestial mechanics.',
    'footer.quickLinks': 'Quick Links',
    'footer.features': 'Features',
    'footer.gallery': 'Gallery',
    'footer.development': 'Development',
    'footer.sourceCode': 'Source Code',
    'footer.contact': 'Contact',
    'footer.contactDesc': 'Have questions or want to collaborate? Feel free to reach out!',
  },
  hu: {
    // Hero
    'hero.title': 'Kozmikus Szimulátor',
    'hero.subtitle': 'Fedezze fel a bolygórendszerek szépségét és összetettségét egy fejlett Unity-alapú szimulációval. Ismerje meg a pályamechanikát, a gravitációs erőket és az égi dinamikát valós időben.',
    'hero.install': 'Telepítés',
    'hero.viewGithub': 'GitHub Megtekintése',

    // About
    'about.title': 'A Projektről',
    'about.description1': 'Ez a bolygórendszer-szimuláció a Unity erőteljes fizikai motorját és egyedi gravitációs algoritmusokat használ. A felhasználók felfedezhetik és interakcióba léphetnek procedurálisan generált naprendszerekkel, amely egyszerre nyújt oktatási értéket és lenyűgöző vizuális élményt.',
    'about.description2': 'A projekt ötvözi a pontos fizikai számításokat a művészi megjelenítéssel, hogy olyan magával ragadó élményt teremtsen, amely segít megérteni a komplex csillagászati koncepciókat.',

    // Features
    'features.title': 'Főbb Jellemzők',

    // Gallery
    'gallery.title': 'Galéria',

    // Development
    'development.title': 'Fejlesztési Folyamat',
    'development.physics': 'Fizikai Implementáció',
    'development.physicsDesc': 'Pontos gravitációs erők és pályamechanika implementálása a Unity fizikai motorjával, egyedi módosításokkal a precíz égitestek közötti kölcsönhatásokhoz.',
    'development.procedural': 'Procedurális Generálás',
    'development.proceduralDesc': 'Algoritmusok fejlesztése realisztikus bolygórendszerek generálásához, beleértve a bolygók méretét, pályáját és felszíni jellemzőit csillagászati elvek alapján.',
    'development.visual': 'Vizuális Effektek',
    'development.visualDesc': 'Fejlett részecske rendszerek és shader effektek létrehozása légköri ragyogáshoz, csillagmezőkhöz és űrjelenségekhez a Unity VFX Graph rendszerével.',
    'development.technical': 'Technikai Kihívások',
    'development.technicalDesc': 'Teljesítmény optimalizálási kihívások leküzdése hatékony fizikai számításokkal és LOD rendszerekkel több égitest egyidejű kezeléséhez.',

    // Footer
    'footer.about': 'Rólunk',
    'footer.aboutDesc': 'Egy interaktív bolygórendszer szimuláció Unity-vel építve, amely bemutatja az égi mechanika szépségét és összetettségét.',
    'footer.quickLinks': 'Gyors Linkek',
    'footer.features': 'Jellemzők',
    'footer.gallery': 'Galéria',
    'footer.development': 'Fejlesztés',
    'footer.sourceCode': 'Forráskód',
    'footer.contact': 'Kapcsolat',
    'footer.contactDesc': 'Kérdése van vagy együttműködne? Keressen minket bátran!',
  },
  fr: {
    // Hero
    'hero.title': 'Simulateur Cosmique',
    'hero.subtitle': 'Découvrez la beauté et la complexité des systèmes planétaires grâce à une simulation avancée propulsée par Unity. Explorez la mécanique orbitale, les forces gravitationnelles et la dynamique céleste en temps réel.',
    'hero.install': 'Installer',
    'hero.viewGithub': 'Voir sur GitHub',

    // About
    'about.title': 'À Propos du Projet',
    'about.description1': 'Cette simulation de système planétaire est construite avec le puissant moteur physique de Unity et des algorithmes gravitationnels personnalisés. Elle permet aux utilisateurs d\'explorer et d\'interagir avec des systèmes solaires générés procéduralement, offrant à la fois une valeur éducative et des visuels impressionnants.',
    'about.description2': 'Le projet combine des calculs physiques précis avec une visualisation artistique pour créer une expérience immersive qui aide à comprendre des concepts astronomiques complexes.',

    // Features
    'features.title': 'Caractéristiques Principales',

    // Gallery
    'gallery.title': 'Galerie',

    // Development
    'development.title': 'Processus de Développement',
    'development.physics': 'Implémentation Physique',
    'development.physicsDesc': 'Implémentation de forces gravitationnelles et de mécanique orbitale précises utilisant le moteur physique de Unity, avec des modifications personnalisées pour des interactions précises entre corps célestes.',
    'development.procedural': 'Génération Procédurale',
    'development.proceduralDesc': 'Développement d\'algorithmes pour générer des systèmes planétaires réalistes, incluant les tailles des planètes, les orbites et les caractéristiques de surface basées sur des principes astronomiques.',
    'development.visual': 'Effets Visuels',
    'development.visualDesc': 'Création de systèmes de particules avancés et d\'effets de shader pour la lueur atmosphérique, les champs d\'étoiles et les phénomènes spatiaux utilisant le système VFX Graph de Unity.',
    'development.technical': 'Défis Techniques',
    'development.technicalDesc': 'Surmonter les défis d\'optimisation des performances grâce à des calculs physiques efficaces et des systèmes LOD pour gérer simultanément plusieurs corps célestes.',

    // Footer
    'footer.about': 'À Propos',
    'footer.aboutDesc': 'Une simulation interactive de système planétaire construite avec Unity, démontrant la beauté et la complexité de la mécanique céleste.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.features': 'Caractéristiques',
    'footer.gallery': 'Galerie',
    'footer.development': 'Développement',
    'footer.sourceCode': 'Code Source',
    'footer.contact': 'Contact',
    'footer.contactDesc': 'Des questions ou envie de collaborer ? N\'hésitez pas à nous contacter !',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 