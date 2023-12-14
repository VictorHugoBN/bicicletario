import { Box, Theme, Toolbar, Typography } from '@mui/material';
import FooterLogo from '../..//assets/Bicicletário fácil Logo Principal Transparente.svg';
import { makeStyles } from '@mui/styles';
import { Routes } from '../../utils/enums/Routes';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import Instagram from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme: Theme) => ({
  footerToolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    minHeight: '300px',
  },
  footerLogo: {
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
  },
}));

const Footer = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Toolbar className={classes.footerToolbar}>
      <img src={FooterLogo} alt="Logo" className={classes.footerLogo} />
      <Box
        sx={{
          [theme.breakpoints.down('lg')]: {
            display: 'none',
          },
        }}
      >
        <Box>
          {Routes.values.map((page) => (
            <Typography key={page} onClick={() => navigate(`/${page}`)}>
              <Typography
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {Routes.getLabel(page)}
              </Typography>
            </Typography>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            [theme.breakpoints.down('lg')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          Nobrutec Comercio e Servicos de Serralheria e Equipamentos Eletronicos
          Eireli
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.down('lg')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          15.082.870/0001-24
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.down('lg')]: {
              fontSize: '0.8rem',
            },
          }}
        >
          brunobicicletario@gmail.com
        </Typography>
        <Typography
          sx={{
            cursor: 'pointer',
            [theme.breakpoints.down('lg')]: {
              fontSize: '0.8rem',
            },
          }}
          onClick={() => {
            window.open(`https://api.whatsapp.com/send?phone=5521985100734`);
          }}
        >
          +55 21 98510-0734
        </Typography>
        <Instagram
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: 'primary.main',
            },
          }}
          onClick={() => {
            window.open(
              `https://instagram.com/bicicletariofacil_?igshid=OGQ5ZDc2ODk2ZA==`,
            );
          }}
        ></Instagram>
      </Box>
    </Toolbar>
  );
};

export default Footer;
