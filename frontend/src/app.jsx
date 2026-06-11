import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/api/contact', form);
      setStatus('✅ Message sent! I will reply soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('❌ Error sending message. Please email me directly: sinthumulekhathutshelo2@gmail.com');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">Khathutshelo Sinthumule</span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold">Software Engineer &<br />Oracle PL/SQL Developer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Banking | Global Markets | Insurance</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition">Contact Me</a>
            <a href="#" className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-6 py-3 rounded-full transition">Download CV</a>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer – Standard Bank SA</h3>
              <p className="text-gray-500 dark:text-gray-400">Global Markets FEDS | Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>BAU support for FX trading system, incident resolution, CAB deployments</li>
                <li>Oracle PL/SQL optimization, Control‑M monitoring, Geneos ITRS</li>
                <li>Production deployments, root cause analysis, audit compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">System Engineer – Nedbank</h3>
              <p className="text-gray-500 dark:text-gray-400">Jul 2025 – Nov 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Automated data workflows using Oracle Scheduler and Bash scripts</li>
                <li>Built Power BI dashboards for risk analytics</li>
                <li>PL/SQL development, performance tuning, change management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">IT Systems Developer – Liberty Group SA</h3>
              <p className="text-gray-500 dark:text-gray-400">Apr 2023 – Jun 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Actuarial database solutions, query performance tuning (50% improvement)</li>
                <li>IFRS 17 compliance, materialized views for real‑time risk simulations</li>
                <li>Collaborated with actuaries and migrated legacy systems to Oracle 19c</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Oracle PL/SQL', 'Python', 'FastAPI', 'React', 'Tailwind', 'Docker', 'Control-M', 'Geneos ITRS', 'Azure', 'Power BI'].map(skill => (
              <span key={skill} className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-xl text-emerald-600">FX Trade & Risk System</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Full‑stack app with React, FastAPI, Oracle PL/SQL – real‑time trade capture, position keeping, and risk limit monitoring.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">FastAPI</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Oracle PL/SQL</span>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-xl text-emerald-600">Clean Speech AI</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Python audio profanity filter using TensorFlow and Librosa. Background job for content moderation.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Audio Processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm({...form, subject: e.target.value})}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your message..."
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition w-full md:w-auto"
            >
              Send Message
            </button>
            {status && <p className="text-sm mt-2 text-center md:text-left">{status}</p>}
          </form>
        </section>
      </main>

      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700 mt-10">
        <p className="text-gray-600 dark:text-gray-400">© 2026 Khathutshelo Sinthumule – Built with React, FastAPI, Oracle</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-emerald-600">LinkedIn</a>
          <a href="#" className="hover:text-emerald-600">GitHub</a>
          <a href="#" className="hover:text-emerald-600">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;