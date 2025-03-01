// components/Section.js
export default function Section({ id, title, children }) {
    return (
      <section id={id} className="p-6 bg-white dark:bg-gray-800 rounded shadow my-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {children}
      </section>
    );
  }
  