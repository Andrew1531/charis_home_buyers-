import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-react';

const phoneNumber = '1-732-466-7400';
const phoneHref = 'tel:+17324667400';

const scrollToLead = () => {
  document.getElementById('get-offer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Charis Home Buyers home">
      <span className="official-logo-frame">
        <img className="official-logo" src="/images/charis-home-buyers-logo.webp" alt="" />
      </span>
      <span className="logo-name">
        <strong>Charis</strong>
        <em>Home Buyers</em>
      </span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: ReactNode; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'section-intro-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="intro-copy">{children}</p>}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main navigation">
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#questions" onClick={closeMenu}>Questions</a>
            <a className="nav-phone" href={phoneHref} onClick={closeMenu}><Phone size={15} /> {phoneNumber}</a>
            <button className="button button-small button-primary nav-cta" onClick={() => { closeMenu(); scrollToLead(); }}>Get offer now <ArrowRight size={16} /></button>
          </nav>
          <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="pill"><span className="pill-dot" /> Local &amp; family-owned in New Jersey</div>
              <h1>Sell your house fast <span>in New Jersey.</span></h1>
              <p className="hero-lede">A clear, direct path when you need to move on from your house — without repairs, showings, or waiting on a buyer’s financing.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={scrollToLead}>Get offer now <ArrowRight size={18} /></button>
                <a className="text-link light-link" href={phoneHref}><Phone size={17} /> Call {phoneNumber}</a>
              </div>
              <p className="hero-note"><ShieldCheck size={15} /> No obligation to accept an offer</p>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Serving homeowners across New Jersey</span>
            <span className="hero-rule" />
            <span>As-is offers. Straight answers.</span>
          </div>
        </section>

        <section className="promise-strip" aria-label="What you avoid">
          <div className="container promise-grid">
            <div><strong>$0 Fees</strong><span>$0 Commission</span></div>
            <div><strong>No Repairs</strong><span>We buy houses as-is</span></div>
            <div><strong>No Buyer Showing</strong><span>No inspection</span></div>
            <div><strong>Your Closing Date</strong><span>No financing delays</span></div>
          </div>
        </section>

        <section id="how-it-works" className="section process-section">
          <div className="container">
            <SectionIntro eyebrow="How we work" title="A home sale without the runaround." >
              You do not need to clean up your life for a listing. We keep the conversation human, the offer clear, and the next step yours.
            </SectionIntro>
            <div className="process-layout">
              <div className="process-stamp"><span>CH</span><small>Clear help<br />for the next step</small></div>
              <div className="process-list">
                <article className="process-item">
                  <span className="process-number">01</span>
                  <div><h3>Call us / fill contact form</h3><p>Share a few details about the property and what you need. We will listen first.</p></div>
                  <ArrowRight size={21} />
                </article>
                <article className="process-item">
                  <span className="process-number">02</span>
                  <div><h3>Meet us at your house</h3><p>We take a look at the property as-is — no staging, repairs, or buyer showings.</p></div>
                  <ArrowRight size={21} />
                </article>
                <article className="process-item">
                  <span className="process-number">03</span>
                  <div><h3>Choose your closing date</h3><p>Review a fair cash deal and choose the timing that works for you.</p></div>
                  <Check size={21} />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section clarity-section">
          <div className="container">
            <SectionIntro eyebrow="Why sell with us?" title="The advantages are practical." />
            <div className="advantage-cards">
              <article className="advantage-card card-accent"><span className="card-index">01 / 06</span><h3>No<br />repairs</h3><p>Sell the house as-is, without spending money or time on updates.</p><ArrowDownRight size={24} /></article>
              <article className="advantage-card card-blue"><span className="card-index">02 / 06</span><h3>$0 fee<br />commission</h3><p>Keep the process straightforward. There are no fees or commission.</p><ArrowDownRight size={24} /></article>
              <article className="advantage-card card-paper"><span className="card-index">03 / 06</span><h3>No<br />waiting</h3><p>Move at a pace that fits your situation, not an open-ended listing.</p><ArrowDownRight size={24} /></article>
              <article className="advantage-card card-outline"><span className="card-index">04 / 06</span><h3>Clear<br />answers</h3><p>Transparency matters. We explain the offer and the next step.</p><ArrowDownRight size={24} /></article>
              <article className="advantage-card card-outline"><span className="card-index">05 / 06</span><h3>Easy<br />process</h3><p>One conversation can begin a much simpler home sale.</p><ArrowDownRight size={24} /></article>
              <article className="advantage-card card-blue card-tall"><span className="card-index">06 / 06</span><h3>Dedicated<br />specialists</h3><p>A real person is here to help you make an informed choice.</p><ArrowDownRight size={24} /></article>
            </div>
          </div>
        </section>

        <section className="fit-section">
          <div className="container fit-grid">
            <div className="fit-heading"><p className="eyebrow">A good fit when</p><h2>You need the house to stop being a question mark.</h2></div>
            <div className="fit-items">
              <div><span>—</span><p>You have a property that needs repairs</p></div>
              <div><span>—</span><p>You want to avoid buyer showings and inspections</p></div>
              <div><span>—</span><p>You need to choose your closing date</p></div>
              <div><span>—</span><p>You want a fair cash deal without financing delays</p></div>
            </div>
          </div>
        </section>

        <section id="questions" className="section faq-section">
          <div className="container faq-grid">
            <SectionIntro eyebrow="Questions, answered" title="Good decisions need clear information." >
              We would rather give you a useful answer than pressure you into a decision. Here are the basics.
            </SectionIntro>
            <div className="faq-list">
              {[
                ['Do I have to repair or clean the house first?', 'No. We buy houses as-is, so you do not need to make repairs or prepare the property for buyer showings.'],
                ['Are there fees or commission?', 'No. Our process is $0 fees and $0 commission. We also cover closing costs.'],
                ['How do I know the offer is fair?', 'We walk through the property with you, explain the offer clearly, and give you space to make an informed decision.'],
                ['Where does closing happen?', 'We close at a reputable local title company, with a closing date you choose.'],
              ].map(([question, answer], index) => (
                <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                    <span>{question}</span><ChevronDown size={19} />
                  </button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="get-offer" className="lead-section">
          <div className="container lead-grid">
            <div className="lead-copy">
              <p className="eyebrow">Start with your address</p>
              <h2>Get your house out of limbo.</h2>
              <p>Tell us a little about the property. A Charis Home Buyers specialist will review your details and follow up to talk through the next step.</p>
              <a className="lead-phone" href={phoneHref}><span><Phone size={18} /></span><div><small>Prefer to talk?</small><strong>{phoneNumber}</strong></div></a>
            </div>
            <div className="lead-form-shell">
              {submitted ? (
                <div className="success-state">
                  <span className="success-icon"><Check size={24} /></span>
                  <p className="eyebrow">Thank you</p>
                  <h3>Your details are with us.</h3>
                  <p>This form is ready for a Charis Home Buyers specialist to review. You can also call us directly at <a href={phoneHref}>{phoneNumber}</a>.</p>
                  <button className="button button-primary" onClick={() => setSubmitted(false)}>Send another request <ArrowRight size={17} /></button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-heading"><span>01</span><h3>Tell us about the property</h3></div>
                  <label>Property address<input name="address" required placeholder="Street address, city, NJ" /></label>
                  <div className="form-two-col">
                    <label>Full name<input name="name" required placeholder="Your name" /></label>
                    <label>Phone<input name="phone" type="tel" required placeholder="Your phone number" /></label>
                  </div>
                  <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
                  <label className="consent-label"><input type="checkbox" required /><span>I agree to be contacted by Charis Home Buyers about my property inquiry. Consent is not a condition of purchase. Message and data rates may apply.</span></label>
                  <button type="submit" className="button button-primary form-submit">Get fair cash deal <ArrowRight size={18} /></button>
                  <p className="form-disclaimer">By submitting, you are requesting information, not committing to sell. We respect your privacy and your decision.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <Logo light />
          <div className="footer-cta"><span>Ready for a simpler answer?</span><button onClick={scrollToLead}>Get offer now <ArrowRight size={17} /></button></div>
        </div>
        <div className="container footer-bottom">
          <p>Charis Home Buyers · Local and family-owned in New Jersey</p>
          <a href={phoneHref}><Phone size={14} /> {phoneNumber}</a>
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Charis Home Buyers</p>
            <a className="footer-credit" href="https://ladmedia.co" target="_blank" rel="noreferrer noopener">
              Designed and engineered by <strong>LAD MEDIA</strong> <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
