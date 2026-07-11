import authentication from '@/public/images/authentication.png';
import csc from '@/public/images/csc.png';
import flameGrill from '@/public/images/flame-grill.png';
import ipTracker from '@/public/images/ip-tracker.png';
import orbita from '@/public/images/orbita.png';
import ssfight from '@/public/images/ssfight.png';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  problem: string;
  result: string;
  tech: string[];

  // Site
  link?: string;

  // Mobile
  playStore?: string;
  appStore?: string;

  // Repositórios
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

export interface Skill {
  category: string;
  items: string[];
  iconName: 'LayoutGrid' | 'Cpu' | 'Database' | 'TrendingUp';
}

export interface SkillGroup {
  father: boolean;
  childrens: Skill[];
}

export interface Service {
  title: string;
  description: string;
  iconName: 'Code2' | 'Server' | 'CloudCog' | 'MonitorSmartphone' | 'Workflow' | 'Wrench';
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  desc: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SS Fight',
    category: 'Aplicativo Mobile',
    image: ssfight,
    description:
      'Aplicativo completo para gestão de academias de artes marciais, disponível na Play Store.',
    problem:
      'Centralizar o gerenciamento de alunos, planos, presenças, graduações, pagamentos e comunicação em uma única plataforma.',
    result:
      'Aplicação completa composta por App Mobile, API em NestJS e painel administrativo, utilizada em ambiente real.',
    tech: [
      'React Native',
      'Expo',
      'NativeWind',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'React Query',
      'TypeScript',
    ],
    link: 'https://ssfight.com.br/',
    playStore:
      'https://play.google.com/store/apps/details?id=com.ssfight.app&pcampaignid=web_share',
    githubFrontend: '',
    githubBackend: '',
  },

  {
    id: 2,
    title: 'Órbita',
    category: 'Sistema Financeiro',
    image: orbita,
    description:
      'Sistema para gerenciamento financeiro pessoal com dashboard, categorias, gráficos e controle de receitas e despesas.',
    problem:
      'Facilitar o controle financeiro através de uma plataforma moderna, intuitiva e organizada.',
    result:
      'Projeto Full Stack desenvolvido com arquitetura escalável, autenticação, dashboard e gerenciamento financeiro.',
    tech: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Chart.js'],
    link: '',
    github: '',
  },

  {
    id: 3,
    title: 'Sistema de Autenticação',
    category: 'Backend',
    image: authentication,
    description:
      'Template completo de autenticação com cadastro, login, recuperação de senha, confirmação de conta e envio de e-mails.',
    problem:
      'Criar uma base reutilizável para acelerar novos projetos com autenticação segura.',
    result:
      'Sistema reutilizável com autenticação JWT, recuperação de senha, confirmação por e-mail e arquitetura pronta para produção.',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Prisma',
      'JWT',
      'Nodemailer',
      'TypeScript',
    ],
    link: 'https://auth.johndevstudio.com/',
    githubFrontend: 'https://github.com/setDevJohn/authenticator',
    githubBackend: 'https://github.com/setDevJohn/authenticator-api',
  },

  {
    id: 4,
    title: 'Flame Grill',
    category: 'Cardápio Digital',
    image: flameGrill,
    description:
      'Cardápio digital para restaurantes com gerenciamento de pedidos e experiência otimizada para dispositivos móveis.',
    problem:
      'Digitalizar o atendimento e facilitar o processo de pedidos em restaurantes.',
    result:
      'Interface moderna, responsiva e otimizada para navegação rápida utilizando Next.js.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'React Hook Form',
      'Zod',
    ],
    link: 'https://flamegrill.johndevstudio.com/',
    github: 'https://github.com/setDevJohn/flame-grill',
  },

  {
    id: 5,
    title: 'CSC Viagens',
    category: 'Website Institucional',
    image: csc,
    description:
      'Website institucional moderno para agência de viagens com apresentação de destinos e formulário de contato.',
    problem:
      'Criar uma presença digital moderna para divulgação dos serviços da empresa.',
    result:
      'Site responsivo desenvolvido com foco em performance, SEO e experiência do usuário.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Nodemailer'],
    link: 'https://csc-viagens.vercel.app/',
    github: '',
  },

  {
    id: 6,
    title: 'IP Address Tracker',
    category: 'API Integration',
    image: ipTracker,
    description:
      'Aplicação que localiza um endereço IP ou domínio exibindo informações geográficas em mapa interativo.',
    problem:
      'Permitir visualizar rapidamente a localização de IPs utilizando serviços externos.',
    result:
      'Integração com API de geolocalização e renderização dinâmica utilizando Leaflet.',
    tech: ['React', 'TypeScript', 'Leaflet', 'REST API', 'SCSS'],
    link: 'https://ip-address-tracker-jhonyfreitasdev.vercel.app/',
    github: 'https://github.com/setDevJohn/ip-address-tracker',
  },
];

export const SKILLS: (Skill | SkillGroup)[] = [
  {
    father: true,
    childrens: [
      {
        category: 'Linguagens',
        items: ['JavaScript (ES6+)', 'TypeScript', 'SQL'],
        iconName: 'LayoutGrid',
      },
      {
        category: 'Business & UX',
        items: [
          'UX/UI Design',
          'SEO Técnico',
          'Optimização de Performance',
          'Agile (Scrum/Kanban)',
        ],
        iconName: 'TrendingUp',
      },
    ],
  },
  {
    category: 'Frontend',
    items: [
      'React',
      'React Native',
      'Next.js',
      'Tailwind CSS',
      'Sass',
      'Shadcn/ui',
      'React Hook Form',
      'Zod',
      'Tanstack Query',
      'SWR',
      'Zustand',
      'Context API',
      'Redux Toolkit',
      'React Testing Library',
    ],
    iconName: 'LayoutGrid',
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'RESTful APIs',
      'Swagger/OpenAPI',
      'JWT Authentication',
      'Prisma',
      'Mongoose',
      'RabbitMQ',
      'gRPC',
      'Contract-Driven Development',
      'Jest',
    ],
    iconName: 'Cpu',
  },
  {
    category: 'Database & DevOps',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Docker',
      'Docker Swarm',
      'Kubernetes',
      'CI/CD',
      'Git',
      'PM2',
      'Nginx',
      'Apache2',
      'AWS (EC2, S3)',
      'DigitalOcean',
      'Vercel',
      'Render',
    ],
    iconName: 'Database',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento Full Stack',
    description:
      'Criação de aplicações web modernas, escaláveis e de alta performance utilizando React, Next.js, Node.js, NestJS, TypeScript e bancos de dados SQL e NoSQL.',
    iconName: 'Code2',
  },
  {
    title: 'Arquitetura Backend & APIs',
    description:
      'Desenvolvimento de APIs REST, microsserviços e integrações com RabbitMQ, gRPC, Prisma, PostgreSQL e MongoDB, seguindo boas práticas de arquitetura.',
    iconName: 'Server',
  },
  {
    title: 'DevOps & Infraestrutura',
    description:
      'Conteinerização, deploy automatizado e gerenciamento de ambientes utilizando Docker, Docker Swarm, Kubernetes, CI/CD e servidores Linux.',
    iconName: 'CloudCog',
  },
  {
    title: 'Interfaces Modernas',
    description:
      'Construção de interfaces responsivas, acessíveis e performáticas com React, Next.js, TypeScript, Tailwind CSS e Shadcn/UI.',
    iconName: 'MonitorSmartphone',
  },
  {
    title: 'Integrações & Automações',
    description:
      'Integração entre sistemas, APIs externas, Webhooks e automação de processos para aumentar produtividade e reduzir tarefas manuais.',
    iconName: 'Workflow',
  },
  {
    title: 'Evolução de Sistemas',
    description:
      'Correção de bugs, refatoração, otimização de performance, manutenção e implementação de novas funcionalidades em sistemas corporativos.',
    iconName: 'Wrench',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    year: 'Abr 2026 - Presente',
    role: 'Desenvolvedor FullStack',
    company: 'Access Security • Barueri, SP',
    desc: 'Evolução e manutenção de sistemas corporativos utilizando NestJS e MongoDB. Desenvolvimento de automações e novas funcionalidades para auditoria e otimização de processos. Implementação de microsserviços e integrações com RabbitMQ e gRPC. Deploy, CI/CD e gerenciamento de infraestrutura com Docker, Kubernetes e Docker Swarm.',
  },
  {
    year: 'Out 2025 - Dez 2025',
    role: 'Desenvolvedor Frontend',
    company: 'TáPagu • São Paulo, SP',
    desc: 'Desenvolvimento de interfaces e componentes reutilizáveis com Next.js e TypeScript. Integração com APIs internas e externas, garantindo estabilidade e excelente experiência do usuário. Contribuição para padronização de código, melhorias de performance e evolução do Design System.',
  },
  {
    year: 'Mar 2024 - Out 2025',
    role: 'Desenvolvedor FullStack',
    company: 'Multifocus Sistemas e Aplicativos Ltda • Jandira, SP',
    desc: 'Criação e evolução de painel administrativo e aplicativo de e-commerce utilizando React, Node.js e Express. Integração de sistemas, automação de processos e otimização de desempenho das aplicações.',
  },
  {
    year: 'Fev 2022 - Dez 2023',
    role: 'Desenvolvedor Front-End',
    company: 'Freelancer • São Paulo, SP',
    desc: 'Desenvolvimento de websites personalizados com foco em responsividade, performance e experiência do usuário. Criação de interfaces modernas e integração com APIs REST.',
  },
];

export const MENU_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
] as const;

export type TabId = (typeof MENU_ITEMS)[number]['id'];
