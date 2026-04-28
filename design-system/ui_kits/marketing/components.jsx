/* global React */
const { useState, useEffect, useRef } = React;

/* Icon helper — uses Lucide CDN */
function Icon({ name, size = 20, stroke = 1.5, className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.setAttribute("data-lucide", name);
      ref.current.innerHTML = "";
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": stroke },
        nameAttr: "data-lucide",
        elements: [ref.current],
      });
    }
  }, [name, size, stroke]);
  return <i ref={ref} className={className} style={{ display: "inline-flex", alignItems: "center", ...style }}></i>;
}

/* ----- Nav ------------------------------------------------------------ */
function Nav({ active, onNav, onCTA }) {
  const links = [
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "journal", label: "Journal" },
  ];
  return (
    <nav className="dc-nav">
      <div className="dc-container dc-nav-inner">
        <a className="dc-brand" href="#" onClick={(e) => { e.preventDefault(); onNav?.("work"); }}>
          <img src="../../assets/logo-mark-black.png" alt="" />
          <span className="nm">digital craft</span>
        </a>
        <div className="dc-nav-links">
          {links.map(l => (
            <a key={l.id} href="#"
               className={active === l.id ? "active" : ""}
               onClick={(e) => { e.preventDefault(); onNav?.(l.id); }}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="dc-nav-spacer" />
        <button className="dc-btn dc-btn-ghost" onClick={() => onNav?.("contact")} style={{padding:"8px 14px"}}>Contact</button>
        <button className="dc-btn dc-btn-primary" onClick={onCTA} style={{padding:"10px 16px"}}>
          Book a system audit<span className="dc-arrow"></span>
        </button>
      </div>
    </nav>
  );
}

/* ----- Hero ----------------------------------------------------------- */
function Hero({ onCTA }) {
  return (
    <section className="dc-hero">
      <div className="dc-container dc-hero-inner">
        <div className="dc-eyebrow">Systemisation · Automation · Custom builds</div>
        <h1>Stop running your business on <em>duct tape</em>.</h1>
        <p>We replace the spreadsheets, sticky notes, and manual handoffs with one system that runs itself — bespoke websites, CRMs, and apps built for the way your team actually works.</p>
        <div className="dc-actions">
          <button className="dc-btn dc-btn-primary" onClick={onCTA}>
            Book a system audit<span className="dc-arrow"></span>
          </button>
          <button className="dc-btn dc-btn-secondary">See recent work</button>
        </div>
      </div>
    </section>
  );
}

/* ----- Marquee of capabilities --------------------------------------- */
function Capabilities() {
  const items = [
    "Custom websites",
    "CRM systems",
    "Internal tools",
    "Mobile apps",
    "Workflow automation",
    "Data pipelines",
    "AI integrations",
    "API platforms",
  ];
  return (
    <section className="dc-section tight" style={{borderTop:"1px solid var(--border-subtle)", borderBottom:"1px solid var(--border-subtle)", padding:"28px 0"}}>
      <div className="dc-container" style={{display:"flex", gap:40, alignItems:"center", overflow:"hidden"}}>
        <div className="dc-eyebrow" style={{flex:"0 0 auto"}}>What we build</div>
        <div style={{display:"flex", gap:32, flexWrap:"wrap"}}>
          {items.map(i => (
            <span key={i} style={{fontFamily:"var(--font-display)", fontSize:18, letterSpacing:"-0.015em", color:"var(--fg-2)"}}>
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Feature grid --------------------------------------------------- */
function Features() {
  const features = [
    { ico: "workflow", h: "Map the process first", p: "Before we write a line of code, we draw the system. The spec is the deliverable — the build is the easy part." },
    { ico: "git-branch", h: "Replace the handoffs", p: "Every manual step between tools is a place where work goes to die. We close those gaps with automation." },
    { ico: "database", h: "One source of truth", p: "Customer data, jobs, invoices, ops — all in one place, owned by you, queryable, exportable, never locked in." },
    { ico: "zap", h: "Ship in weeks, not quarters", p: "Working software in three weeks. Iterations from there. No retainers. No mystery roadmaps." },
    { ico: "settings-2", h: "Built for your team", p: "We design around the people who actually use it. If they don't open it, we didn't ship it." },
    { ico: "bar-chart-3", h: "Measurable outcomes", p: "Hours saved, errors avoided, leads recovered. Every system has numbers attached on day one." },
  ];
  return (
    <section className="dc-section">
      <div className="dc-container">
        <div className="dc-eyebrow">What changes</div>
        <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(36px,5vw,60px)", letterSpacing:"-0.035em", lineHeight:1.05, margin:"16px 0 48px", maxWidth:760}}>
          Less time on busywork. More on the work only your team can do.
        </h2>
        <div className="dc-grid-3">
          {features.map((f, i) => (
            <div key={i} className="dc-feature">
              <div className="ico"><Icon name={f.ico} size={20} /></div>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
              <a className="more" href="#">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Process steps -------------------------------------------------- */
function Process() {
  const [active, setActive] = useState(1);
  const steps = [
    { h: "Map", p: "We sit with your team and document the real process — not the one in the SOP folder." },
    { h: "Design", p: "Wire the system, write the spec, and agree the metrics before any code is written." },
    { h: "Build", p: "Two-week sprints, weekly demos. You see progress, not promises." },
    { h: "Hand over", p: "Training, runbooks, and a system your team owns. We're a phone call away — not a retainer." },
  ];
  return (
    <section className="dc-section alt">
      <div className="dc-container">
        <div className="dc-eyebrow">How it works</div>
        <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(36px,5vw,60px)", letterSpacing:"-0.035em", lineHeight:1.05, margin:"16px 0 56px", maxWidth:760}}>
          Three weeks to a working system.
        </h2>
        <div className="dc-process">
          <div className="conn" style={{ "--progress": `${(active / (steps.length - 1)) * 100}%` }}></div>
          {steps.map((s, i) => (
            <div key={i} className={"dc-step " + (i <= active ? "active" : "")}
                 onMouseEnter={() => setActive(i)}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Testimonial --------------------------------------------------- */
function Testimonial() {
  return (
    <section className="dc-section dark">
      <div className="dc-container">
        <div className="dc-eyebrow" style={{color:"#A3A3A3"}}>Field report</div>
        <p className="dc-quote" style={{color:"#fff", marginTop:24}}>
          We replaced four tools and a part-time admin role with one system. <em>The team got their afternoons back</em> — and we stopped losing leads in inboxes.
        </p>
        <div className="dc-attrib">
          <div className="av"></div>
          <div className="who"><b style={{color:"#fff"}}>Priya Anand</b> &nbsp;<span>· Ops Director, Northway Logistics</span></div>
        </div>
      </div>
    </section>
  );
}

/* ----- CTA banner ---------------------------------------------------- */
function CTABand({ onCTA }) {
  return (
    <section className="dc-section">
      <div className="dc-container">
        <div className="dc-cta-band">
          <h2>The future state should feel <em>obvious</em>. Let's draw it.</h2>
          <button className="dc-btn dc-btn-primary" onClick={onCTA} style={{padding:"14px 22px", fontSize:15}}>
            Book a system audit<span className="dc-arrow"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----- Footer -------------------------------------------------------- */
function Footer() {
  return (
    <footer className="dc-footer">
      <div className="dc-container">
        <div className="row">
          <div className="brand">
            <img src="../../assets/logo-wordmark-white.png" alt="Digital Craft" />
            <p>Bespoke systems that turn messy, time-consuming processes into smart, automated ones.</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#">Custom websites</a></li>
              <li><a href="#">CRM systems</a></li>
              <li><a href="#">Mobile apps</a></li>
              <li><a href="#">Automation</a></li>
            </ul>
          </div>
          <div>
            <h5>Work</h5>
            <ul>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Process</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="#">hello@digitalcraft.co.uk</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Digital Craft Ltd</span>
          <span>v1.0 · built in Britain</span>
        </div>
      </div>
    </footer>
  );
}

/* ----- Audit modal --------------------------------------------------- */
function AuditModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", problem: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <div className={"dc-modal-scrim " + (open ? "open" : "")} onClick={onClose}>
      <div className="dc-modal" onClick={e => e.stopPropagation()}>
        <div className="dc-eyebrow" style={{marginBottom:14}}>System audit</div>
        <h3>Tell us what's broken.</h3>
        <p>30 minutes. We'll map the messiest part of your operation and tell you the shortest path to fix it.</p>
        <div className="field"><label>Name</label><input className="dc-input" value={form.name} onChange={set("name")} placeholder="Alex Mason" /></div>
        <div className="field"><label>Work email</label><input className="dc-input" value={form.email} onChange={set("email")} placeholder="alex@company.com" /></div>
        <div className="field"><label>Company</label><input className="dc-input" value={form.company} onChange={set("company")} placeholder="Northway Logistics" /></div>
        <div className="field"><label>What's the bottleneck?</label><textarea className="dc-input" rows="3" value={form.problem} onChange={set("problem")} placeholder="We're losing leads between the website and the CRM..." /></div>
        <div className="actions">
          <button className="dc-btn dc-btn-primary" onClick={() => onSubmit(form)} style={{flex:1, justifyContent:"center"}}>
            Request audit<span className="dc-arrow"></span>
          </button>
          <button className="dc-btn dc-btn-ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

/* ----- Toast --------------------------------------------------------- */
function Toast({ message, show }) {
  return (
    <div className={"dc-toast " + (show ? "show" : "")}>
      <span className="dot"></span>
      {message}
    </div>
  );
}

Object.assign(window, { Nav, Hero, Capabilities, Features, Process, Testimonial, CTABand, Footer, AuditModal, Toast, Icon });
