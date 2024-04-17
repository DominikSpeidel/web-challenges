import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import Button from "../components/BoxWithStyledComponents";
export default function HomePage() {
  return (
    <div>
      <div>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
      </div>
      <div>
        <Button />
        <Button $variant="black" />
      </div>
    </div>
  );
}
