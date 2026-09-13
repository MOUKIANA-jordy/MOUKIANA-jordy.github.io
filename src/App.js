import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">JM.</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">FULL-STACK DEVELOPER</p>

          <h1>
            Jordy
            <span> Moukiana</span>
          </h1>

          <p className="hero-text">
            I build modern full-stack web applications with React,
            Python, Django, REST APIs and PostgreSQL.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>

            <a
              href="https://github.com/MOUKIANA-jordy"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ABOUT ME */}
        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Full-Stack Developer building useful and reliable web
            applications.
          </h2>

          <p className="section-text">
            I&apos;m Jordy Moukiana, a Full-Stack Developer based in
            Paris and trained at Holberton Digital School. I build
            modern web applications from frontend interfaces to backend
            APIs using technologies such as React, Next.js, JavaScript,
            Python, Django, Node.js, REST APIs, PostgreSQL and Tailwind
            CSS.
          </p>

          <p className="section-text">
            Through project-based learning at Holberton, I developed
            practical experience designing, testing and deploying
            complete applications. My main project is{" "}
            <a
              href="https://github.com/MOUKIANA-jordy/STAFFHUB"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              StaffHub
            </a>
            , a full-stack HR management platform that centralizes
            employee records, administrative requests, documents,
            schedules, attendance, payroll, notifications and
            messaging.
          </p>

          <p className="section-text">
            My academic background in chemistry and professional
            experience in operational environments have strengthened
            my structured approach, adaptability and teamwork. I&apos;m
            looking for opportunities where I can contribute to
            real-world products, continue growing as a developer and
            bring value to an engineering team.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>Technologies I work with.</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React</p>
              <p>JavaScript</p>
              <p>Next.js</p>
              <p>Redux Toolkit</p>
              <p>Tailwind CSS</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Python</p>
              <p>Django</p>
              <p>Django REST Framework</p>
              <p>Node.js</p>
              <p>REST APIs</p>
            </div>

            <div className="skill-card">
              <h3>Database & Tools</h3>
              <p>PostgreSQL</p>
              <p>SQLite</p>
              <p>Git / GitHub</p>
              <p>Jest</p>
              <p>React Testing Library</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="section-label">PROJECTS</p>

          <h2>Selected work.</h2>

          {/* STAFFHUB */}
          <div className="project-card">
            <div>
              <p className="project-type">FINAL PROJECT</p>

              <h3>StaffHub</h3>

              <p>
                Full-stack HR management platform designed to
                centralize employee records, requests, documents,
                schedules, attendance, payroll, notifications and
                messaging.
              </p>

              <p className="stack">
                React • Python • Django REST Framework • PostgreSQL •
                JWT • Vercel • Render
              </p>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/MOUKIANA-jordy/STAFFHUB"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* REACT REDUX */}
          <div className="project-card">
            <div>
              <p className="project-type">HOLBERTON PROJECT</p>

              <h3>React / Redux Dashboard</h3>

              <p>
                React application using Redux Toolkit for global state,
                asynchronous data fetching, authentication, courses and
                notifications.
              </p>

              <p className="stack">
                React • Redux Toolkit • JavaScript • Jest
              </p>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/MOUKIANA-jordy/holbertonschool-web_react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-alt">
          <p className="section-label">CONTACT</p>

          <h2>Let's work together.</h2>

          <p className="section-text">
            Based in Paris, France and open to Full-Stack Developer
            opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:jordymoukiana@gmail.com">
              jordymoukiana@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/jordy-moukiana/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/MOUKIANA-jordy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Jordy Moukiana</p>
      </footer>
    </div>
  );
}

export default App;
