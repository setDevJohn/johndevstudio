export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  problem: string;
  result: string;
  tech: string[];
  link: string;
  github: string;
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
    title: 'QuantumSaaS Dashboard',
    category: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    description: 'Plataforma de análise de dados em tempo real com processamento de IA.',
    problem:
      'Empresas tinham dificuldade em visualizar gargalos operacionais em grandes fluxos de dados.',
    result:
      'Redução de 30% no tempo de resposta operacional para os primeiros 50 clientes corporativos.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'EcoTrade Marketplace',
    category: 'Sistemas Web',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'E-commerce B2B focado em créditos de carbono e sustentabilidade.',
    problem: 'Falta de transparência e rastreabilidade no mercado de ativos ambientais.',
    result:
      'Processamento de mais de $2M em transações no primeiro semestre com 100% de integridade.',
    tech: ['React', 'Prisma', 'Tailwind', 'Docker'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Nexus High-Ticket LP',
    category: 'Landing Pages',
    image:
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800',
    description: 'Landing page de alta conversão para consultoria financeira premium.',
    problem: 'Baixa taxa de conversão em leads qualificados no tráfego pago.',
    result:
      'Aumento de 45% na taxa de captura de leads ultra-qualificados (High Ticket).',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    link: '#',
    github: '#',
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
