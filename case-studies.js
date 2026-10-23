
/*
=================================================
BETTY PORTFOLIO — FEATURED CASE STUDIES
=================================================

COMPLETE VERSION

Features:
- Four featured project cards
- Short description outside each card
- Complete project information inside modal
- Project screenshot galleries
- Automatic placeholders for missing images
- HealthiScan kiosk demo video
- Ask Me About This Project button
- Contact form message autofill
- Responsive layout
- Pink and maroon modal accents
- Dark and light mode support

To change images:
  Edit each project's cover or photos[].src.

To change the kiosk video:
  Edit HealthiScan's video property.

No Supabase required for this feature.
*/


/* =================================================
   1. PROJECT INFORMATION
================================================= */

const CASE_STUDIES = [

  /* =============================================
     PAWSIBILITY
  ============================================= */

  {
    id: "pawsibility",
    title: "Pawsibility",
    category: "PET ADOPTION • WEB SYSTEM",
    accent: "#e9a7b9",

    cover: "assets/pawsibility-cover.png",

    shortDescription:
      "Connecting rescue animals with loving homes through a more connected digital adoption experience.",

    overview:
      "Pawsibility is a web-based pet adoption system developed for Pawssion Project Foundation, an animal rescue and welfare organization. As the sole developer/programmer in our group, I designed and developed the entire system, from its user interface and website structure to the backend and database. The project builds on the foundation's existing online presence by creating a more connected experience for discovering rescue animals and understanding the adoption process.",

    problem:
      "During our visit to Pawssion Project Foundation in San Jose del Monte, we learned that its existing website mainly showcased pets, while the adoption process relied on Google Forms and largely manual follow-up. The challenge was to find a meaningful way to improve the existing experience instead of simply creating another website that displayed animals. We needed to consider how visitors discovered pets, learned about individual animals, and understood the next steps toward adoption.",

    solution:
      "I designed and developed a dedicated adoption web system featuring a landing page, pet listings, individual pet profiles, and an adoption-process section. These pages work together to give visitors a clearer journey from discovering an animal to learning how to proceed with adoption. The system aims to organize important pet information and adoption guidance within a more cohesive digital experience.",

    role:
      "I was the sole developer/programmer in our group and handled the entire system, from planning and interface design to frontend development, backend programming, database integration, and the adoption workflow. I translated our observations of the foundation's existing website and adoption process into the complete web system. This experience strengthened my ability to independently design and implement an end-to-end web application.",

    features: [
      "Landing page introducing the pet adoption platform",
      "Pet listings for browsing rescue animals",
      "Individual pet profiles with relevant animal information",
      "Adoption-process page explaining the steps for prospective adopters",
      "Connected navigation between pet discovery and adoption information"
    ],

    tech:
      "HTML, CSS, JavaScript, PHP, MySQL/MariaDB",

    challenges:
      "My main challenge was improving an existing website rather than starting with an entirely new concept. Our visit to the foundation helped us understand that its website primarily displayed pets, while adoption inquiries relied on Google Forms and manual processes. I used those observations to design a more connected journey between the landing page, pet listings, individual profiles, and adoption instructions. This taught me the importance of understanding an organization's actual workflow before deciding what a system should improve.",

    photos: [
      {
        title: "01 — Landing Page",
        note:
          "Introduces Pawsibility and guides visitors toward rescue pet listings and adoption information.",
        src: "assets/pawsibility-landing.png"
      },
      {
        title: "02 — Pet Listings",
        note:
          "Shows the browsing interface where visitors can discover rescue animals and explore their profiles.",
        src: "assets/pawsibility-pets.png"
      },
      {
        title: "03 — Individual Pet Profile",
        note:
          "Presents a pet's details and background to help potential adopters learn more before expressing interest.",
        src: "assets/pawsibility-pet-details.png"
      },
      {
        title: "04 — Adoption Process",
        note:
          "Explains the adoption steps and provides guidance for visitors interested in adopting an animal.",
        src: "assets/pawsibility-adoption.png"
      }
    ]
  },


  /* =============================================
     KALINGA
  ============================================= */

  {
    id: "kalinga",
    title: "KaLinGa",
    category: "COMMUNITY HEALTHCARE • WEB APPLICATION",
    accent: "#b8dff3",

    cover: "assets/kalinga-cover.png",

    shortDescription:
      "A community healthcare system shaped around the needs of residents and health center workers.",

    overview:
      "KaLinGa, which stands for Kalusugan, Lingap at Gabay, is a web-based healthcare management system developed for Barangay Gaya-Gaya Health Center. I designed and developed the complete system, including four interconnected interfaces for residents/patients, barangay health workers (BHWs), administrators, and doctors or healthcare providers. The platform supports appointment management, patient information, medical records, and healthcare documentation.",

    problem:
      "One of my biggest challenges was designing an interface that different users could understand and navigate comfortably, especially older barangay health workers who might find complicated systems difficult to use. Another challenge was integrating four distinct interfaces—resident/patient, BHW, administrator, and doctor/healthcare provider—so that each user role could follow its own workflow while remaining connected within one system.",

    solution:
      "I customized the system around the preferences and actual needs of its intended users. We visited the health center regularly, introduced improvements for the staff to try, gathered feedback, and used their comments to guide subsequent revisions. This iterative, user-centered approach helped us simplify navigation and make workflows more understandable while maintaining the integration of the four interfaces.",

    role:
      "I was responsible for designing and developing the entire KaLinGa system. My work covered the resident/patient, BHW, administrator, and doctor/healthcare provider interfaces, including their individual workflows and integration. I also participated in frequent health-center visits to test improvements, gather feedback from intended users, and customize the interface based on their preferences. This project gave me valuable experience in full-system development, integration, and user-centered design.",

    features: [
      "Resident/patient interface for accessing available services",
      "Resident dashboard and appointment workflows",
      "BHW appointment page for reviewing and managing requests",
      "Doctor/healthcare provider interface",
      "Administrator interface for system management",
      "Patient information and medical records",
      "Medical documentation workflows"
    ],

    tech:
      "HTML, CSS, JavaScript, PHP, MySQL/MariaDB",

    challenges:
      "KaLinGa taught me that a system can be technically functional but still be difficult to use if it does not consider the people using it. Designing for older BHWs required me to think carefully about navigation, clarity, and the number of steps needed to complete common tasks. Our repeated visits to the health center gave us opportunities to test each improvement and refine the interface based on direct feedback. Integrating four different interfaces was another major challenge, but working through it strengthened my skills in system architecture, connected workflows, and end-to-end development.",

    photos: [
      {
        title: "01 — KaLinGa Landing Page",
        note:
          "Introduces KaLinGa, its purpose, and the healthcare services available through the platform.",
        src: "assets/kalinga-landing-page.png"
      },
      {
        title: "02 — Resident Dashboard",
        note:
          "Shows the resident-facing dashboard and how residents navigate available healthcare services.",
        src: "assets/kalinga-dashboard.png"
      },
      {
        title: "03 — BHW Appointment Management",
        note:
          "Shows the barangay health worker interface for reviewing and managing appointment information and requests.",
        src: "assets/kalinga-appointments.png"
      },
      {
        title: "04 — Resident Medical Records",
        note:
          "Shows the medical records page where residents can review their available healthcare information.",
        src: "assets/healthiscan-medical-records.png"
      }
    ]
  },


  /* =============================================
     HEALTHISCAN
  ============================================= */

  {
    id: "healthiscan",
    title: "HealthiScan",
    category: "HEALTH TECHNOLOGY • SMART KIOSK",
    accent: "#d7a6c0",

    cover: "assets/healthiscan-cover.png",

    video: "assets/projects/healthiscan-kiosk-demo.mp4",
    videoPoster: "",

    shortDescription:
      "A smart vital signs kiosk and queuing system combining hardware, sensors, and healthcare software.",

    overview:
      "HealthiScan is a smart vital signs kiosk integrated with a web-based queuing system, developed as an academic group project for Barangay Graceville Health Center. Our group consisted of four members, and I took responsibility for the system's design and software development, along with the kiosk's hardware wiring and sensor integration. The project combines a physical kiosk with a vital signs workflow, queue display, and role-based interfaces for healthcare personnel.",

    problem:
      "Patient intake involves several connected steps, including patient identification, vital signs collection, and consultation queue management. HealthiScan required the physical kiosk, sensors, and software interfaces to work together as one coordinated system. As the only developer in our four-member group, I also stepped up to handle the hardware work, including wiring and connecting the sensors, in addition to designing and developing the software.",

    solution:
      "I designed and developed the software interfaces and worked on the physical kiosk's wiring and sensor integration. The system includes a kiosk vital signs page and separate interfaces for the queue display, BHWs, doctors/healthcare providers, and administrators. My previous experience with KaLinGa helped me approach the software development more confidently, allowing me to focus more of my learning on the hardware and integration challenges. The completed project was selected for Technovate.",

    role:
      "I was the sole developer in our four-member group and took responsibility for the system's design and software development, as well as the kiosk hardware wiring and sensor connections. I developed the web interfaces and worked on integrating the physical kiosk with the intended patient workflow. This project expanded my experience beyond web development into hardware assembly, sensor integration, and the coordination of physical and digital components.",

    features: [
      "Physical smart vital signs kiosk",
      "Kiosk interface for the vital signs workflow",
      "Hardware wiring and sensor integration",
      "Patient queue display",
      "BHW interface",
      "Doctor/healthcare provider interface",
      "Administrator interface",
      "Web-based patient intake and queuing workflows"
    ],

    tech:
      "HTML, CSS, JavaScript, PHP, MySQL/MariaDB, Python, C++ (Arduino IDE), Playwright, and kiosk hardware/sensors",

    challenges:
      "My main challenges were on the hardware side rather than the software. Wiring the kiosk and integrating the sensors required careful work to connect the physical components with the intended system workflow. Since I was the only developer in a four-member group, I stepped up to handle both the software and the physical kiosk work. My experience developing KaLinGa helped me approach the software side with greater confidence, while HealthiScan pushed me to learn new skills in hardware and sensor integration. The project was completed and selected for Technovate.",

    photos: [
      {
        title: "01 — Physical HealthiScan Kiosk",
        note:
          "Shows the physical kiosk developed for the vital signs and patient queuing workflow.",
        src: "assets/healthiscan-landing-page.png"
      },
      {
        title: "02 — Hardware Wiring Diagram",
        note:
          "Shows the digital wiring layout used to illustrate the connections between the kiosk's hardware components and sensors.",
        src: "assets/healthiscan-wiring.png"
      },
      {
        title: "03 — Role-Based System Interfaces",
        note:
          "A collage featuring the queue display and the BHW, doctor/healthcare provider, and administrator interfaces.",
        src: "assets/healthiscan-interface.png"
      },
      {
        title: "04 — Kiosk Vital Signs Page",
        note:
          "Shows the vital signs interface displayed on the physical kiosk during the patient measurement workflow.",
        src: "assets/healthiscan-vitals.png"
      }
    ]
  },


  /* =============================================
     SARI-SARI STORE MANAGER
  ============================================= */

  {
    id: "sari-sari",
    title: "Sari-Sari Store Manager",
    category: "STORE MANAGEMENT • WEB APPLICATION",
    accent: "#e8c987",

    cover: "assets/sari-sari-cover.png",

    shortDescription:
      "A practical store management application I built to make daily work easier for my mom at our family-owned sari-sari store.",

    overview:
      "Sari-Sari Store Manager is a web-based store management application I am developing for our family's own sari-sari store. I started this project because I wanted to build something useful for my mom and make everyday store tasks less difficult. The application brings together inventory management, product pricing, point-of-sale workflows, shopping lists, sales records, expense tracking, and customer credit management in one platform.",

    problem:
      "Running a small neighborhood store involves keeping track of many products, stock quantities, purchase units, selling prices, sales, expenses, and customer credit. For our store, the most time-consuming part of setting up the system was encoding and organizing the product information consistently, especially when products had different sizes, pack quantities, flavors, or prices.",

    solution:
      "I built a centralized web application around the practical needs of our store. The system includes a dashboard, inventory management, point of sale, and an utang tracker, alongside tools for product pricing, shopping lists, sales history, and reports. The design focuses on making everyday actions easy to locate and understand, helping my mom manage store information while continuing to serve customers.",

    role:
      "I am the sole developer of the application. I planned, designed, and developed the system for my mom and our family-owned store, including the user interface, application workflows, and Supabase integration. I made design decisions based on the actual tasks involved in running our store, with the goal of making the application practical and approachable for everyday use.",

    features: [
      "Dashboard for an overview of store operations",
      "Product inventory and stock management",
      "Purchase-unit, product-cost, and selling-price management",
      "Point-of-sale and checkout workflow",
      "Sales history and reporting",
      "Expense tracking for reviewing operating costs",
      "Shopping list planning and product price management",
      "Customer credit and payment tracking through the utang tracker"
    ],

    tech:
      "HTML, CSS, JavaScript, React, Vite, Supabase",

    challenges:
      "Compared with my healthcare projects, I did not encounter as many major development obstacles while building this application. The most time-consuming part was encoding and organizing the store's product information accurately, especially for products with different sizes, pack quantities, flavors, and prices. This made me pay closer attention to consistent product naming, purchase units, and pricing fields. The project is personally meaningful because I am building it to help my mom manage our family store more easily.",

    photos: [
      {
        title: "01 — Store Dashboard",
        note:
          "Shows the main dashboard and navigation for accessing the store's management tools.",
        src: "assets/sari-sari-dashboard.png"
      },
      {
        title: "02 — Inventory Management",
        note:
          "Shows the inventory interface for managing product information, stock quantities, and pricing.",
        src: "assets/sari-sari-inventory.png"
      },
      {
        title: "03 — Point of Sale (POS)",
        note:
          "Shows the sales interface used to select products, review the cart, and proceed through the payment workflow.",
        src: "assets/sari-sari-pos.png"
      },
      {
        title: "04 — Utang Tracker",
        note:
          "Shows the customer credit tracker for reviewing outstanding balances and managing recorded payments.",
        src: "assets/sari-sari-utang.png"
      }
    ]
  }

];


/* =================================================
   2. PROJECT STYLING
================================================= */

(() => {

  const style = document.createElement("style");

  style.textContent = `

    /* =====================================
       FEATURED PROJECT CARDS
    ===================================== */

    .case-featured {
      margin: 18px 0 64px;
    }

    .case-section-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin-bottom: 24px;
    }

    .case-section-heading h3 {
      font-size: clamp(1.5rem, 3vw, 2.4rem);
      letter-spacing: -.045em;
      line-height: 1.15;
      margin: 0;
    }

    .case-section-heading p {
      max-width: 280px;
      font-size: .86rem;
      opacity: .65;
      margin: 0;
    }

    .case-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }

    .case-card {
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;

      border: 1px solid rgba(140,140,140,.24);
      border-radius: 18px;

      background: rgba(130,130,130,.055);
      color: inherit;

      text-align: left;
      font: inherit;
      cursor: pointer;

      transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
    }

    .case-card:hover {
      transform: translateY(-5px);
      border-color: rgba(140,140,140,.7);
      box-shadow: 0 15px 42px rgba(0,0,0,.12);
    }

    .case-card:focus-visible {
      outline: 3px solid #d993ab;
      outline-offset: 4px;
    }

    .case-card img {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: fill;
      transition: transform .55s ease;
    }

    .case-card:hover img {
      transform: scale(1.035);
    }

    /* Preserve your KaLinGa cover positioning */

    .case-card[data-project-id="kalinga"] img {
      margin-top: -1px;
    }

    .case-card-content {
      padding: 22px;
    }

    .case-card-kicker {
      display: block;
      margin-bottom: 12px;

      font-size: .7rem;
      text-transform: uppercase;
      letter-spacing: .1em;
      opacity: .65;
    }

    .case-card-content h4 {
      font-size: clamp(1.3rem, 2vw, 1.7rem);
      letter-spacing: -.035em;
      margin: 0 0 8px;
    }

    .case-card-description {
      font-size: .9rem;
      line-height: 1.7;
      opacity: .75;
      margin: 0 0 22px;
    }

    .case-card-open {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-top: 1px solid rgba(140,140,140,.24);
      padding-top: 16px;

      font-size: .85rem;
      font-weight: 700;
    }

    .case-other-heading {
      margin: 32px 0 20px;
      font-size: 1.45rem;
      letter-spacing: -.03em;
    }


    /* =====================================
       PROJECT MODAL
    ===================================== */

    .case-dialog {
      box-sizing: border-box;

      width: min(960px, calc(100vw - 24px));
      max-width: none;
      max-height: min(92dvh, 960px);

      padding: 0;
      margin: auto;

      border: 1px solid #494949;
      border-radius: 20px;

      background: #191318;
      color: #fff6f8;
      color-scheme: dark;

      overflow-y: auto;
      overscroll-behavior: contain;
    }

    .case-dialog::backdrop {
      background: rgba(17, 8, 14, .80);
      backdrop-filter: blur(8px);
    }

    .case-dialog-inner {
      padding: clamp(18px, 4vw, 36px);
    }

    .case-modal-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 15px;
      margin-bottom: 24px;
    }

    .case-close {
      padding: 11px 17px;

      border: 1px solid #765465;
      border-radius: 30px;

      background: #33212a;
      color: #fff6f8;

      cursor: pointer;
      font: inherit;
    }

    .case-close:hover {
      background: #543044;
    }

    .case-dialog :focus-visible {
      outline: 3px solid #eeb0c1;
      outline-offset: 3px;
    }

    .case-dialog h2 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      letter-spacing: -.05em;
      line-height: 1.15;
      margin: 10px 0;
    }

    .case-dialog h3 {
      font-size: 1.15rem;
      margin: 0 0 12px;
    }

    .case-dialog p,
    .case-dialog li {
      color: #d1bfc8;
      line-height: 1.75;
    }

    .case-subheading {
      font-size: .7rem;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: #eeb0c1;
    }

    .case-hero-image {
      display: block;
      width: 100%;

      aspect-ratio: 16 / 8;
      object-fit: contain;

      background: #291e27;
      border-radius: 13px;
      margin: 22px 0 28px;
    }

    .case-info-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 14px;
    }

    .case-info-box {
      min-width: 0;
      padding: 20px;

      background: #2a1e26;
      border: 1px solid #4b3542;
      border-radius: 12px;
    }

    .case-info-box p {
      margin-bottom: 0;
    }

    .case-info-box ul {
      padding-left: 20px;
      margin-bottom: 0;
    }

    .case-info-box li + li {
      margin-top: 8px;
    }


    /* =====================================
       HEALTHISCAN VIDEO
    ===================================== */

    .case-video-section {
      margin: 32px 0;
    }

    .case-demo-video {
      display: block;
      width: 100%;
      max-height: 560px;

      aspect-ratio: 16 / 9;
      object-fit: contain;

      background: #101015;
      border-radius: 14px;
    }


    /* =====================================
       PROJECT GALLERY
    ===================================== */

    .case-gallery-heading {
      margin: 34px 0 18px;
    }

    .case-gallery-heading p {
      margin-bottom: 0;
    }

    .case-gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 16px;
    }

    .case-gallery figure {
      margin: 0;
      min-width: 0;
    }

    .case-gallery img {
      display: block;
      width: 100%;

      aspect-ratio: 4 / 3;
      object-fit: contain;

      border-radius: 10px;
      background: #302530;
    }

    .case-gallery figcaption {
      padding: 12px 2px;
    }

    .case-gallery figcaption strong {
      display: block;
      margin-bottom: 3px;
      font-size: .88rem;
    }

    .case-gallery figcaption span {
      display: block;
      font-size: .8rem;
      opacity: .7;
    }


    /* =====================================
       ASK ME ABOUT THIS PROJECT
    ===================================== */

    .case-ask-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;

      margin-top: 38px;
      padding: 28px;

      background: #33212a;
      border: 1px solid #674153;
      border-radius: 18px;
    }

    .case-ask-copy {
      flex: 1;
      min-width: 0;
    }

    .case-ask-label {
      display: block;

      color: #eeb0c1;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .14em;
    }

    .case-ask-copy h3 {
      margin: 10px 0 8px;

      color: #fff6f8;
      font-size: 22px;
    }

    .case-ask-copy p {
      margin: 0;

      color: #d9bdc7;
      font-size: 14px;
      line-height: 1.7;
    }

    .case-ask-button {
      flex-shrink: 0;
      padding: 15px 22px;

      border: 0;
      border-radius: 100px;

      background: #eeb0c1;
      color: #321923;

      font: inherit;
      font-size: 13px;
      font-weight: 700;

      cursor: pointer;

      transition:
        transform .2s ease,
        background .2s ease;
    }

    .case-ask-button:hover {
      background: #ffd1df;
      transform: translateY(-2px);
    }


    /* =====================================
       LIGHT THEME
    ===================================== */

    :root[data-theme="light"] .case-dialog {
      background: #fff9f8;
      color: #35212a;
      border-color: #efd4dd;
      color-scheme: light;
    }

    :root[data-theme="light"] .case-dialog p,
    :root[data-theme="light"] .case-dialog li {
      color: #75616b;
    }

    :root[data-theme="light"] .case-info-box {
      background: #ffffff;
      border-color: #efdde4;
    }

    :root[data-theme="light"] .case-close {
      background: #f7e9ee;
      border-color: #edceda;
      color: #83324f;
    }

    :root[data-theme="light"] .case-subheading {
      color: #83324f;
    }

    :root[data-theme="light"] .case-hero-image,
    :root[data-theme="light"] .case-gallery img {
      background: #f6e8ed;
    }

    :root[data-theme="light"] .case-ask-section {
      background: #fff1f4;
      border-color: #efd4dd;
    }

    :root[data-theme="light"] .case-ask-label {
      color: #9a4764;
    }

    :root[data-theme="light"] .case-ask-copy h3 {
      color: #622e43;
    }

    :root[data-theme="light"] .case-ask-copy p {
      color: #75616b;
    }

    :root[data-theme="light"] .case-ask-button {
      background: #83324f;
      color: #ffffff;
    }

    :root[data-theme="light"] .case-ask-button:hover {
      background: #63263d;
    }


    /* =====================================
       RESPONSIVE LAYOUT
    ===================================== */

    @media (max-width: 680px) {

      .case-grid,
      .case-gallery,
      .case-info-grid {
        grid-template-columns: 1fr;
      }

      .case-section-heading {
        display: block;
      }

      .case-section-heading p {
        margin-top: 12px;
      }

      .case-card-content {
        padding: 18px;
      }

      .case-dialog {
        max-height: 95dvh;
      }

      .case-dialog-inner {
        padding: 18px;
      }

      .case-info-box {
        padding: 18px;
      }

      .case-ask-section {
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
      }

      .case-ask-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .case-card,
      .case-card img,
      .case-ask-button {
        transition: none;
      }
    }
  `;

  document.head.appendChild(style);


  /* =================================================
     3. HELPER FUNCTIONS
  ================================================= */

  const escapeHTML = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[character]
    );


  function placeholder(project, label) {

    const title = escapeHTML(project.title);
    const subtitle = escapeHTML(label);
    const accent = project.accent;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 1000 625">

        <rect width="1000" height="625"
              fill="#211820"/>

        <circle cx="840" cy="95" r="250"
                fill="${accent}" opacity=".15"/>

        <rect x="95" y="95" width="810" height="430"
              rx="24" fill="#322530"/>

        <rect x="95" y="95" width="810" height="55"
              rx="24" fill="#493441"/>

        <circle cx="128" cy="123" r="8"
                fill="#ed8b88"/>

        <circle cx="153" cy="123" r="8"
                fill="#eac17e"/>

        <circle cx="178" cy="123" r="8"
                fill="#e9a7b9"/>

        <rect x="126" y="184" width="190" height="307"
              rx="12" fill="#453440"/>

        <rect x="340" y="184" width="526" height="144"
              rx="12" fill="${accent}" opacity=".65"/>

        <rect x="340" y="348" width="245" height="143"
              rx="12" fill="#5b4453"/>

        <rect x="604" y="348" width="262" height="143"
              rx="12" fill="#5b4453"/>

        <text x="500" y="558"
              text-anchor="middle"
              fill="#ffffff"
              font-size="38"
              font-family="Arial"
              font-weight="bold">${title}</text>

        <text x="500" y="592"
              text-anchor="middle"
              fill="#e2cad4"
              font-size="19"
              font-family="Arial">${subtitle}</text>

      </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(svg);
  }


  function photoURL(project, src, label) {

    if (typeof src === "string" && src.trim()) {
      return src.trim();
    }

    return placeholder(project, label);
  }


  function attachImageFallback(image, project, label) {

    if (!image) return;

    const useFallback = () => {

      if (image.dataset.fallbackUsed === "true") {
        return;
      }

      image.dataset.fallbackUsed = "true";
      image.src = placeholder(project, label);
    };

    image.addEventListener("error", useFallback, {
      once: true
    });

    if (
      image.complete &&
      image.naturalWidth === 0
    ) {
      useFallback();
    }
  }


  /* =================================================
     4. PROJECT MODAL
  ================================================= */

  function showCase(project, dialog) {

    // Store the clicked project for styling.
    dialog.dataset.projectId = project.id;


    /* KEY FEATURES */

    const list = project.features.map(
      feature => `<li>${escapeHTML(feature)}</li>`
    ).join("");


    /* PROJECT GALLERY */

    const gallery = project.photos.map(
      (photo, index) => `

        <figure>
          <img
            src="${escapeHTML(
              photoURL(project, photo.src, photo.title)
            )}"
            alt="${escapeHTML(photo.title)}"
            data-photo-index="${index}"
            loading="lazy"
          />

          <figcaption>
            <strong>
              ${escapeHTML(photo.title)}
            </strong>

            <span>
              ${escapeHTML(photo.note)}
            </span>
          </figcaption>
        </figure>

      `
    ).join("");


    /* MODAL HTML */

    dialog.innerHTML = `

      <div class="case-dialog-inner">

        <!-- TOP BAR -->

        <div class="case-modal-top">
          <span class="case-subheading">
            PROJECT CASE STUDY
          </span>

          <button
            type="button"
            class="case-close">
            Close ✕
          </button>
        </div>


        <!-- PROJECT TITLE -->

        <span class="case-subheading">
          ${escapeHTML(project.category)}
        </span>

        <h2>
          ${escapeHTML(project.title)}
        </h2>


        <!-- PROJECT COVER -->

        <img
          class="case-hero-image"
          src="${escapeHTML(
            photoURL(
              project,
              project.cover,
              "Project Cover"
            )
          )}"
          alt="${escapeHTML(project.title)} cover"
        />


        <!-- OPTIONAL DEMO VIDEO -->

        ${project.video ? `

          <section class="case-video-section">

            <div class="case-gallery-heading">
              <h3>See the System in Action</h3>

              <p>
                Watch the HealthiScan kiosk demonstration,
                including its hardware and patient workflow.
              </p>
            </div>

            <video
              class="case-demo-video"
              controls
              playsinline
              preload="metadata"
              ${project.videoPoster
                ? `poster="${escapeHTML(project.videoPoster)}"`
                : ""}>

              <source
                src="${escapeHTML(project.video)}"
                type="video/mp4">

              Your browser does not support HTML video.

            </video>
          </section>

        ` : ""}


        <!-- COMPLETE CASE STUDY -->

        <div class="case-info-grid">

          <div class="case-info-box">
            <h3>01 / Project Overview</h3>
            <p>
              ${escapeHTML(project.overview)}
            </p>
          </div>

          <div class="case-info-box">
            <h3>02 / The Problem</h3>
            <p>
              ${escapeHTML(project.problem)}
            </p>
          </div>

          <div class="case-info-box">
            <h3>03 / The Solution</h3>
            <p>
              ${escapeHTML(project.solution)}
            </p>
          </div>

          <div class="case-info-box">
            <h3>04 / My Contribution</h3>
            <p>
              ${escapeHTML(project.role)}
            </p>
          </div>

          <div class="case-info-box">
            <h3>05 / Key Features</h3>
            <ul>
              ${list}
            </ul>
          </div>

          <div class="case-info-box">
            <h3>06 / Technologies Used</h3>
            <p>
              ${escapeHTML(project.tech)}
            </p>
          </div>

          <div
            class="case-info-box"
            style="grid-column:1/-1">

            <h3>07 / Challenges &amp; Learnings</h3>

            <p>
              ${escapeHTML(project.challenges)}
            </p>
          </div>

        </div>


        <!-- PROJECT GALLERY -->

        <div class="case-gallery-heading">
          <h3>Project Gallery</h3>

          <p>
            Screenshots and development photos
            from the project.
          </p>
        </div>

        <div class="case-gallery">
          ${gallery}
        </div>


        <!-- ASK ME ABOUT THIS PROJECT -->

        <div class="case-ask-section">

          <div class="case-ask-copy">

            <span class="case-ask-label">
              HAVE A QUESTION?
            </span>

            <h3>
              Let's talk about this project.
            </h3>

            <p>
              Curious about how I designed or developed
              this system? I'd love to share more about
              my process and experience.
            </p>

          </div>

          <button
            type="button"
            class="case-ask-button">
            Ask Me About This Project ↗
          </button>

        </div>

      </div>
    `;


    /* =====================================
       CLOSE MODAL
    ===================================== */

    dialog.querySelector(".case-close")
      .addEventListener("click", () => {
        dialog.close();
      });


    /* =====================================
       ASK ME ABOUT THIS PROJECT
       FUNCTIONAL CONTACT REDIRECT
    ===================================== */

    const askButton = dialog.querySelector(
      ".case-ask-button"
    );

    if (askButton) {

      askButton.addEventListener("click", () => {

        const projectName = project.title;

        const message =
          `Hi Betty! I'd like to know more about your ` +
          `${projectName} project. Could you tell me ` +
          `more about its development and your ` +
          `experience building it?`;

        const contactSection =
          document.getElementById("contact");

        const messageField =
          document.getElementById("contact-message");

        // Close project modal before navigating.
        dialog.close();

        // Use the existing contact form.
        if (contactSection && messageField) {

          // Prefill message.
          messageField.value = message;

          // Notify any scripts listening to input changes.
          messageField.dispatchEvent(
            new Event("input", { bubbles: true })
          );

          messageField.dispatchEvent(
            new Event("change", { bubbles: true })
          );

          // Detect reduced-motion preference.
          const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

          // Go to Contact.
          contactSection.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "start"
          });

          // Move keyboard focus to message field.
          try {
            messageField.focus({
              preventScroll: true
            });
          } catch (error) {
            messageField.focus();
          }

        } else {

          // Fallback if Contact section isn't found.
          const subject = encodeURIComponent(
            `Question About ${projectName}`
          );

          const body = encodeURIComponent(message);

          window.location.href =
            `mailto:bettybeatrix09@gmail.com` +
            `?subject=${subject}&body=${body}`;

        }

      });

    }


    /* =====================================
       IMAGE PLACEHOLDERS
    ===================================== */

    const heroImage = dialog.querySelector(
      ".case-hero-image"
    );

    attachImageFallback(
      heroImage,
      project,
      "Project Cover"
    );

    dialog.querySelectorAll(".case-gallery img")
      .forEach((image, index) => {

        attachImageFallback(
          image,
          project,
          project.photos[index].title
        );

      });


    // Finally open the modal.
    dialog.showModal();
  }


  /* =================================================
     5. CREATE FEATURED PROJECT CARDS
  ================================================= */

  function init() {

    const existingGrid = document.getElementById(
      "projects-grid"
    );

    if (!existingGrid) {
      console.warn(
        "Could not find the portfolio projects grid."
      );
      return;
    }

    // Prevent duplicate sections.
    if (document.querySelector(".case-featured")) {
      return;
    }


    const section = document.createElement("section");

    section.className = "case-featured";

    section.setAttribute(
      "aria-label",
      "Featured case studies"
    );


    /* =====================================
       FEATURED PROJECT HTML
    ===================================== */

    section.innerHTML = `

      <div class="case-section-heading">

        <h3>
          Featured case studies
          <span>✳</span>
        </h3>

        <p>
          Selected projects combining thoughtful design,
          practical development, and real-world problem solving.
        </p>

      </div>


      <div class="case-grid">

        ${CASE_STUDIES.map((project, index) => `

          <button
            type="button"
            class="case-card"
            data-case-index="${index}"
            data-project-id="${escapeHTML(project.id)}">

            <img
              src="${escapeHTML(
                photoURL(
                  project,
                  project.cover,
                  "Cover Preview"
                )
              )}"
              alt="${escapeHTML(project.title)} cover"
              loading="lazy"
            />

            <div class="case-card-content">

              <span class="case-card-kicker">
                ${escapeHTML(project.category)}
              </span>

              <h4>
                ${escapeHTML(project.title)}
              </h4>

              <p class="case-card-description">
                ${escapeHTML(project.shortDescription)}
              </p>

              <span class="case-card-open">
                Explore case study
                <span aria-hidden="true">↗</span>
              </span>

            </div>

          </button>

        `).join("")}

      </div>
    `;


    /* =====================================
       HANDLE MISSING COVER IMAGES
    ===================================== */

    section.querySelectorAll(".case-card")
      .forEach((card, index) => {

        attachImageFallback(
          card.querySelector("img"),
          CASE_STUDIES[index],
          "Cover Preview"
        );

      });


    // Place Featured Case Studies before Other Works.
    existingGrid.before(section);


    /* =================================================
       6. OTHER WORKS & EXPERIMENTS
    ================================================= */

    const otherHeading = document.createElement("h3");

    otherHeading.className = "case-other-heading";

    otherHeading.textContent =
      "Other work & experiments";

    existingGrid.before(otherHeading);


    // Hide duplicate featured projects in the old grid.
    const hideDuplicates = () => {

      for (const card of existingGrid.children) {

        const text = card.textContent || "";

        if (
          /pawsibility|kalinga|healthiscan|sari[\s-]*sari/i
            .test(text)
        ) {
          card.style.display = "none";
        }

      }

    };

    hideDuplicates();


    // Recheck if Other Works cards are rendered later.
    if ("MutationObserver" in window) {

      new MutationObserver(
        hideDuplicates
      ).observe(existingGrid, {
        childList: true
      });

    }


    // Hide old filters so they don't affect Featured.
    const oldFilters = document.querySelector(
      ".filter-row"
    );

    if (oldFilters) {
      oldFilters.style.display = "none";
    }


    /* =================================================
       7. CREATE PROJECT MODAL
    ================================================= */

    const dialog = document.createElement("dialog");

    dialog.className = "case-dialog";

    dialog.setAttribute(
      "aria-label",
      "Project case study"
    );

    document.body.appendChild(dialog);

    let lastClickedCard = null;


    /* =====================================
       OPEN PROJECT MODAL
    ===================================== */

    section.addEventListener("click", (event) => {

      const card = event.target.closest(
        "[data-case-index]"
      );

      if (!card) return;

      const index = Number(card.dataset.caseIndex);
      const project = CASE_STUDIES[index];

      if (!project) return;

      lastClickedCard = card;

      showCase(project, dialog);
    });


    /* =====================================
       CLICK OUTSIDE TO CLOSE
    ===================================== */

    dialog.addEventListener("click", (event) => {

      if (event.target === dialog) {
        dialog.close();
      }

    });


    /* =====================================
       STOP VIDEO ON MODAL CLOSE
    ===================================== */

    dialog.addEventListener("close", () => {

      const video = dialog.querySelector(
        ".case-demo-video"
      );

      if (video) {
        video.pause();
      }

      // Return focus only if it wasn't already
      // moved to the Contact form.
      const activeElement = document.activeElement;

      const focusIsElsewhere =
        activeElement &&
        activeElement !== document.body &&
        !dialog.contains(activeElement);

      if (
        !focusIsElsewhere &&
        lastClickedCard &&
        lastClickedCard.isConnected
      ) {
        lastClickedCard.focus({
          preventScroll: true
        });
      }

    });

  }


  /* =================================================
     8. INITIALIZE
  ================================================= */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
