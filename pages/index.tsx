import Card from '../components/Card';

export default function Home() {
  return (
    <main>
      <h1>
        Hello from <span className="text-gradient">Zuby.js</span> site
      </h1>
      <p className="instructions">
        To get started, open the directory <code>./pages</code> in your project and edit{' '}
        <code>index</code> file.
      </p>
      <ul role="list" className="link-card-grid">
        <Card
          href="https://zuby.futrou.com"
          title="Documentation"
          body="Find config API, tips and tricks, and more in the Zuby.js docs."
        />
        <Card
          href="https://zuby.futrou.com/reference/configuration"
          title="API Reference"
          body="Find config API, tips and tricks, and more in the Zuby.js API docs."
        />
      </ul>
    </main>
  );
}
