import "./Card.css";

export default function Card({ name, color}) {
  return (
  <div>
  <p className="card" style={{backgroundColor: color}}>{name}</p>
  </div>)
;
}
