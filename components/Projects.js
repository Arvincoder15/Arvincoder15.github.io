// components/Projects.js
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        <div className="p-4 border rounded hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Lease Me Before You Go Go | QHACKS Project</h3>
          <p>
            Web application simulating real-world landlord interactions using Flask, React, and AI-powered chatbots.
          </p>
          <a href="https://github.com/Arvincoder15/QHacks-Backend" target="_blank" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
        </div>
        <div className="p-4 border rounded hover:shadow-lg transition">
          <h3 className="text-xl font-bold">Police Dodger Game | Grade 12 Project</h3>
          <p>Python-based arcade game developed using Pygame and Tkinter.</p>
          <a href="https://github.com/Arvincoder15/Police-Dodger-Game" target="_blank" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
