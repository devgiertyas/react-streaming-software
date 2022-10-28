
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Star } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    title: 'Básico',
    price: '99',
    description: [
      '1 dispositivo simultâneo',
      '2 GB de armazenamento',
      'Acesso online',
      '',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
  {
    title: 'Padrão',
    subheader: 'Popular',
    price: '99',
    description: [
      '3 dispositivos simultâneos',
      '10 GB de armazenamento',
      'Acesso offline',
      '',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'contained',
  },
  {
    title: 'Empresarial',
    price: '99',
    description: [
      '10 dispositivos simultâneos',
      '30 GB de armazenamento',
      'Acesso offline',
      '',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Planos
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Escolha o melhor plano para você.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <Star /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mês
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} onClick={handleClick}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}