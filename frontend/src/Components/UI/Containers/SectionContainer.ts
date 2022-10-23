import styled from 'styled-components';
import { device } from '../../../GlobalStyles';

export const SectionContainer = styled.section`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: 'white';
  color: 'white';
  @media ${device.mobileM} {
  }
`;
