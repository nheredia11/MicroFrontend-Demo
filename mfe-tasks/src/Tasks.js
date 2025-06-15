import React from 'react';

export default function Tasks() {
  const [tasks] = React.useState([
    { id: 1, title: 'Diseñar wireframes', done: false },
    { id: 2, title: 'Configurar CI/CD',  done: true }
  ]);

  return (
    <section>
      <h2>✅ Tasks</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.done ? '✔️' : '◻️'} {t.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
