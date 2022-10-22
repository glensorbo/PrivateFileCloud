import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../GlobalStyles';

export const LinkText = styled(Link)`
  color: ${theme.colors};
  font-size: ${theme.fontSize.header};
  text-decoration: none;
  padding: 0px;
  margin: 0px;
`;
