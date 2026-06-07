import {
  artefacts,
  contactLinks,
  developmentPlan,
  didacticConcepts,
  journalEntries,
  navigationItems,
  profileGroups,
  quickLinks,
  researchNotes,
  resourceCategories,
  teachingPhilosophy,
  trainingAreas,
} from "./data/portfolioData.js";
import ArtefactCard from "./components/ArtefactCard.jsx";
import Card from "./components/Card.jsx";
import CompetencyCard from "./components/CompetencyCard.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ReflectionBox from "./components/ReflectionBox.jsx";
import ResearchCard from "./components/ResearchCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import Timeline from "./components/Timeline.jsx";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="eyebrow">Professional e-portfolio</p>
        <h1>Vincent Daher</h1>
        <p className="hero__subtitle">
          Mathematics teacher, trainer, reflective practitioner, and M1 student
          building a long-term professional journey in mathematics education.
        </p>
        <p className="hero__mission">
          This portfolio documents the M1 observation stage while connecting
          evidence, reflection, competencies, and professional growth.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#stage">
            Explore stage portfolio
          </a>
          <a className="button button--secondary" href="#philosophy">
            Teaching philosophy
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="formula-card formula-card--one">reasoning</div>
        <div className="formula-card formula-card--two">evidence</div>
        <div className="formula-card formula-card--three">growth</div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <section className="section section--compact">
      <div className="container">
        <SectionTitle
          eyebrow="Portfolio map"
          title="A structured professional learning journey"
          text="Each section is designed to connect what was observed, what was understood, which competency developed, and how future practice can improve."
        />
        <div className="grid grid--four">
          {quickLinks.map((item) => (
            <a className="quick-card" href={item.href} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container section__split">
        <div>
          <SectionTitle
            eyebrow="About me"
            title="A mathematics educator with an academic and formative identity"
            text="Vincent's profile brings together classroom practice, observation, youth education, training, and a growing interest in research in mathematics education."
          />
          <ReflectionBox
            title="Professional identity"
            text="The portfolio presents teaching as a reflective practice: decisions are observed, analyzed, connected to concepts from didactics, and transformed into concrete goals for future teaching."
          />
        </div>
        <div className="profile-grid">
          {profileGroups.map((group) => (
            <Card key={group.title} title={group.title} tag={group.tag}>
              <ul className="check-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="section section--tint" id="philosophy">
      <div className="container">
        <SectionTitle
          eyebrow="Teaching philosophy"
          title="Mathematics as reasoning, language, and interaction"
          text="This vision of teaching mathematics emphasizes student activity, meaningful errors, guided institutionalization, and assessment that helps learning move forward."
        />
        <div className="grid grid--three">
          {teachingPhilosophy.map((idea) => (
            <CompetencyCard key={idea.title} {...idea} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StagePortfolio() {
  return (
    <section className="section" id="stage">
      <div className="container">
        <SectionTitle
          eyebrow="M1 stage portfolio"
          title="Observation stage as a foundation for professional growth"
          text="The M1 stage section is organized around observation, didactic analysis, artefacts, and reflection. It can be expanded later with final dates, class details, and institutional documents."
        />
        <div className="stage-panel">
          <div>
            <p className="stage-panel__label">Stage context</p>
            <h3>Observation stage in mathematics education</h3>
            <p>
              Placeholder for the school context, observed class levels,
              mathematical topics, supervising teacher, and institutional
              expectations of the M1 stage.
            </p>
          </div>
          <div className="stage-panel__list">
            <span>Type: observation</span>
            <span>Focus: classroom interaction</span>
            <span>Evidence: notes, grids, artefacts</span>
            <span>Goal: link theory and practice</span>
          </div>
        </div>
        <div className="grid grid--four">
          {[
            ["Observation journal", "#journal"],
            ["Didactic analysis", "#didactic-analysis"],
            ["Evidence and artefacts", "#artefacts"],
            ["Professional plan", "#development"],
          ].map(([title, href]) => (
            <a className="path-card" href={href} key={title}>
              {title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ObservationJournal() {
  return (
    <section className="section section--tint" id="journal">
      <div className="container">
        <SectionTitle
          eyebrow="Observation journal"
          title="From classroom events to professional questions"
          text="These sample entries are placeholders that model the expected structure for stage observations."
        />
        <Timeline entries={journalEntries} />
      </div>
    </section>
  );
}

function DidacticAnalysis() {
  return (
    <section className="section" id="didactic-analysis">
      <div className="container">
        <SectionTitle
          eyebrow="Didactic analysis"
          title="Conceptual tools for interpreting mathematics teaching"
          text="Each concept connects an academic lens to observed classroom practice and future teaching decisions."
        />
        <div className="grid grid--three">
          {didacticConcepts.map((concept) => (
            <Card key={concept.title} title={concept.title} tag={concept.tag}>
              <p>{concept.explanation}</p>
              <p className="card__muted">{concept.connection}</p>
              <strong>{concept.reflection}</strong>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Artefacts() {
  return (
    <section className="section section--tint" id="artefacts">
      <div className="container">
        <SectionTitle
          eyebrow="Evidence and artefacts"
          title="Evidence explained through reflection and competencies"
          text="Artefacts are not stored as isolated files. Each one is connected to a competency and a professional learning goal."
        />
        <div className="grid grid--three">
          {artefacts.map((artefact) => (
            <ArtefactCard key={artefact.title} {...artefact} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="section" id="resources">
      <div className="container">
        <SectionTitle
          eyebrow="Teaching resources"
          title="Materials for learning, assessment, and support"
          text="This section can later host downloadable files, classroom tools, exercises, and resources created for students."
        />
        <div className="resource-list">
          {resourceCategories.map((resource) => (
            <Card key={resource.title} title={resource.title} tag={resource.tag}>
              <p>{resource.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchNotes() {
  return (
    <section className="section section--tint" id="research">
      <div className="container">
        <SectionTitle
          eyebrow="Research notes"
          title="Bridging classroom practice and mathematics education research"
          text="The cards below are placeholders for concise notes that can be expanded into an academic reading journal."
        />
        <div className="grid grid--four">
          {researchNotes.map((note) => (
            <ResearchCard key={note.title} {...note} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="section" id="training">
      <div className="container section__split section__split--reverse">
        <div>
          <SectionTitle
            eyebrow="Training and workshops"
            title="A professional trainer identity connected to education"
            text="This section presents youth training, learning strategies, mathematics workshops, and Alphaducation projects in a professional and non-commercial way."
          />
          <ReflectionBox
            title="Alphaducation"
            text="Alphaducation can be presented as an educational training and tutoring project focused on study methods, mathematics support, exam preparation, and learner autonomy."
          />
        </div>
        <div className="grid grid--two">
          {trainingAreas.map((area) => (
            <Card key={area.title} title={area.title} tag={area.tag}>
              <p>{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentPlan() {
  return (
    <section className="section section--tint" id="development">
      <div className="container">
        <SectionTitle
          eyebrow="Professional development plan"
          title="Turning reflection into action"
          text="The development plan shows how observed evidence becomes a concrete path for growth."
        />
        <div className="grid grid--three">
          {developmentPlan.map((item) => (
            <CompetencyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact">
        <SectionTitle
          eyebrow="Contact"
          title="Professional contact"
          text="Use these placeholders for academic and professional links. Replace them when the final contact details are ready."
        />
        <div className="contact__links">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
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
      <Navbar items={navigationItems} />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <Philosophy />
        <StagePortfolio />
        <ObservationJournal />
        <DidacticAnalysis />
        <Artefacts />
        <Resources />
        <ResearchNotes />
        <Training />
        <DevelopmentPlan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
