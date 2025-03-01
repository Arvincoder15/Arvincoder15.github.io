// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Articles from "../components/Articles"; // Import the Articles component

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleResume = () => {
    setResumeOpen(!resumeOpen);
  };

  return (
    <Layout>
      <Head>
        <title>Arvin Askari | Portfolio</title>
        <meta name="description" content="Portfolio of Arvin Askari - Full-Stack Developer, Data Analyst, and Computing Student at Queen's University" />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white sticky top-0 z-50 p-4 flex flex-col items-center">
        <Image
          src="/images/arvin.png"
          alt="Arvin Askari"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">Arvin Askari</h1>
        <p className="mt-2">First-Year Student | Data Analyst | Full-Stack Developer</p>
        <nav className="mt-4">
          <ul className="flex gap-4">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="container mx-auto p-4 space-y-8">
        <Section id="about" title="About Me">
          <p>Hello! I'm Arvin, a Computing Honours student at Queen’s University with a passion for data analysis, web development, and AI-driven solutions.</p>
        </Section>

        <Section id="resume" title="Resume">
          <p>Click below to view my resume.</p>
          <button onClick={toggleResume} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            {resumeOpen ? "Close Resume" : "Open Resume"}
          </button>
          {resumeOpen && (
            <div className="mt-4">
              <iframe src="/resume.pdf" width="100%" height="600" className="border rounded" />
            </div>
          )}
        </Section>

        <Projects />
        <Skills />
        <Experience />
        <Articles />  {/* Insert Articles section here */}
        <Contact />
      </main>

      <footer className="bg-gray-800 dark:bg-gray-700 text-white p-4 text-center">
        <p>© 2025 Arvin Askari. All rights reserved.</p>
      </footer>
    </Layout>
  );
}
