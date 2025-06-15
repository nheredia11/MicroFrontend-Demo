import React from 'react';

export default function Projects() {
  const [projects] = React.useState([
    { id: 1, name: 'Micro‑Frontend POC' },
    { id: 2, name: 'User Module' }
  ]);

  return (
    <section>
      <h2>🚀 Projects</h2>
      <ul>{projects.map(p => <li key={p.id}>{p.name}</li>)}</ul>
    </section>
  );
}
