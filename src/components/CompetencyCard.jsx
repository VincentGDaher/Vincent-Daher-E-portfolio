export default function CompetencyCard({ title, evidence, reflection, growth }) {
  return (
    <article className="competency-card">
      <h3>{title}</h3>
      <dl>
        <div>
          <dt>Evidence</dt>
          <dd>{evidence}</dd>
        </div>
        <div>
          <dt>Reflection</dt>
          <dd>{reflection}</dd>
        </div>
        <div>
          <dt>Growth</dt>
          <dd>{growth}</dd>
        </div>
      </dl>
    </article>
  );
}
