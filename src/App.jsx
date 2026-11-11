import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Download, Code2, Workflow, ShieldCheck, BrainCircuit, Terminal,
  Database, Cloud, Users, Layers, ExternalLink, Sun, Moon, CheckCircle2
} from 'lucide-react'

const resumeUrl = `${import.meta.env.BASE_URL}Alvin-Paderes-CV.pdf`

const experience = [
  {
    role: 'Senior QA Automation Engineer',
    company: 'Nelnet Philippines Inc.',
    period: 'Mar 2023 — Present',
    location: 'Makati City, Philippines',
    points: [
      'Executed C# tests for microservices, enhancing performance through Web Application Factory.',
      'Developed data-driven C# tests, boosting test coverage and adaptability.',
      'Led AI initiatives with Windsurf and Copilot AI workflows to optimize manual processes.'
    ],
    tags: ['C#', '.NET', 'Microservices', 'Web Application Factory', 'AI Workflows']
  },
  {
    role: 'Test Engineering Associate Manager',
    company: 'Accenture Inc.',
    period: 'Sep 2021 — Mar 2023',
    location: 'Taguig City, Philippines',
    points: [
      'Introduced Cypress automation and Cucumber Gherkin, improving functional QA processes, test coverage, and reducing manual testing time.',
      'Developed and maintained Puppeteer automation scripts to improve testing efficiency.',
      'Managed a team of two associates, supporting collaboration and productivity through regular feedback.'
    ],
    tags: ['Cypress', 'Cucumber', 'Gherkin', 'Puppeteer', 'Team Leadership']
  },
  {
    role: 'Senior Quality Assurance Engineer',
    company: 'Infor PSSC Inc.',
    period: 'Sep 2020 — Sep 2021',
    location: 'Taguig City, Philippines',
    points: [
      'Stabilized over 800 test cases for nightly execution, achieving a 93% passing rate and saving two man-days.',
      'Maintained Build and Release Pipelines on Azure DevOps.',
      'Conducted code maintenance and peer reviews in Azure Git.'
    ],
    tags: ['Azure DevOps', 'Azure Git', 'Test Stabilization', 'CI/CD']
  },
  {
    role: 'QA Engineer',
    company: 'Zyllem',
    period: 'Apr 2019 — Jul 2020',
    location: 'Singapore',
    points: [
      'Developed automated tests for web, API, and mobile using Katalon with Selenium and Cucumber.',
      'Used Jira, Jenkins, and Bitbucket to manage project workflows and track progress.'
    ],
    tags: ['Katalon', 'Selenium', 'Cucumber', 'Jira', 'Jenkins']
  },
  {
    role: 'Senior Software Engineering Analyst',
    company: 'Accenture Inc.',
    period: 'Aug 2015 — Apr 2019',
    location: 'Taguig City, Philippines',
    points: [
      'Led an Offshore DevOps team within the Scrum framework to optimize project delivery.',
      'Developed a C#.NET test automation framework, increasing testing efficiency.',
      'Executed build pipelines in Azure DevOps for Continuous Integration.',
      'Created an in-house tool to streamline manual processes and enhance productivity.'
    ],
    tags: ['C# .NET', 'Azure DevOps', 'DevOps', 'Scrum']
  },
  {
    role: 'MIS Staff — Application Developer',
    company: 'First Sumiden Circuits Inc.',
    period: 'Jul 2012 — Aug 2015',
    location: 'Cabuyao City, Philippines',
    points: [
      'Developed and maintained a .NET application for SAP integration, enabling accurate encoding of finished components per process.',
      'Launched a biometric fingerprint-based canteen system to streamline cashless transactions.'
    ],
    tags: ['.NET', 'SAP Integration', 'Application Development']
  }
]

const skillGroups = [
  { icon: Code2, title: 'Development', skills: ['C# .NET', 'ASP.NET', 'SQL', 'PowerShell'] },
  { icon: ShieldCheck, title: 'Test Automation', skills: ['Selenium', 'Cypress', 'Puppeteer', 'Katalon', 'Cucumber / Gherkin', 'Web Application Factory'] },
  { icon: Workflow, title: 'Quality Engineering', skills: ['REST API Testing', 'Microservices Testing', 'Functional Testing', 'Data-Driven Testing', 'Automation Frameworks'] },
  { icon: Cloud, title: 'DevOps & Tools', skills: ['Azure DevOps', 'Azure Git', 'Jenkins', 'Bitbucket', 'Jira'] },
  { icon: BrainCircuit, title: 'AI-Assisted Workflows', skills: ['GitHub Copilot', 'Windsurf', 'AI Workflows'] },
  { icon: Users, title: 'Ways of Working', skills: ['Scrum', 'Agile', 'CI/CD', 'Team Management'] }
]

const projects = [
  {
    number: '01',
    title: 'C# Test Automation Framework',
    description: 'A portfolio project area for demonstrating maintainable automated testing patterns and reusable .NET test components.',
    stack: ['C#', '.NET', 'Test Automation'],
    status: 'Repository link to be added',
    icon: Terminal
  },
  {
    number: '02',
    title: 'Microservices Testing',
    description: 'A showcase area for tests around service-level behavior and Web Application Factory-based testing.',
    stack: ['C#', 'Web Application Factory', 'Microservices'],
    status: 'Repository link to be added',
    icon: Layers
  },
  {
    number: '03',
    title: 'Browser Automation',
    description: 'A showcase area for browser automation approaches using Cypress, Puppeteer, Selenium, and BDD practices.',
    stack: ['Cypress', 'Puppeteer', 'Selenium', 'Gherkin'],
    status: 'Repository link to be added',
    icon: Workflow
  },
  {
    number: '04',
    title: 'AI-Assisted QA Workflows',
    description: 'A showcase area for responsible AI-assisted workflows that help streamline QA and development tasks.',
    stack: ['Windsurf', 'GitHub Copilot', 'AI Workflows'],
    status: 'Repository link to be added',
    icon: BrainCircuit
  }
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className={light ? 'site light' : 'site'}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AP</span><span>ALVIN PADERES<span className="brand-sub">QA AUTOMATION · SDET</span></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" aria-label="Toggle color theme" onClick={() => setLight(!light)}>{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
          <a className="header-cta" href={resumeUrl} download>Resume <Download size={15}/></a>
          <button className="icon-button menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="availability"><span className="availability-dot"/> SOFTWARE QUALITY · TEST AUTOMATION</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>Engineering quality<br/><span>through automation</span><br/>and intelligent workflows.</motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .28, duration: .6 }}>I’m Alvin Paderes, a Senior Software Development Engineer in Test focused on scalable test automation, software quality engineering, and AI-assisted workflows.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href={resumeUrl} download>Download CV <Download size={16}/></a>
            </motion.div>
            <motion.div className="social-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
              <a href="https://ph.linkedin.com/in/alvinpaderes" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              <a href="mailto:alvin.paderes@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={13}/></a>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .18 }}>
            <div className="visual-top"><span>QUALITY ENGINEERING</span><span className="live-indicator">● SYSTEMATIC</span></div>
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>quality-first.cs</span><span>•••</span></div>
              <div className="code-lines">
                <div><b>01</b><span className="code-purple">public class</span> <span className="code-blue">QualityEngineer</span></div>
                <div><b>02</b>{'{'}</div>
                <div><b>03</b>  <span className="code-purple">public void</span> <span className="code-yellow">BuildConfidence</span>()</div>
                <div><b>04</b>  {'{'}</div>
                <div><b>05</b>    <span className="code-green">Automate</span>(repetitiveWork);</div>
                <div><b>06</b>    <span className="code-green">Validate</span>(everyChange);</div>
                <div><b>07</b>    <span className="code-green">Improve</span>(continuously);</div>
                <div><b>08</b>  {'}'}</div>
                <div><b>09</b>{'}'}</div>
                <div className="code-cursor">▌</div>
              </div>
            </div>
            <div className="visual-footer"><div className="visual-icon"><ShieldCheck size={19}/></div><div><strong>Quality is built in.</strong><span>Not just tested at the end.</span></div><span className="visual-arrow"><ArrowUpRight size={18}/></span></div>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          </motion.div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE <ArrowDown size={13}/></a>
        </section>

        <section className="metrics section-wrap" aria-label="Career highlights">
          <div className="metric"><strong>13<span>+</span></strong><span>Years in technology*</span></div>
          <div className="metric"><strong>800<span>+</span></strong><span>Test cases stabilized</span></div>
          <div className="metric"><strong>93<span>%</span></strong><span>Test passing rate</span></div>
          <div className="metric"><strong>02</strong><span>Associates managed</span></div>
          <p className="metric-note">*Approximate experience based on the employment dates listed in the CV.</p>
        </section>

        <section className="section-wrap section-block" id="about">
          <Reveal><SectionHeading eyebrow="01 / ABOUT" title="A quality mindset, backed by engineering." description="I bring together software development experience, practical test automation, and a continuous-improvement mindset." /></Reveal>
          <div className="about-grid">
            <Reveal className="about-main"><p className="about-lead">I build confidence in software by making quality measurable, repeatable, and part of the delivery process.</p><p className="body-copy">Across roles in software development, QA, automation, and DevOps, I’ve worked on improving test coverage, stabilizing automated suites, streamlining manual processes, and supporting teams. More recently, I’ve explored AI-assisted workflows with Windsurf and GitHub Copilot to optimize day-to-day work.</p><p className="body-copy">My approach is grounded in reliable engineering practices: understand the system, automate the right checks, make feedback useful, and keep improving.</p></Reveal>
            <Reveal delay={.12} className="about-aside"><div className="aside-label">CORE FOCUS</div><div className="focus-item"><ShieldCheck/><span><strong>Reliable testing</strong><small>Confidence across releases</small></span></div><div className="focus-item"><Workflow/><span><strong>Scalable automation</strong><small>Repeatable quality practices</small></span></div><div className="focus-item"><BrainCircuit/><span><strong>AI-assisted workflows</strong><small>Smarter ways to work</small></span></div></Reveal>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <Reveal><SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with." description="A practical toolkit spanning software development, automation, quality engineering, and delivery." /></Reveal>
          <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = group.icon; return <Reveal delay={i * .045} key={group.title} className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-index">0{i + 1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></Reveal> })}</div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <Reveal><SectionHeading eyebrow="03 / EXPERIENCE" title="Where I’ve made an impact." description="A career spanning application development, software engineering, QA, automation, and team leadership." /></Reveal>
          <div className="timeline">{experience.map((job, i) => <Reveal key={`${job.company}-${job.period}`} delay={i * .035} className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="job-meta"><span>{job.period}</span><span>{job.location}</span></div><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tag-list">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></Reveal>)}</div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <Reveal><SectionHeading eyebrow="04 / SELECTED WORK" title="A closer look at the craft." description="Project areas drawn from my professional experience. Public repository links can be added as individual examples become available." /></Reveal>
          <div className="projects-grid">{projects.map((project, i) => { const Icon = project.icon; return <Reveal delay={i * .06} key={project.number} className="project-card"><div className="project-top"><span className="project-number">{project.number} / PROJECT AREA</span><span className="project-icon"><Icon size={21}/></span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-bottom"><span>{project.status}</span><span className="project-link-muted"><ExternalLink size={15}/></span></div></Reveal> })}</div>
          <p className="projects-disclaimer"><CheckCircle2 size={15}/> These are experience-based portfolio topics, not claims of published repositories. Add verified GitHub project URLs when ready.</p>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <Reveal className="contact-panel"><div className="contact-orb"/><span className="eyebrow">05 / GET IN TOUCH</span><h2>Let’s make software<br/><span>work better.</span></h2><p>Interested in quality engineering, test automation, or exchanging ideas about better software delivery? Feel free to reach out.</p><div className="contact-actions"><a className="button button-primary" href="mailto:alvin.paderes@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><a className="button button-ghost" href="https://ph.linkedin.com/in/alvinpaderes" target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={16}/></a></div><div className="contact-email"><Mail size={16}/> alvin.paderes@gmail.com <button onClick={() => navigator.clipboard?.writeText('alvin.paderes@gmail.com')} aria-label="Copy email address">Copy</button></div></Reveal>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">AP</span><span>ALVIN PADERES<span className="brand-sub">QA AUTOMATION · SDET</span></span></a><span>Designed & built with a quality-first mindset.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}
