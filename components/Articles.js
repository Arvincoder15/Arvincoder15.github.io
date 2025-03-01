// components/Articles.js
import Section from "./Section";

export default function Articles() {
  return (
    <Section id="published-articles" title="Published Articles">
      <div className="p-4 border rounded hover:shadow-lg transition">
        <h3 className="text-xl font-bold">
          Queen's Sports Analytics Organization (QSAO)
        </h3>
        <p>
          The Managerial Bounce at Manchester United: The History and What to Expect with Ruben Amorim
        </p>
        <a
          href="https://www.qsao-queens.com/content/2025/2/6/the-managerial-bounce-at-manchester-united-the-history-and-what-to-expect-with-ruben-amorim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read my Article
        </a>
      </div>
    </Section>
  );
}
