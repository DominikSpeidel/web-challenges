import Card from "./components/Card";

export default function App() {
  const fruits = [{
    id: 1337,
    name: '🍌 Banana',
    color: 'yellow',
  },
  
  {
    id: 1338,
    name: 'Mango',
    color: 'yellow',
  },
  
  {
    id: 1339,
    name: 'Lulo',
    color: 'green',
  },
  
  {
    id: 1340,
    name: 'Strawberry',
    color: 'red',
  },
  
  {
    id: 1341,
    name: 'Apel',
    color: 'redgreenyellow',
  }
  ];

  return (
    <ul>
    {fruits.map((fruit) => (
      <li key={fruit.id}>
      <Card name={fruit.name} color={fruit.color}/>
    </li>
    ))}
    </ul>
    );
}
