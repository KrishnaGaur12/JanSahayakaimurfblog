
import { WaveformRule } from './components/WaveformRule';
import { FeatureCard } from './components/FeatureCard';
import { CodeBlock } from './components/CodeBlock';
import { Timeline } from './components/Timeline';


const DemoLink = ({ url }: { url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--paper-alt)',
    border: '1px solid var(--mist)',
    borderRadius: '8px',
    padding: '2rem',
    margin: '1.5rem 0',
    textDecoration: 'none',
    color: 'var(--ink)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  }}
    className="demo-link-card"
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <span style={{ color: 'var(--marigold)', fontSize: '1.5rem' }}>▶</span>
      <WaveformRule animated={true} />
    </div>
    <div style={{ fontWeight: 600, fontFamily: 'var(--font-body)' }}>Watch the demo on LinkedIn &rarr;</div>
  </a>
);

function App() {
  const timelineItems = [
    { day: "DAY 01", description: "Audio transport with LiveKit & STT integration" },
    { day: "DAY 02", description: "Bilingual detection & on-the-fly TTS switching" },
    { day: "DAY 03", description: "Designing the voice-first visual UI" },
    { day: "DAY 04", description: "Adding SQLite memory with consent" },
    { day: "DAY 05", description: "Function calling & tool reliability" },
    { day: "DAY 06", description: "Proactive outbound calling via Twilio" },
    { day: "DAY 07", description: "Escalation to human agents" },
    { day: "DAY 08", description: "Building the live analytics dashboard" },
    { day: "DAY 09", description: "Multi-agent handoff for specialized queries" },
    { day: "DAY 10", description: "End-to-end testing & latency optimization" },
  ];

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="container-center" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <span className="hero-eyebrow">VOICEFORBHARAT · DAY 10</span>
            <h1>Building JanSahayak AI: A 10-Day Journey Into Voice AI for Bharat</h1>
            <p className="hero-dek">
              How I built a Hindi-English voice agent that helps Indian citizens navigate government schemes using LiveKit, Deepgram, Gemini, and Murf Falcon
            </p>

            <WaveformRule />

            <img src="/landingpage.png" alt="JanSahayak AI" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--mist)', marginTop: '2rem' }} />
          </div>
        </section>

        {/* READING SECTION */}
        <section className="bg-paper">
          <div className="container-center">

            {/* Table of Contents Placeholder (as per prompt) */}
            <nav style={{ background: 'var(--paper-alt)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--mist)', marginBottom: '3rem' }}>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Table of Contents</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontSize: '0.9rem' }}>
                <li><a href="#problem">1. The Problem and the Users</a></li>
                <li><a href="#what-it-does">2. What JanSahayak AI Does</a></li>
                <li><a href="#architecture">3. How the System Works (Architecture)</a></li>
                <li><a href="#features">4. The Features That Matter Most</a></li>
                <li><a href="#challenges">5. Challenges I Ran Into (and How I Solved Them)</a></li>
                <li><a href="#build-it">6. Build and Run It Yourself</a></li>
                <li><a href="#whats-next">7. What I'd Improve Next</a></li>
                <li><a href="#links">8. Links, Code, and Demos</a></li>
              </ul>
            </nav>

            <h2 id="problem">1. The Problem and the Users</h2>
            <p>
              Millions of Indians are eligible for government welfare schemes — PM-KISAN, Ayushman Bharat, scholarship programs, subsidy schemes — but never apply, simply because the information is buried in English-language PDFs, government portals, or forms that assume a level of digital literacy many citizens don't have.
            </p>
            <p>
              Meanwhile, the one interface almost every Indian is fluent in — regardless of income, literacy, or location — is a phone call, in their own language, mixed the way they actually speak it: Hindi, English, and Hinglish in the same sentence.
            </p>

            <ul>
              <li><strong>Who it's for:</strong> rural and semi-urban citizens, first-time scheme applicants, elderly users uncomfortable with apps/websites, anyone more comfortable speaking than typing/reading.</li>
              <li><strong>Track chosen:</strong> Financial Services track — scheme eligibility, subsidy information, financial literacy, and fraud protection.</li>
              <li><strong>Why voice, specifically:</strong> no literacy requirement, no app download, works over a normal phone call, feels like talking to a helpful person rather than filling a form.</li>
            </ul>

            <div style={{ margin: '2.5rem 0', textAlign: 'center' }}>
              <img src="/problem_before_after.png" alt="Before and After Comparison" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--mist)' }} />
              <div className="image-caption">Left: Government scheme page today · Right: JanSahayak AI</div>
            </div>

            <WaveformRule />

            <h2 id="what-it-does">2. What JanSahayak AI Does</h2>
            <ul>
              <li>Understands and responds in Hindi, English, and Hinglish, switching mid-conversation</li>
              <li>Explains government scheme eligibility and required documents</li>
              <li>Remembers returning users (with consent) so they don't repeat themselves</li>
              <li>Proactively calls users before scheme deadlines</li>
              <li>Detects when a situation needs a human and escalates safely</li>
              <li>Tracks its own performance on a live analytics dashboard</li>
              <li>Hands off complex queries to a specialist agent</li>
              <li>Never asks for or stores OTPs, PINs, Aadhaar numbers, or bank details</li>
            </ul>

            <DemoLink url="https://www.linkedin.com/posts/gaurkrishna_voiceforbharat-voiceforbharat-10daysofvoiceagents-activity-7491899186141949952-ANBy" />
            <div className="image-caption" style={{ marginBottom: '2rem' }}>State changes: Ready → Listening → Speaking → Call Ended</div>

            <WaveformRule />

            <h2 id="architecture">3. How the System Works (Architecture)</h2>
            <p>
              Here are the four core building blocks of any voice agent, and what I used for JanSahayak AI:
            </p>
            <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--mist)' }}>
                    <th style={{ padding: '0.75rem' }}>Component</th>
                    <th style={{ padding: '0.75rem' }}>Role</th>
                    <th style={{ padding: '0.75rem' }}>What I used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--mist)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>Real-time transport</td>
                    <td style={{ padding: '0.75rem' }}>Carries audio between the caller and the agent with low latency</td>
                    <td style={{ padding: '0.75rem' }}>LiveKit Agents</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--mist)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>Speech-to-Text (STT)</td>
                    <td style={{ padding: '0.75rem' }}>Converts the caller's spoken audio into text the LLM can read</td>
                    <td style={{ padding: '0.75rem' }}>Deepgram Nova-3 (multilingual mode)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--mist)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>LLM (reasoning engine)</td>
                    <td style={{ padding: '0.75rem' }}>Understands intent, decides what to say or which tool to call</td>
                    <td style={{ padding: '0.75rem' }}>Google Gemini 3.5 Flash</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--mist)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>Text-to-Speech (TTS)</td>
                    <td style={{ padding: '0.75rem' }}>Converts the LLM's text response back into natural speech</td>
                    <td style={{ padding: '0.75rem' }}>Murf Falcon (Anisha voice, hi-IN / en-IN)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The loop is simple: <em>audio in → STT → LLM (+ tools/memory) → TTS → audio out</em>, and LiveKit is the pipe that keeps all four talking to each other in real time.
            </p>

            <div style={{ margin: '2.5rem 0', textAlign: 'center' }}>
              <img src="/archdia.png" alt="Architecture Diagram" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--mist)' }} />
            </div>

            <pre style={{ textAlign: 'center', background: 'transparent', color: 'var(--ink)' }}>
              Python · LiveKit Agents · Deepgram Nova-3 (multilingual)<br />
              Google Gemini 3.5 Flash · Murf Falcon (Anisha, hi-IN/en-IN)<br />
              SQLite · Twilio (telephony) · Next.js + React + Tailwind (frontend)
            </pre>

            <WaveformRule />

            <h2 id="features">4. The Features That Matter Most</h2>

            <div className="feature-grid">
              <FeatureCard
                tag="Language"
                title="Speaking the Way India Actually Speaks"
                description={
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Real-time Hindi/English/Hinglish detection using Devanagari script recognition + a curated dictionary. TTS voice switches on the fly to match the caller, and STT is set to language="multi" for seamless code-switching.</p>
                    <img src="/agentansinhindi.png" alt="Hindi code-switch proof" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
                    <DemoLink url="https://www.linkedin.com/posts/gaurkrishna_voiceforbharat-voiceforbharat-voiceforbharatchallenge-activity-7491560205730779136-exko" />
                  </>
                }
              />
              <FeatureCard
                tag="UI / UX"
                title="A Frontend People Actually Trust"
                description={
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Voice-first UI with clear states (Ready · Connecting · Listening · Speaking). Animated indicators and graceful mic-permission handling built with Next.js, React, and Tailwind.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <img src="/agentui.png" alt="Thinking state" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
                      <img src="/agentspeaking.png" alt="Speaking state" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
                    </div>
                  </>
                }
              />
              <FeatureCard
                tag="Memory"
                title="Memory, With Consent"
                description="Persistent SQLite storage recognizes returning users. Agent always asks for consent before saving anything, storing only basic interaction data and zero sensitive PII."
              />
              <FeatureCard
                tag="Tools"
                title="Tools Instead of Guesswork"
                description="Domain-specific tools for scheme eligibility checks and real-time data lookups. The agent gracefully handles API failures instead of hallucinating answers."
              />
              <FeatureCard
                tag="Outbound"
                title="Reaching Out First"
                description="Outbound calling via Twilio to proactively remind users before scheme deadlines, always opening with who is calling and how to opt out."
              />
              <FeatureCard
                tag="Escalation"
                title="Knowing When to Ask for Help"
                description={
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Handoff to a human with explicit consent, providing short, privacy-safe summaries and unique reference IDs.</p>
                    <DemoLink url="https://www.linkedin.com/posts/gaurkrishna_voiceforbharat-voiceforbharat-murfai-activity-7493365613957124096-zmXN" />
                  </>
                }
              />
              <FeatureCard
                tag="Analytics"
                title="Measuring What Matters"
                description={
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Real-time analytics dashboard tracking call outcomes automatically. No sensitive data (OTPs, PINs, transcripts) ever shown.</p>
                    <img src="/analyticsimg.png" alt="Analytics dashboard" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
                  </>
                }
              />
              <FeatureCard
                tag="Multi-Agent"
                title="Bringing in a Specialist"
                description={
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>A dedicated Government Schemes Specialist agent handles complex queries, with full conversation context passed along seamlessly.</p>
                    <img src="/agentconnectingtodiffagent.png" alt="Multi-agent handoff" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
                    <DemoLink url="https://www.linkedin.com/posts/gaurkrishna_voiceforbharat-voiceforbharat-murfai-ugcPost-7494129563820814336-x2af" />
                  </>
                }
              />
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--paper-alt)', borderRadius: '8px', border: '1px solid var(--mist)' }}>
              <h3 style={{ marginTop: 0 }}>The 10-Day Journey</h3>
              <Timeline items={timelineItems} />
            </div>

            <WaveformRule />

            <h2 id="challenges">5. Challenges I Ran Into (and How I Solved Them)</h2>

            <h3>Challenge: Code-switching detection</h3>
            <p><strong>What happened:</strong> Early on, the agent misdetected Hinglish sentences as pure English, causing the wrong TTS voice to trigger mid-response.</p>
            <p><strong>What I tried:</strong> Relying on Devanagari script detection alone — worked for pure Hindi but missed Hinglish written in Roman script.</p>
            <p><strong>What fixed it:</strong> Layering in the curated 150+ word financial/Hinglish dictionary alongside script detection, plus switching Deepgram to <code>language="multi"</code>.</p>

            <h3>Challenge: Tool-calling reliability</h3>
            <p><strong>What happened:</strong> The LLM sometimes tried to answer scheme-eligibility questions from "memory" instead of calling the eligibility tool, risking outdated or wrong info.</p>
            <p><strong>What fixed it:</strong> Rewriting tool descriptions to be extremely explicit about when to invoke each tool, and adding a guardrail instruction to never answer eligibility questions without calling the tool first.</p>

            <WaveformRule />

            <h2 id="build-it">6. Build and Run It Yourself</h2>
            <p><strong>Prerequisites:</strong></p>
            <ul>
              <li>Python 3.10+</li>
              <li>Accounts/API keys for: LiveKit, Deepgram, Google Gemini, Murf AI (Falcon), Twilio</li>
            </ul>

            <CodeBlock code={`# Step 1 — Clone the starter
git clone https://github.com/KrishnaGaur12/murf-livekit-starter
cd murf-livekit-starter

# Step 2 — Install dependencies
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt`} language="bash" />

            <p><strong>Step 3 — Add your API keys safely</strong></p>
            <CodeBlock code={`LIVEKIT_URL=your_livekit_url
LIVEKIT_API_KEY=your_key
LIVEKIT_API_SECRET=your_secret
DEEPGRAM_API_KEY=your_key
GOOGLE_API_KEY=your_key
MURF_API_KEY=your_key`} language="env" />

            <blockquote>
              Never publish your .env file, API keys, phone numbers, or real caller data in your repo or blog post.
            </blockquote>

            <CodeBlock code={`# Step 4 — Run the LiveKit server
./livekit-server --dev`} language="bash" />
            <div style={{ marginTop: '-1.5rem', marginBottom: '2rem' }}>
              <img src="/livekit-server-dev.png" alt="LiveKit Server starting" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
            </div>

            <CodeBlock code={`# Step 5 — Run the backend agent
uv run python src/agent.py dev`} language="bash" />
            <div style={{ marginTop: '-1.5rem', marginBottom: '2rem' }}>
              <img src="/terminal-agent.png" alt="Backend Agent Active" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
            </div>

            <CodeBlock code={`# Step 6 — Run the frontend
pnpm dev`} language="bash" />
            <div style={{ marginTop: '-1.5rem', marginBottom: '2rem' }}>
              <img src="/terminal-frontend.png" alt="Next.js Frontend starting" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--mist)' }} />
            </div>

            <p><strong>Example: A minimal tool definition</strong></p>
            <CodeBlock code={`@function_tool
async def check_scheme_eligibility(scheme_name: str, user_income: int, state: str):
    """Check whether a user is eligible for a government scheme.
    Call this whenever a user asks if they qualify for a scheme —
    never guess eligibility from general knowledge."""
    # ... lookup logic here
    return {"eligible": True, "documents_required": [...]}`} language="python" />

            <WaveformRule />

            <h2 id="whats-next">7. What I'd Improve Next</h2>
            <ul>
              <li>Expand the Hinglish dictionary further and explore a lighter-weight language-ID model</li>
              <li>Add more regional languages beyond Hindi/English</li>
              <li>Reduce end-to-end latency further</li>
              <li>Add automated testing for tool-calling reliability</li>
              <li>Build a feedback loop from the analytics dashboard back into prompt/tool tuning</li>
            </ul>

            <h2 id="links">8. Links, Code, and Demos</h2>
            <ul>
              <li><strong>GitHub repo:</strong> <a href="https://github.com/KrishnaGaur12/murf-livekit-starter/tree/main" target="_blank" rel="noopener noreferrer">github.com/KrishnaGaur12/murf-livekit-starter</a></li>
              <li><strong>Connect with me:</strong> <a href="https://www.linkedin.com/in/gaurkrishna/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gaurkrishna</a></li>
            </ul>

            <p style={{ marginTop: '2rem' }}>
              Ten days ago, JanSahayak AI could barely hold a single conversation. Today it speaks two languages fluidly, remembers the people it talks to, knows when to call for backup, and can proactively reach citizens before a deadline passes. The biggest lesson wasn't any single feature — it was that trust, in a voice product, is built in the first three seconds of a call, not the thousandth line of the prompt.
            </p>
            <p>
              If you're building something similar, clone the starter, start with STT → LLM → TTS working end to end, and add one capability at a time. I'd love to hear what you build!
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <WaveformRule />
        <p style={{ color: 'var(--ink-70)', marginBottom: '2rem' }}>
          Built as part of 10 Days of Voice Agents — VoiceForBharat Edition by Murf AI,<br /> powered by Murf Falcon, the fastest Text-to-Speech API.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://github.com/KrishnaGaur12/murf-livekit-starter/tree/main" className="cta-button" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          <a href="https://www.linkedin.com/in/gaurkrishna/" className="cta-button" style={{ backgroundColor: 'var(--mist)', color: 'var(--ink)' }} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
      </footer>
    </>
  );
}

export default App;
