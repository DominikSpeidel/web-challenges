import "./styles.css";

export default function App() {
  return <Greeting name="Werner" isCoach/>;
}

function Greeting({name, isCoach}) {
return <h2>Hello {isCoach ? "Coach" : name}</h2>
}
