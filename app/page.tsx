//note to myself: remove stupid content before using this
import { Icon, type IconName } from "./icons";
import { AnswerPicker, MobileMenu } from "./interactive";

function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M8 11.5C8 9.57 9.57 8 11.5 8h19C35.75 8 40 12.25 40 17.5v17C40 39.75 35.75 44 30.5 44H17.3c-5.14 0-9.3-4.16-9.3-9.3V11.5Z"
          fill="currentColor"
        />
        <path
          d="M15 17h18M15 24h11"
          stroke="#FFFDF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="m28 30 3.8 3.7L38 27.4"
          stroke="#F36B4B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 44h12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const features = [
  {
    number: "1",
    delay: "1",
    icon: "document" as IconName,
    tone: "red",
    title: (
      <>
        Make the
        <br />
        presentation
      </>
    ),
    text: "Make a presentation, but instead of just some boring PowerPoint, put a quiz in it.",
    link: "Start building",
  },
  {
    number: "2",
    delay: "2",
    icon: "chat" as IconName,
    tone: "green",
    title: (
      <>
        Ask the
        <br />
        students
      </>
    ),
    text: "Everyone joins on their laptop or phone and follows along with your presentation and answers the questions. People can also react with emojis to the slides.",
    link: "Make a presentation",
  },
  {
    number: "3",
    delay: "3",
    icon: "pencil" as IconName,
    tone: "orange",
    title: (
      <>
        Keep track of
        <br />
        everyone's progress
      </>
    ),
    text: "Find the exact spot your students didn't understand and give extra explanation. Or find that one student that needs some more help. This is probably more effective than a PowerPoint but not proven yet.",
    link: "Get fast feedback or something (idk what to put here)",
  },
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Qslides home">
          <Logo />
          <span className="brand-name">
            Qslides<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#example">Example</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="/login">
            Log in <Icon name="arrow" className="arrow-icon" />
          </a>
          <a className="button button-small button-dark" href="/signup">
            Sign up <Icon name="arrow" className="arrow-icon" />
          </a>
        </div>
        <MobileMenu />
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <h1 id="hero-title">
              Make your presentations
              <br />
              <em>absolute cinema.</em>
            </h1>
            <p className="hero-lede">
              Check if the students are still with you while explaining
              something new. (super high percentage of better understanding and
              learning performance thing here)
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#how-it-works">
                How? <Icon name="arrow" className="arrow-icon" />
              </a>
            </div>
          </div>

          <div
            className="hero-visual hero-gif reveal reveal-delay-1"
            aria-label="Absolute cinema presentation background"
          >
            <div className="cinema-backdrop" aria-hidden="true" />
          </div>
        </section>

        <section className="feature-section section-wrap" id="how-it-works">
          <div className="section-heading reveal">
            <h2>
              Turn a normal presentation into
              <br />
              <span>
                something <em>cool.</em>
              </span>
            </h2>
            <p>
              Qslides adds questions to your presentation. Test your class's
              knowledge before explaining the thing, or check their
              understanding after explaining.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article
                className={`feature-card feature-card-${feature.tone} reveal reveal-delay-${feature.delay}`}
                key={feature.number}
              >
                <div className="card-icon">
                  <Icon name={feature.icon} />
                </div>
                <span className="card-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href="#example" className="card-link">
                  {feature.link}
                  <Icon name="arrow" className="card-arrow" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="example-section section-wrap" id="example">
          <div className="example-copy reveal">
            <h2>
              A question a day
              <br />
              <em>keeps failure away.</em>
            </h2>
            <p>
              Say you are explaining some basic French words. Instead of
              guessing if the class follows, ask:
            </p>
            <p className="example-question">“What is hello in French?”</p>
            <p>
              Answers tell you what to do next! If your students score a 0/10,
              you probably didn't explain well bruh.
            </p>
          </div>
          <div className="example-answer reveal reveal-delay-1">
            <div className="example-label">Question 4</div>
            <h3>What is hello in French?</h3>
            <AnswerPicker />
            <div className="example-response">Answer the question.</div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top" aria-label="Qslides home">
          <Logo />
          <span className="brand-name">
            Qslides<span className="brand-dot">.</span>
          </span>
        </a>
        <div className="footer-links">
          <a href="#">privacy things</a>
          <a href="#">gdpr things</a>
          <a href="#">terms or something</a>
        </div>
        <span className="copyright">© 2026 Qslides</span>
      </footer>
    </div>
  );
}

//me when making this stuff
//     #####
//    #### _\_  ________
//    ##=-[.].]| \      \
//    #(    _\ |  |------|
//     #   __| |  ||||||||
//      \  _/  |  ||||||||
//   .--'--'-. |  | ____ |
//  / __      `|__|[o__o]|
//_(____nm_______ /____\____
//
//totally didnt steal this from https://asciiart.website/art/3339
//anyway nice ur reading this!
