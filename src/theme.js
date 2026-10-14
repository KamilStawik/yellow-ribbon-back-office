import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#435c47', dark: '#314635' },
    secondary: { main: '#c78760' },
    background: { default: '#f6f5f2', paper: '#ffffff' },
    text: { primary: '#252823', secondary: '#73776f' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 650, letterSpacing: '-0.045em' },
    h2: { fontSize: '1.25rem', fontWeight: 650, letterSpacing: '-0.02em' },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiButton: { styleOverrides: { root: { minHeight: 44, borderRadius: 10, paddingInline: 18 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiCard: { styleOverrides: { root: { border: '1px solid #e9e8e2', boxShadow: '0 12px 36px rgba(39, 48, 39, 0.045)' } } },
  },
});

export default theme;