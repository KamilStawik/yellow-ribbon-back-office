import { useState } from 'react';
import { useFormik } from 'formik';
import {
  Alert,
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'Podaj imię';
  if (!values.lastName.trim()) errors.lastName = 'Podaj nazwisko';
  if (!values.email.trim()) errors.email = 'Podaj adres e-mail';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Sprawdź format adresu e-mail';
  return errors;
}

export default function App() {
  const [savedName, setSavedName] = useState('');
  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '' },
    validate,
    onSubmit: (values, { resetForm }) => {
      setSavedName(`${values.firstName} ${values.lastName}`);
      resetForm();
    },
  });

  return (
    <Box className="app-shell">
      <AppBar position="static" color="transparent" elevation={0} className="topbar">
        <Toolbar className="topbar-content">
          <Box className="brand-mark" aria-hidden="true">YR</Box>
          <Box>
            <Typography className="brand-name">yellow ribbon</Typography>
            <Typography className="brand-caption">PANEL ZARZĄDZANIA</Typography>
          </Box>
          <Box className="topbar-spacer" />
          <Typography className="user-badge">BO</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" component="main" className="main-content">
        <Box className="page-heading">
          <Typography className="eyebrow">BACK OFFICE · TERAPEUCI</Typography>
          <Typography component="h1" variant="h1">Zadbajmy o dobre dopasowanie.</Typography>
          <Typography color="text.secondary" className="page-description">
            Zarządzaj terapeutami i wizytami w jednym, spokojnym miejscu.
          </Typography>
        </Box>

        <Box className="content-grid">
          <Card component="section" aria-labelledby="form-title">
            <CardContent className="form-card-content">
              <Stack spacing={0.75} className="form-heading">
                <Typography className="section-kicker">KATALOG SPECJALISTÓW</Typography>
                <Typography id="form-title" component="h2" variant="h2">Dodaj terapeutę</Typography>
                <Typography color="text.secondary" variant="body2">
                  Uzupełnij podstawowe dane, aby dodać osobę do katalogu.
                </Typography>
              </Stack>

              {savedName && <Alert severity="success" role="status">Formularz zapisany dla: {savedName}</Alert>}

              <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                <Stack spacing={2.25}>
                  <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Imię"
                    autoComplete="given-name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                  />
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Nazwisko"
                    autoComplete="family-name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Adres e-mail"
                    type="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <Divider />
                  <Button type="submit" variant="contained" disableElevation disabled={formik.isSubmitting}>
                    Zapisz terapeutę
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>

          <Box component="aside" className="welcome-panel">
            <Box className="welcome-symbol" aria-hidden="true">✳</Box>
            <Typography className="section-kicker">DOBRZE, ŻE JESTEŚ</Typography>
            <Typography component="h2" variant="h2">Każda dobra wizyta zaczyna się od dobrego zespołu.</Typography>
            <Typography color="text.secondary" variant="body2">
              W tym panelu będzie można zarządzać bazą terapeutów, dostępnością i umówionymi spotkaniami.
            </Typography>
            <Box className="coming-soon">
              <span className="status-dot" />
              <Typography variant="caption">Kolejny krok: kalendarz wizyt</Typography>
            </Box>
          </Box>
        </Box>

        <Typography component="footer" className="page-footer">
          Yellow Ribbon <span>·</span> Back Office
        </Typography>
      </Container>
    </Box>
  );
}