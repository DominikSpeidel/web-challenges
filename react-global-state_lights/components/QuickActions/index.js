import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ turnOnAllLights, turnOnAllLightsOff }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={turnOnAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnOnAllLights}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
