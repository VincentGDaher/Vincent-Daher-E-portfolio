export default function ReflectionBox({ title, text }) {
  return (
    <aside className="reflection-box">
      <span>Reflective note</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </aside>
  );
}
