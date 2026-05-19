import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  Network,
  Sparkles,
  Target,
} from 'lucide-react';
import heroImage from './assets/research-hero.png';

const profile = {
  name: '黄嘉颖',
  role: 'AI for Science 本科科研成长型主页',
  school: '江南大学',
  major: '信息与计算科学',
  grade: '本科二年级',
  email: '3414095673@qq.com',
  location: '江苏无锡',
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Honors', href: '#honors' },
  { label: 'Contact', href: '#contact' },
];

const heroTags = ['AI for Science', 'Machine Learning', 'Large Models', 'Data Intelligence'];

const profileFacts = [
  ['School', '江南大学'],
  ['Major', '信息与计算科学'],
  ['Rank', '6 / 114'],
  ['Track', '至善生 · 伟长班'],
  ['Project', '省级大创'],
  ['Focus', '酶稳定性预测'],
];

const academicMetrics = [
  { value: '6/114', label: '专业排名', note: '扎实的数学与计算基础' },
  { value: '省级', label: '大学生创新创业训练计划', note: 'AI for Science 项目训练' },
  { value: '至善生', label: '拔尖培养', note: '持续学术成长路径' },
  { value: '伟长班', label: '荣誉培养', note: '重视科研素养与综合能力' },
  { value: '一等', label: '综合奖学金', note: '稳定学习投入与执行力' },
];

const researchKeywords = [
  'Protein Stability Prediction',
  'Large Model Encoding',
  'Data Cleaning',
  'Feature Engineering',
  'Machine Learning',
  'AI for Science',
];

const researchSteps = [
  'Protein / Enzyme Data',
  'Feature Encoding',
  'Data Cleaning',
  'Model Training',
  'Stability Prediction',
];

const skillGroups = [
  {
    icon: BrainCircuit,
    title: 'AI 学习方向',
    items: ['机器学习', '深度学习', '大模型应用', 'RAG', 'Agent', '具身智能', '世界模型'],
  },
  {
    icon: Database,
    title: '数据与实验能力',
    items: ['数据清洗', '数据预处理', '特征构建', '实验记录', '结果可视化', '文献阅读'],
  },
  {
    icon: Code2,
    title: '编程与工具',
    items: ['Python', '数据库基础', '基础建模', 'Vibe Coding', 'React', 'Tailwind CSS'],
  },
];

const timeline = [
  {
    time: '数学与计算基础',
    title: '打牢信息与计算科学专业基础',
    text: '系统学习数学分析、高等代数、概率统计、运筹优化、程序设计和数据库基础。',
  },
  {
    time: 'AI 入门',
    title: '从机器学习到大模型应用',
    text: '持续学习机器学习、深度学习、大模型应用、RAG 与 Agent 等技术范式。',
  },
  {
    time: '科研训练',
    title: '进入 AI for Science 项目实践',
    text: '在省级大创项目中参与数据清洗、特征构建、模型训练、实验记录与结果分析。',
  },
  {
    time: '持续探索',
    title: '面向交叉研究继续积累',
    text: '关注计算生物学、数据智能、具身智能、世界模型和多模态学习等方向。',
  },
];

const honors = [
  '江南大学一等综合奖学金',
  '校级优秀学生干部',
  '无锡市马拉松优秀志愿者',
  '校级排球比赛团队第三名',
  '校级啦啦操比赛第五名',
];

const practices = [
  {
    title: '数学建模实践',
    text: '多次参加数学建模类竞赛，积累问题抽象、模型构建、数据分析、文献检索与论文式表达经验。',
  },
  {
    title: '学生工作与协作',
    text: '曾获校级优秀学生干部，具备组织协调、沟通协作和责任意识。',
  },
  {
    title: '志愿服务与综合发展',
    text: '累计志愿服务约 30 小时，获无锡市马拉松优秀志愿者称号，也参与排球、啦啦操等团队活动。',
  },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2 font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white transition group-hover:-rotate-6">
            <Sparkles size={17} />
          </span>
          <span>{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="button button-ghost">
          <Mail size={16} />
          联系
        </a>
      </nav>
    </header>
  );
}

function StudyCat() {
  return (
    <svg
      className="study-cat"
      viewBox="0 0 220 170"
      role="img"
      aria-label="原创线稿小猫抱着电脑插画"
    >
      <path className="cat-fill" d="M62 70 76 47l16 20c11-4 24-4 35 0l16-20 14 23c11 10 17 25 17 43 0 34-26 49-59 49S56 147 56 113c0-18 6-33 6-43Z" />
      <path d="M62 70 76 47l16 20c11-4 24-4 35 0l16-20 14 23c11 10 17 25 17 43 0 34-26 49-59 49S56 147 56 113c0-18 6-33 6-43Z" />
      <path d="M90 103c0 5-3 9-7 9s-7-4-7-9 3-9 7-9 7 4 7 9ZM145 103c0 5-3 9-7 9s-7-4-7-9 3-9 7-9 7 4 7 9Z" />
      <path d="M107 113h10l-5 6-5-6ZM98 127c6 5 22 5 28 0" />
      <path d="M33 128h154c6 0 10 4 10 10v14H23v-14c0-6 4-10 10-10Z" className="laptop-fill" />
      <path d="M33 128h154c6 0 10 4 10 10v14H23v-14c0-6 4-10 10-10Z" />
      <path d="M91 142h38M42 58l-11-7M180 58l11-7M41 86H25M179 86h16" />
      <path className="cat-accent" d="M37 35h19M47 25v19M174 31l8 8 8-8M172 142l14 6 13-6" />
      <text x="92" y="84" className="cat-text">AI</text>
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img src={heroImage} alt="AI research workspace" />
      </div>
      <div className="section-shell grid min-h-screen items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <p className="section-kicker">Online Academic Profile</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-3 block text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              江南大学信息与计算科学本科生
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-slate-700">
            Exploring AI for Science, from Data to Models.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            关注人工智能、机器学习、大模型应用与计算生物学交叉方向。希望在真实科研训练中持续提升问题抽象、模型设计、实验迭代与学术表达能力。
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="tag tag-hero">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="button button-primary">
              查看科研项目
              <ArrowRight size={17} />
            </a>
            <a href="#education" className="button button-secondary">
              Academic Profile
            </a>
          </div>
        </div>

        <div className="relative reveal reveal-delay">
          <div className="profile-card">
            <div className="absolute -right-4 -top-8 hidden sm:block">
              <StudyCat />
            </div>
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                Research Profile
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink">{profile.role}</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                以省级大创项目为核心，将数学与计算基础、数据处理能力和 AI 应用学习连接到 AI for Science 的科研实践中。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {profileFacts.map(([label, value]) => (
                  <div key={label} className="mini-fact">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-band">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2 className="section-title">清晰、真实、持续生长的科研起点</h2>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-tile">
                <Microscope size={22} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink">个人简介</h3>
                <p className="mt-4 leading-8 text-muted">
                  我是江南大学信息与计算科学专业本科生，具备较扎实的数学与计算基础，重视从理论学习到实验验证的完整训练。当前主要关注人工智能、机器学习与计算生物学交叉方向，希望在研究生阶段进一步提升科研问题凝练、模型设计与论文写作能力。
                </p>
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="panel compact-panel">
              <Target size={22} className="text-cyan" />
              <div>
                <h3>研究兴趣</h3>
                <p>AI for Science、数据智能、具身智能、世界模型、多模态学习。</p>
              </div>
            </div>
            <div className="panel compact-panel">
              <Network size={22} className="text-cyan" />
              <div>
                <h3>成长特质</h3>
                <p>主动阅读技术资料、复现实验流程，并根据实验反馈持续修正方案。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-band section-grid-bg">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic Profile</h2>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="panel p-7">
            <div className="flex items-center gap-4">
              <span className="icon-tile">
                <GraduationCap size={24} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-ink">江南大学</h3>
                <p className="mt-1 text-muted">信息与计算科学 · 本科二年级</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="edu-line">
                <span>专业排名</span>
                <strong>6 / 114</strong>
              </div>
              <div className="edu-line">
                <span>培养路径</span>
                <strong>至善生 · 伟长班</strong>
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academicMetrics.map((item) => (
              <article key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section-band">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">Research</p>
          <h2 className="section-title">Featured Research Project</h2>
        </div>
        <article className="research-card mt-9">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="project-badge">省级大学生创新创业训练计划项目</span>
              <h3 className="mt-5 text-3xl font-bold leading-tight text-ink">
                面向酶稳定性预测的融合大模型编码算法研究
              </h3>
              <p className="mt-5 leading-8 text-muted">
                项目围绕酶稳定性预测任务，探索蛋白质序列大模型表征、结构信息与深度学习模型的融合编码方法。本人参与数据清洗、特征构建、模型训练、实验记录与结果对比分析，在项目中逐步形成从文献阅读、问题抽象、实验设计到结果分析的科研意识。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {researchKeywords.map((keyword) => (
                  <span key={keyword} className="tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="research-detail-grid">
              <div className="detail-card">
                <h4>研究背景</h4>
                <p>蛋白质/酶稳定性预测是 AI for Science 中具有实际意义的交叉问题，需要结合序列表示、结构信息与建模方法。</p>
              </div>
              <div className="detail-card">
                <h4>个人贡献</h4>
                <p>参与数据清洗、特征构建、模型训练、实验记录和结果对比分析，承担持续推进与整理工作。</p>
              </div>
              <div className="detail-card">
                <h4>当前进展</h4>
                <p>围绕大模型编码能力与稳定性预测任务进行初步应用探索，持续积累实验迭代经验。</p>
              </div>
              <div className="detail-card">
                <h4>科研收获</h4>
                <p>训练了从文献阅读到实验验证的完整意识，为后续学术研究打下可延展的基础。</p>
              </div>
            </div>
          </div>
          <div className="flow-wrap">
            {researchSteps.map((step, index) => (
              <div key={step} className="flow-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-band section-grid-bg">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">学习能力与技术栈</h2>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, items }) => (
            <article key={title} className="panel skill-card">
              <Icon size={24} className="text-cyan" />
              <h3>{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="tag tag-soft">
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

function GrowthAndPractice() {
  return (
    <section className="section-band">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.88fr]">
        <div>
          <div className="section-heading">
            <p className="section-kicker">Growth Timeline</p>
            <h2 className="section-title">AI 学习与科研成长路径</h2>
          </div>
          <div className="timeline mt-8">
            {timeline.map((item) => (
              <article key={item.title} className="timeline-item">
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className="section-heading">
            <p className="section-kicker">Practice</p>
            <h2 className="section-title">实践经历</h2>
          </div>
          <div className="mt-8 grid gap-4">
            {practices.map((item) => (
              <article key={item.title} className="panel practice-card">
                <BookOpen size={20} className="text-cyan" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Honors() {
  return (
    <section id="honors" className="section-band section-grid-bg">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">Honors</p>
          <h2 className="section-title">荣誉与综合素质</h2>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {honors.map((honor, index) => (
            <article key={honor} className="honor-card">
              <Award size={20} />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{honor}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">欢迎交流科研训练与 AI 学习</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            欢迎交流 AI for Science、机器学习、计算生物学、RAG / Agent 学习路线，以及本科阶段科研项目实践。
          </p>
        </div>
        <div className="grid gap-3">
          {[
            [Mail, profile.email, `mailto:${profile.email}`],
            [Github, 'GitHub / 个人主页待补充', '#home'],
            [MapPin, profile.location, '#home'],
          ].map(([Icon, text, href]) => (
            <a key={text} href={href} className="contact-link">
              <span>
                <Icon size={19} />
                {text}
              </span>
              <ArrowRight size={17} />
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
        <Education />
        <Research />
        <Skills />
        <GrowthAndPractice />
        <Honors />
        <Contact />
      </main>
    </>
  );
}
