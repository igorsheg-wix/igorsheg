import styled, { keyframes } from "styled-components";
import Flex from "@components/Flex";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Fade = styled(Flex)<{ timing?: string }>`
  animation: ${fadeIn} ${(props) => props.timing || "680ms"}
    cubic-bezier(0.19, 1, 0.22, 1);
`;

export default Fade;
