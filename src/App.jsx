import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  BrainCircuit,
  Code2,
  Database,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  Network,
  NotebookTabs,
  Sparkles,
} from 'lucide-react';
import heroImage from './assets/research-hero.png';

const profile = {
  name: '黄嘉颖',
  school: '江南大学 · 信息与计算科学',
  email: '3414095673@qq.com',
  location: '江苏无锡',
};

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '科研项目', href: '#projects' },
  { label: '技术栈', href: '#stack' },
  { label: '获奖经历', href: '#awards' },
  { label: '联系我', href: '#contact' },
];

const stats = [
  { value: '6/114', label: '专业排名' },
  { value: '省级', label: '大创项目' },
  { value: 'AI for Science', label: '研究兴趣' },
];

const projects = [
  {
    title: '面向酶稳定性预测的融合大模型编码算法研究',
    tag: '省级大创 / AI for Science',
    description:
      '围绕酶稳定性预测任务，探索蛋白质序列大模型表征、结构信息与深度学习模型的融合编码方法。',
    points: ['参与数据清洗与特征构建', '推进模型训练与实验记录', '完成结果对比与分析'],
  },
  {
    title: '数学建模竞赛训练与论文式表达',
    tag: 'Modeling / Research Practice',
    description:
      '多次参加数学建模类竞赛，训练问题抽象、模型构建、数据分析、文献检索和论文式表达能力。',
    points: ['问题抽象与方案设计', '数据分析与程序实现', '团队协作与快速迭代'],
  },
  {
    title: '机器学习与大模型应用学习路线',
    tag: 'ML / LLM Application',
    description:
      '系统学习机器学习、深度学习与大模型应用基础，关注 RAG、Agent、Vibe Coding 等技术范式。',
    points: ['机器学习与深度学习基础', 'RAG 与 Agent 入门实践', '科研问题中的 AI 应用探索'],
  },
];

const stackGroups = [
  {
    icon: BrainCircuit,
    title: '人工智能方向',
    items: ['机器学习', '深度学习', '大模型应用', 'RAG', 'Agent'],
  },
  {
    icon: Database,
    title: '数据与科研能力',
    items: ['数据清洗', '数据预处理', '实验记录', '结果可视化', '文献阅读'],
  },
  {
    icon: Code2,
    title: '编程与工具',
    items: ['Python', '数据库基础', 'Vibe Coding', 'React', 'Tailwind CSS'],
  },
];

const awards = [
  '江南大学一等综合奖学金',
  '校级优秀学生干部',
  '无锡市马拉松优秀志愿者',
  '校级排球比赛团队第三名',
  '校级啦啦操比赛第五名',
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/80 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-white">
            <Sparkles size={17} />
          </span>
          {profile.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-porcelain hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink transition hover:border-cyan hover:text-cyan"
        >
          <Mail size={16} />
          联系
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="AI research workspace"
          className="h-full w-full object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-porcelain to-transparent" />
      </div>
      <div className="section-shell min-h-[calc(100vh-4rem)] py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="section-kicker">AI Learning & Research Portfolio</p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="block text-navy">AI for Science 学习与科研主页</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            江南大学信息与计算科学专业本科在读，关注人工智能、机器学习、计算生物学与数据智能方向。
            当前希望在 AI for Science、数据智能或具身智能相关方向持续积累科研训练。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
            >
              查看科研项目
              <ArrowUpRight size={17} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:border-cyan hover:text-cyan"
            >
              了解个人经历
            </a>
          </div>
        </div>
        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-line bg-white/55 px-4 py-3 backdrop-blur">
              <div className="text-2xl font-bold text-ink">{item.value}</div>
              <div className="mt-1 text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-porcelain py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">关于我</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            我具备较扎实的数学与计算基础，重视从理论学习到实验验证的完整训练。
            当前主要关注人工智能、机器学习与计算生物学交叉方向，希望进一步提升科研问题凝练、
            模型设计和论文写作能力。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['教育背景', '江南大学信息与计算科学专业本科在读，专业排名 6/114，入选至善生、伟长计划相关培养。', GraduationCap],
            ['科研兴趣', '关注 AI for Science、数据智能、具身智能、世界模型和多模态学习等前沿方向。', Microscope],
            ['学习路径', '系统学习机器学习、深度学习与大模型应用基础，持续复现实验流程并根据反馈修正方案。', NotebookTabs],
            ['综合素质', '具备学生工作、志愿服务和团队竞赛经历，重视沟通协作、责任意识与执行力。', Network],
          ].map(([title, text, Icon]) => (
            <article key={title} className="rounded-md border border-line bg-white p-6 shadow-soft">
              <Icon className="text-cyan" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Research Projects</p>
          <h2 className="section-title">科研项目</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            以省级大创项目为核心，逐步积累文献阅读、问题抽象、实验设计、数据处理与结果分析能力。
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-md border border-line bg-porcelain p-6 transition hover:-translate-y-1 hover:border-cyan hover:bg-white hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-cyan">
                  {project.tag}
                </span>
                <BookOpenCheck size={21} className="text-navy" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-muted">{project.description}</p>
              <ul className="mt-5 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="glass-line bg-porcelain py-24">
      <div className="section-shell">
        <p className="section-kicker">Technical Stack</p>
        <h2 className="section-title">技术栈</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stackGroups.map(({ icon: Icon, title, items }) => (
            <article key={title} className="rounded-md border border-line bg-white p-6 shadow-soft">
              <Icon size={25} className="text-cyan" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-porcelain px-3 py-2 text-sm font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="bg-white py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-kicker">Awards</p>
          <h2 className="section-title">获奖经历</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            奖励与实践经历体现了学业基础、组织协调能力、团队协作意识和持续投入的执行力。
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {awards.map((award, index) => (
            <div key={award} className="flex items-center gap-4 py-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-porcelain text-cyan">
                <Award size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-muted">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{award}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">联系我</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            欢迎交流 AI 学习路线、AI for Science、机器学习、计算生物学和科研项目实践。
          </p>
        </div>
        <div className="grid gap-3">
          {[
            [Mail, profile.email, `mailto:${profile.email}`],
            [Github, 'GitHub / 个人主页待补充', '#home'],
            [MapPin, profile.location, '#home'],
          ].map(([Icon, text, href]) => (
            <a
              key={text}
              href={href}
              className="flex items-center justify-between rounded-md border border-white/15 bg-white/5 px-5 py-4 text-slate-100 transition hover:border-cyan hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Icon size={19} className="text-cyan" />
                {text}
              </span>
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
