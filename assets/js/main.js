    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // Translations
    const translations = {
      sk: {
        'nav-cta-link': 'Napíšte nám',
        'hero-label': 'Dátové poradenstvo - SK / CZ',
        'hero-h1': 'Pomáham e-shopom <em>získať kontrolu nad dátami.</em>',
        'hero-sub': 'Reporting, automatizácie a dátové riešenia postavené na 8+ rokoch skúseností v e-commerce a logistike.',
        'hero-btn-primary': 'Nezáväzná konzultácia',
        'hero-btn-ghost': 'Čo robíme',
        'about-label': 'O nás',
        'about-h2': 'Rozumieme <em> dátam aj biznisu.</em>',
        'stat1': 'rokov v e-commerce',
        'stat2': 'krajín operácií',
        'stat3': 'trh',
        'about-p1': 'Data House vedie <strong>Tadeáš Galbavý</strong>, dátový konzultant s viac ako 8 rokmi skúseností v e-commerce, logistike a riadení skladových operácií naprieč 6 krajinami.',
        'about-p2': 'Počas rokov v e-commerce som sa denne stretával s problémami ako nepresné dáta, manuálne reportovanie, neefektívne objednávanie a nedostatok prehľadu nad biznisom. Práve preto dnes pomáham firmám budovať dátové riešenia, ktoré majú reálny dopad na rozhodovanie.',
        'about-p3': 'Neponúkam univerzálne dashboardy ani zbytočnú teóriu. Každé riešenie navrhujem s ohľadom na konkrétny biznis problém - či už ide o reporting, automatizáciu procesov alebo lepšiu kontrolu nad dátami.',
        'services-label': 'Služby',
        'services-h2': 'Čo pre vás spravíme',
        'services-intro': 'Každý projekt začína auditom aktuálneho stavu. Nenavrhujeme riešenia naslepo - najprv pochopíme váš biznis.',
        's1-title': 'Audit & zdravie dát',
        's1-desc': 'Pozrieme sa na vaše dáta, reporting a procesy. Odhalíme nepresnosti, manuálnu prácu a miesta, kde firma stráca čas alebo peniaze.',
        's2-title': 'Automatizácia reportingu',
        's2-desc': 'Trávite hodiny prípravou reportov v Exceli? Automatizujeme zber a spracovanie dát tak, aby ste mali aktuálne čísla vždy poruke.',
        's3-title': 'Reporting a prehľad nad biznisom',
        's3-desc': 'Získate prehľad o predaji, maržiach, sklade a výkonnosti firmy na jednom mieste. Bez zdĺhavého hľadania dát v Exceloch a rôznych systémoch.',
        's4-title': 'Prepojenie a správa dát',
        's4-desc': 'Prepojíme dáta z e-shopu, skladu, účtovníctva, marketingových nástrojov a ďalších systémov tak, aby ste mali jedno spoľahlivé miesto, z ktorého môžete vychádzať.',
        's5-title': 'Automatizácia procesov',
        's5-desc': 'Odstránime opakujúcu sa manuálnu prácu a zjednodušíme procesy, ktoré zbytočne zaberajú čas. Váš tím sa môže venovať dôležitejším úlohám namiesto prepisovania dát a rutinných činností.',
        's6-title': 'Dátové analýzy a rozhodovanie',
        's6-desc': 'Potrebujete odpoveď na konkrétnu otázku? Pripravíme analýzu s jasným záverom a odporúčaním. Nie ďalší report, ale podklady pre lepšie rozhodnutia.',
        'how-label': 'Ako pracujeme',
        'how-h2': 'Jednoduchý proces.<br>Žiadne prekvapenia.',
        'step1-title': 'Úvodný hovor',
        'step1-desc': '30 minút zdarma. Pochopíme váš problém a zistíme, či sme pre vás správna voľba.',
        'step2-title': 'Audit situácie',
        'step2-desc': 'Pozrieme sa na aktuálny stav dát a procesov. Dostanete konkrétny obraz - nie všeobecné odporúčania.',
        'step3-title': 'Návrh & realizácia',
        'step3-desc': 'Navrhneme riešenie, odsúhlasíme rozsah a spravíme ho. Bez zbytočných meetingov a prezentácií.',
        'step4-title': 'Odovzdanie & podpora',
        'step4-desc': 'Odovzdáme riešenie s dokumentáciou. Váš tím ho dokáže udržiavať sám - to je náš cieľ.',
        'who-label': 'Pre koho',
        'who-h2': 'Pre firmy, ktoré chcú mať <em>kontrolu nad dátami a rozhodovaním.</em>',
        'who-p': 'Najčastejšie pomáhame e-shopom a firmám, ktoré rastú rýchlejšie, než stíhajú ich procesy, reporting a práca s dátami.',
        'who-list': [
          'Neviete presne, koľko peňazí máte viazaných v zásobách',
          'Objednávanie sa často riadi skúsenosťou alebo pocitom namiesto dát',
          'Reporty vznikajú ručne a zaberajú hodiny každý týždeň',
          'Dôležité dáta sú roztrúsené vo viacerých systémoch',
          'Neveríte číslam natoľko, aby ste sa podľa nich rozhodovali'
        ],
        'cta-label': 'Kontakt',
        'cta-h2': 'Máte pocit, že vám <em>dáta nepomáhajú tak, ako by mali?</em>',
        'cta-p': 'Poďme sa pozrieť na vašu situáciu. Prvý rozhovor je nezáväzný a pomôže zistiť, kde sú najväčšie príležitosti na zlepšenie.',
        'footer-copy': '© 2026 Data House · data-house.eu'
      },
      en: {
        'nav-cta-link': 'Get in touch',
        'hero-label': 'Data Consulting - Central Europe',
        'hero-h1': 'Helping e-commerce businesses <em>take control of their data.</em>',
        'hero-sub': 'Reporting, automation and data solutions built on 8+ years of hands-on experience in e-commerce and logistics.',
        'hero-btn-primary': 'Free consultation',
        'hero-btn-ghost': 'What we do',
        'about-label': 'About',
        'about-h2': 'We understand both <em> data and business.</em>',
        'stat1': 'years in e-commerce',
        'stat2': 'countries of operations',
        'stat3': 'market',
        'about-p1': 'Data House is led by <strong>Tadeáš Galbavý</strong>, a data consultant with more than 8 years of experience in e-commerce, logistics and inventory operations across 6 countries.',
        'about-p2': 'Throughout my years in e-commerce, I worked daily with challenges such as unreliable data, manual reporting, inefficient purchasing decisions and limited business visibility. That is why I now help companies build data solutions that have a real impact on decision-making.',
        'about-p3': 'I do not deliver generic dashboards or unnecessary theory. Every solution is designed around a specific business problem - whether it is reporting, process automation or gaining better control over data.',
        'services-label': 'Services',
        'services-h2': 'What we can do for you',
        'services-intro': 'Every engagement starts with an audit of your current state. We never propose solutions blindly - we understand your business first.',
        's1-title': 'Data audit & quality',
        's1-desc': 'We review your data, reporting and business processes. We identify inaccuracies, manual work and areas where time or money is being lost.',
        's2-title': 'Reporting Automation',
        's2-desc': 'Spending hours preparing Excel reports? We automate data collection and processing so you always have up-to-date numbers at your fingertips.',
        's3-title': 'Business Reporting & Insights',
        's3-desc': 'Get a clear view of sales, margins, inventory and business performance in one place. No more searching through spreadsheets and disconnected systems.',
        's4-title': 'Data Integration & Management',
        's4-desc': 'We connect data from your e-commerce platform, inventory, accounting and marketing tools into one reliable source of truth for your business.',
        's5-title': 'Process Automation',
        's5-desc': 'We eliminate repetitive manual work and simplify processes that consume valuable time. Your team can focus on higher-value tasks instead of copying data and handling routine activities.',
        's6-title': 'Data Analysis & Decision Support',
        's6-desc': 'Need an answer to a specific business question? We deliver analysis with clear conclusions and recommendations. Not another report, but insights that support better decisions.',
        'how-label': 'How we work',
        'how-h2': 'Simple process.<br>No surprises.',
        'step1-title': 'Intro call',
        'step1-desc': '30 minutes, free of charge. We understand your problem and find out if we are the right fit.',
        'step2-title': 'Situation audit',
        'step2-desc': 'We look at the current state of your data and processes. You get a clear picture - not generic recommendations.',
        'step3-title': 'Design & delivery',
        'step3-desc': 'We propose a solution, agree on scope and get it done. No unnecessary meetings or slide decks.',
        'step4-title': 'Handover & support',
        'step4-desc': 'We hand over the solution with documentation. Your team can maintain it independently - that is our goal.',
        'who-label': 'Who we work with',
        'who-h2': 'For companies that <em>want control over their data and decision-making.</em>',
        'who-p': 'We primarily help e-commerce businesses and growing companies whose processes, reporting and data management can no longer keep up with growth.',
        'who-list': [
          'You do not have a clear overview of how much money is tied up in inventory',
          'Purchasing decisions are often based on experience or intuition rather than data',
          'Reports are built manually and consume hours every week',
          'Important data is scattered across multiple systems',
          'You do not trust your numbers enough to base decisions on them'
        ],
        'cta-label': 'Contact',
        'cta-h2': 'Do you feel your data <em>is not helping your business as much as it should?</em>',
        'cta-p': 'Let\’s take a look at your current situation. The first conversation is free and helps identify the biggest opportunities for improvement.',
        'footer-copy': '© 2026 Data House · data-house.eu'
      }
    };

    function setLang(lang) {
      const t = translations[lang];

      // Prepínač
      document.getElementById('btn-sk').classList.toggle('active', lang === 'sk');
      document.getElementById('btn-en').classList.toggle('active', lang === 'en');
      document.documentElement.lang = lang;

      // Všetky jednoduché texty
      const simpleKeys = Object.keys(t).filter(k => k !== 'who-list');
      simpleKeys.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = t[id];
      });

      // Zoznam who-list
      const list = document.getElementById('who-list');
      if (list) {
        list.innerHTML = t['who-list'].map(item => `<li>${item}</li>`).join('');
      }

      // Anchor pre kontakt sekciu
      document.getElementById('nav-cta-link').href = '#kontakt';
      document.querySelectorAll('a[href="#sluzby"]').forEach(a => a.href = '#sluzby');
    }
