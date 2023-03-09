// import Adure from '@/assets/images/projects/adure.svg'
// import Flow from '@/assets/images/projects/flow.svg'
// import Hackathon from '@/assets/images/projects/hackathon.svg'
// import Tarbus from '@/assets/images/projects/tarbus.svg'

import type { Project } from '@types'

export const projects: Project[] = [
  {
    name: 'Flow',
    href: 'flow',
    logo: {
      name: 'flow',
    },
    accentColor: '#4F8A73',
    demo: 'https://www.youtube-nocookie.com/embed/6v-ICpb9rrc',
    link: 'https://resilient-salamander-db7dc3.netlify.app/',
    repository: 'https://github.com/jakubserwin/flow',
    details: {
      description:
        'Zarządzaj projektami zespołowymi lub stwórz osobisty system do zarządzania codziennymi zadaniami i problemami. Twórz tablice, zagnieżdżając w nich zadania i dostosuj je do swoich potrzeb, dodając opisy, etykiety lub terminy wykonania.',
      problem:
        'Zarządzanie organizacją pracy jest kluczowym elementem w różnego rodzaju przedsiębiorstwach. Polega na precyzyjnym określeniu zadań związanych z tworzeniem produktu końcowego, przydzielaniu ich odpowiednim pracownikom oraz ustalaniu terminów realizacji. Dzięki temu jakość końcowego produktu dostarczanego klientom zewnętrznym będzie na wyższym poziomie, a sam proces przebiegać będzie sprawniej i szybciej.',
      timeline: 'Oct - Dec 2022',
      industry: 'Project Management',
      goals:
        'Flow pozwala użytkownikom na realizację różnych przedsięwzięć i osiągnięcie wyznaczonych celów. System ten pomaga usystematyzować i zoptymalizować  proces zarządzania organizacją pracy. Klient ma możliwość samodzielnego konfigurowania systemu i warstw, dostosowując je do swoich wymagań.',
      role1:
        'Badanie rynku i projektowanie layoutów w programie Figma. Setup projektu od podstaw, używając najnowszych technologii i narzędzi, które pomagają zachować czystość kodu. Tworzenie architektury zarówno frontendu, jak i backendu. Testowanie oprogramowania przy użyciu testów jednostkowych i testów end-to-end.',
      role2:
        'Tworzenie REST API za pomocą Express.js i MongoDB. Zabezpieczenie zasobów serwera poprzez uwierzytelnianie użytkowników za pomocą tokena JWT. Deploy klienta i serwera na platformie Netlify za pomocą lambda functions.',
      summary:
        'Był to mój pierwszy projekt full stack. Jestem bardzo zadowolony z rezultatu i architektury, którą stworzyłem, separuje ona logikę biznesową od reszty przy użyciu Pinia. Nauczyłem się bardzo wiele: konfiguracji Vite, Cypress, TypeScript zarówno po stronie klienta jak i serwera, Husky wraz z ESLint + Stylelint, nawiązywania połączenia z MongoDB, tworzenia zapytań i wiele więcej.',
    },
  },
  {
    name: 'tarBUS Admin Panel',
    href: 'tarbus',
    logo: {
      name: 'tarbus',
    },
    accentColor: '#34C7F7',
    demo: 'https://www.youtube-nocookie.com/embed/PPqOrbufu6E',
    link: '',
    repository: '',
    details: {
      description:
        'To funkcjonalna platforma, która pozwala administratorom na zarządzanie trasami autobusowymi, odjazdami i liniami. Dostępne są również funkcje tworzenia nowych połączeń, dodawania rozkładów jazdy i wprowadzania nowych przystanków autobusowych.',
      problem:
        'Bycie na bieżąco z rozkładem jazdy autobusów stanowi wyzwanie. Wymagało to stworzenia rozwiązania, które pozwoliłoby użytkownikom na śledzenie przyjazdu kolejnych autobusów na najbliższym przystanku, aby uniknąć spóźnienia do pracy lub szkoły.',
      timeline: 'June - Aug 2021',
      industry: 'Public transport',
      goals:
        'Jesteśmy zainteresowani rozszerzeniem naszych usług na inne miasta, wraz z wprowadzeniem nowych funkcji umożliwiających administratorom autobusów zarządzanie danymi w jednym miejscu.',
      role1:
        'Podczas pracy moimi głównymi obowiązkami było tworzenie layoutów oraz dynamicznych komponentów. Ponadto, miałem do czynienia z danymi pobieranymi z bazy danych, ich wyświetlaniem oraz modyfikowaniem.',
      role2:
        'Współpracowałem z przyjacielem, aby stworzyć środowisko, które pozwoliło nam na utrzymanie spójności w projekcie i na bieżąco informowało o jego postępach. Dzięki temu mogliśmy pracować na tych samych założeniach i uniknąć nieporozumień. Nasza współpraca pozwoliła nam zrealizować projekt zgodnie z oczekiwaniami i z zadowoleniem klienta.',
      summary:
        'Minimal Viable Product (MVP) został pomyślnie wypuszczony i jesteśmy gotowi skoncentrować się na produkcie końcowym poprzez wprowadzenie nowych funkcji, które są wymagane przez klienta. Praca nad tym projektem pomogła mi w poprawie moich umiejętności w Vue oraz w projektowaniu interfejsów. Współpraca pokazała mi jak ważna jest jasna i spójna komunikacja.',
    },
  },
  {
    name: 'Adure Travel Website',
    href: 'adure',
    logo: {
      name: 'adure',
    },
    accentColor: '#1CECA7',
    demo: 'https://www.youtube-nocookie.com/embed/WW5SLnCr7ts',
    link: 'https://keen-galileo-7becfc.netlify.app/',
    repository: 'https://github.com/jakubserwin/adure',
    details: {
      description:
        'Odkryj najpiękniejsze miejsca na świecie za pomocą naszej łatwej w obsłudze aplikacji turystycznej. Poznaj zapierające dech w piersiach miejsca i łatwo zaplanuj swoje wymarzone wakacje.',
      problem: '-',
      timeline: '01-14 Aug 2021',
      industry: 'Travel',
      goals:
        'Celami projektu to praktyczne wykorzystanie moich umiejętności w zakresie Vue i projektowania interfejsu użytkownika, praca z nowymi bibliotekami oraz postawienie sobie wyzwania w zakresie zarządzania stanem aplikacji.',
      role1:
        'Planowanie i tworzenie szkiców układu strony internetowej oraz jej funkcjonalności. Projektowanie komponentów i układów. Tworzenie i testowanie.',
      role2:
        'Podczas projektowania aplikacji webowej ważnym elementem jest dobór odpowiednich bibliotek, które ułatwią tworzenie interfejsu użytkownika i zwiększą wydajność pracy. W tym konkretnym projekcie wykorzystano biblioteki `PrimeVUE` do stworzenia suwaka obrazów oraz `mdue` do dodania material icons. Dzięki temu projektowanie interfejsu użytkownika stało się prostsze, a aplikacja zyskała atrakcyjny wygląd oraz funkcjonalność, którą oferują te biblioteki.',
      summary:
        'Projekt przebiegł dość sprawnie. Komponenty są renderowane dynamicznie na podstawie danych dotyczących lokalizacji, a stan aplikacji jest zarządzany przez Vuex. W przyszłości mogę poprawić przejścia między różnymi elementami oraz przechowywać dane poza stroną klienta.',
    },
  },
  {
    name: 'Hackathon Featured Project',
    href: 'hackathon',
    logo: {
      name: 'hackathon',
    },
    accentColor: '#EE0889',
    demo: 'https://www.youtube-nocookie.com/embed/2fW17aXyzCw',
    link: 'https://devpost.com/software/sleipnjs-ankieta-wyborcza',
    repository: 'https://github.com/SleipnJs/frontend-ankieta-obywatelska',
    details: {
      description:
        'Ankieta Obywatelska ma na celu zniwelować różnicę między aktualnymi trendami, a niezależnymi opiniami użytkowników. Oferuje szeroki wybór ankiet i petycji dotyczących różnorodnych problemów społecznych, stanowiąc centrum generowania i zbierania obiektywnych opinii użytkowników.',
      problem:
        'Tematem tegorocznego Hacknaröku było "Prawdziwa rzeczywistość". Nasz zespół otrzymał zadanie wymyślenia pomysłu na projekt, który pasowałby do tego tematu.',
      timeline: '28-29 Mar 2021',
      industry: 'Public sector',
      goals:
        'Stwórz miejsce, w którym użytkownicy będą mogli wyrażać swoją opinię i porównywać ją z odpowiedziami innych.',
      role1:
        'Byłem odpowiedzialny za projektowanie i rozwijanie frontendu projektu. Z krótkim terminem wykonania wynoszącym zaledwie 24 godziny, musiałem szybko przekształcić szablony i rozwiązania, które stworzyłem, w działający kod.',
      role2:
        'W ramach moich obowiązków, otrzymałem zadanie stworzenia dynamicznych komponentów, które wyświetlały dane pobrane z serwera. Generowanie, modyfikowanie obiektów JSON i przesyłanie ich do serwera.',
      summary:
        'Udział w hackathonie był dla mnie naprawdę przyjemnym i zupełnie nowym doświadczeniem. Miałem okazję sprawdzić, czy jestem w stanie pracować nad projektem przez 24 godziny bez przerwy. Po złożeniu projektu, jurorzy przyznali nagrody trzem najlepszym zespołom spośród 27 uczestniczących, i z radością mogę powiedzieć, że byliśmy jednym z nich.',
    },
  },
]
