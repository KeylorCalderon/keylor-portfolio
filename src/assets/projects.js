import finalQuestionImg from "../assets/screenshot_the_final_question.jpg";
import kuarctechImg from "../assets/screenshot_map_kuarc.jpg";
import cometecImg from "../assets/screenshot_cometec.jpg";

import consigliereImg1 from "../assets/consigliere_images/Image1.png";
import consigliereImg2 from "../assets/consigliere_images/Image2.png";
import consigliereImg3 from "../assets/consigliere_images/Image3.png";
import consigliereImg4 from "../assets/consigliere_images/Image4.png";
import consigliereImg5 from "../assets/consigliere_images/Image5.png";
import consigliereImg6 from "../assets/consigliere_images/Image6.png";
import consigliereImg7 from "../assets/consigliere_images/Image7.png";

import eatImg0 from "../assets/eats_delivery_images/Image0.jpg";
import eatImg1 from "../assets/eats_delivery_images/Image1.png";
import eatImg2 from "../assets/eats_delivery_images/Image2.png";
import eatImg3 from "../assets/eats_delivery_images/Image3.png";
import eatImg4 from "../assets/eats_delivery_images/Image4.png";
import eatImg5 from "../assets/eats_delivery_images/Image5.png";
import eatImg6 from "../assets/eats_delivery_images/Image6.png";
import eatImg7 from "../assets/eats_delivery_images/Image7.png";
import eatImg8 from "../assets/eats_delivery_images/Image8.png";
import eatImg9 from "../assets/eats_delivery_images/Image9.png";
import eatImg10 from "../assets/eats_delivery_images/Image10.png";

import hostImg0 from "../assets/host_inn_images/Image0.jpg";
import hostImg1 from "../assets/host_inn_images/Image1.png";
import hostImg2 from "../assets/host_inn_images/Image2.png";
import hostImg3 from "../assets/host_inn_images/Image3.png";
import hostImg4 from "../assets/host_inn_images/Image4.png";
import hostImg5 from "../assets/host_inn_images/Image5.png";

import keyImg0 from "../assets/keysforgeeks_images/Image0.jpg";
import keyImg1 from "../assets/keysforgeeks_images/Image1.png";
import keyImg2 from "../assets/keysforgeeks_images/Image2.png";
import keyImg3 from "../assets/keysforgeeks_images/Image3.png";
import keyImg4 from "../assets/keysforgeeks_images/Image4.png";
import keyImg5 from "../assets/keysforgeeks_images/Image5.png";
import keyImg6 from "../assets/keysforgeeks_images/Image6.png";

export const projects = {
  en: [
    {
      id: 1,
      title: "The Final Question",
      description: "Text-based immersive narrative experience with branching choices, exploring the fate of a civilization through your decisions. A story about responsibility and consequences.",
      tech: ["React", "Tailwind", "JavaScript"],
      repo: "https://github.com/KeylorCalderon/final-question-interactive-text-game",
      demo: "https://final-question-interactive-text-gam.vercel.app/",
      images: [finalQuestionImg]
    },
    {
      id: 2,
      title: "Kuarc",
      description: "A web application that enables companies to measure and analyze their environmental impact using the Sustainable Development Goals(SDGs). Developed an interactive geospatial visualization module using Google Maps API, enabling data-driven analysis and automated report generation.",
      tech: ["Angular", ".NET", "C#", "Google Maps API", "PostgreSQL", "Neo4j"],
      repo: "",
      demo: "https://kuarctech.com/kuarc/",
      images: [kuarctechImg]
    },
    {
      id: 3,
      title: "ComeTec",
      description: "An institutional full-stack platform built to improve mathematical skills in elementary and secondary students through interactive challenges. It helps students develop critical problem-solving abilities while earning digital participation certificates that recognize their achievements.",
      tech: ["PHP", "HTML", "MySQL"],
      repo: "https://github.com/KeylorCalderon/ComeTec",
      demo: "https://www.cometec.cr/",
      images: [cometecImg]
    },
    {
      id: 4,
      title: "Il Consigliere",
      description: "A full-stack institutional council management platform designed to streamline council session administration, secure user onboarding, agenda organization, and voting workflows.",
      tech: ["React", "React Router", "Axios", "Boostrap", "Node.js", "Express.js", "Sequelize ORM", "PostgreSQL"],
      repo: "https://github.com/KeylorCalderon/Il-Consigliere",
      demo: "",
      images: [consigliereImg1, consigliereImg2, consigliereImg3, consigliereImg4, consigliereImg5, consigliereImg6, consigliereImg7]
    },
    {
      id: 5,
      title: "Eats Delivery App",
      description: "Native Android food delivery application developed in Java, designed as a real-world online ordering platform with customer and administrator functionalities.",
      tech: ["Java", "Android", "Gradle", "SQLite"],
      repo: "https://github.com/KeylorCalderon/Eats-Delivery-app",
      demo: "",
      images: [eatImg0, eatImg1, eatImg2, eatImg3, eatImg4, eatImg5, eatImg6, eatImg7, eatImg8, eatImg9, eatImg10]
    },
    {
      id: 6,
      title: "Host-Inn — Hotel System",
      description: "A full-stack hotel reservation system built featuring role-based access control, reservation workflows, and a database-driven business logic architecture using stored procedures.",
      tech: ["HTML", "CSS", "Handlebars.js", "Node.js", "Express.js", "MySQL", "Stored Procedures"],
      repo: "https://github.com/KeylorCalderon/host-inn-hotel-system",
      demo: "",
      images: [hostImg0, hostImg1, hostImg2, hostImg3, hostImg4, hostImg5]
    },
    {
      id: 7,
      title: "Keysforgeeks",
      description: "Keysforgeeks is a full-stack e-commerce web application for game keys, including user roles, shopping cart functionality, order management, discount handling, and external billing integration via SOAP services.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "SOAP", "MySQL"],
      repo: "https://github.com/KeylorCalderon/Keysforgeeks",
      demo: "",
      images: [keyImg0, keyImg1, keyImg2, keyImg3, keyImg4, keyImg5, keyImg6]
    }
  ],
  es: [
    {
      id: 1,
      title: "La Pregunta Final",
      description: "Experiencia narrativa inmersiva basada en texto con decisiones ramificadas, que explora el destino de una civilización a través de tus elecciones. Una historia sobre responsabilidad y sus consecuencias.",
      tech: ["React", "Tailwind", "JavaScript"],
      repo: "https://github.com/KeylorCalderon/final-question-interactive-text-game",
      demo: "https://final-question-interactive-text-gam.vercel.app/",
      images: [finalQuestionImg]
    },
    {
      id: 2,
      title: "Kuarc",
      description: "Aplicación web que permite a las empresas medir y analizar su impacto ambiental utilizando los Objetivos de Desarrollo Sostenible (ODS). Incluye un módulo interactivo de visualización geoespacial desarrollado con Google Maps API, que facilita el análisis basado en datos y la generación automatizada de reportes.",
      tech: ["Angular", ".NET", "C#", "Google Maps API", "PostgreSQL", "Neo4j"],
      repo: "",
      demo: "https://kuarctech.com/kuarc/",
      images: [kuarctechImg]
    },
    {
      id: 3,
      title: "ComeTec",
      description: "Plataforma institucional full-stack creada para fortalecer las habilidades matemáticas de estudiantes de primaria y secundaria mediante desafíos interactivos. Ayuda a desarrollar el pensamiento crítico y la resolución de problemas, mientras otorga certificados digitales de participación como reconocimiento a sus logros.",
      tech: ["PHP", "HTML", "MySQL"],
      repo: "https://github.com/KeylorCalderon/ComeTec",
      demo: "https://www.cometec.cr/",
      images: [cometecImg]
    },
    {
      id: 4,
      title: "Il Consigliere",
      description: "Plataforma institucional full-stack para la gestión de consejos, diseñada para optimizar la administración de sesiones, el registro seguro de usuarios, la organización de agendas y los flujos de votación.",
      tech: ["React", "React Router", "Axios", "Bootstrap", "Node.js", "Express.js", "Sequelize ORM", "PostgreSQL"],
      repo: "https://github.com/KeylorCalderon/Il-Consigliere",
      demo: "",
      images: [consigliereImg1, consigliereImg2, consigliereImg3, consigliereImg4, consigliereImg5, consigliereImg6, consigliereImg7]
    },
    {
      id: 5,
      title: "Eats Delivery App",
      description: "Aplicación nativa de entrega de comida para Android desarrollada en Java, diseñada como una plataforma real de pedidos en línea con funcionalidades para clientes y administradores.",
      tech: ["Java", "Android", "Gradle", "SQLite"],
      repo: "https://github.com/KeylorCalderon/Eats-Delivery-app",
      demo: "",
      images: [eatImg0, eatImg1, eatImg2, eatImg3, eatImg4, eatImg5, eatImg6, eatImg7, eatImg8, eatImg9, eatImg10]
    },
    {
      id: 6,
      title: "Host-Inn — Sistema Hotelero",
      description: "Sistema full-stack de reservas hoteleras con control de acceso basado en roles, flujos de gestión de reservas y lógica de negocio respaldada por base de datos mediante procedimientos almacenados.",
      tech: ["HTML", "CSS", "Handlebars.js", "Node.js", "Express.js", "MySQL", "Stored Procedures"],
      repo: "https://github.com/KeylorCalderon/host-inn-hotel-system",
      demo: "",
      images: [hostImg0, hostImg1, hostImg2, hostImg3, hostImg4, hostImg5]
    },
    {
      id: 7,
      title: "Keysforgeeks",
      description: "Aplicación web full-stack de comercio electrónico para la venta de claves de videojuegos, con gestión de roles de usuario, carrito de compras, administración de pedidos, manejo de descuentos e integración externa de facturación mediante servicios SOAP.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "SOAP", "MySQL"],
      repo: "https://github.com/KeylorCalderon/Keysforgeeks",
      demo: "",
      images: [keyImg0, keyImg1, keyImg2, keyImg3, keyImg4, keyImg5, keyImg6]
    }
  ]
};

export const aboutMe = {
    info: `I am a full-stack developer living in Costa Rica.
    I enjoy solving problems and transforming design concepts into flawless websites.
    I am interested in cybersecurity, automation, and DevOps.
    When I am not coding, I am an avid reader!`
};