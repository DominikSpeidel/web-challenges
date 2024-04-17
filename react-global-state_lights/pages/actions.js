import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ turnOnAllLights, turnOnAllLightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnOnAllLights={turnOnAllLights}
        turnOnAllLightsOff={turnOnAllLightsOff}
      />
    </>
  );
}
