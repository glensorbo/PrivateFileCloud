import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import { theme } from '../../../GlobalStyles';

export const Button = styled(MuiButton)(() => ({
  width: '100%',
  textTransform: 'none',
  fontSize: 16,
  fontFamily: `${theme.fontFamily.body}`,
  height: 40,
  marginBottom: 15,
}));
