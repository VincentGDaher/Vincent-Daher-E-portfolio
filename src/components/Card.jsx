export default function Card({ title, tag, children }) {
  return (
    <article className="card">
      {tag ? <span className="tag">{tag}</span> : null}
      <h3>{title}</h3>
      <div className="card__body">{children}</div>
    </article>
  );
}
