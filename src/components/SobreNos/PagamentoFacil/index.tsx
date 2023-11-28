import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PixSvg } from '../../../utils/icons/Pix';
import { MastercardSvg } from '../../../utils/icons/Mastercard';
import { AmericanExpressSvg } from '../../../utils/icons/AmericanExpress';
import { MaestroSvg } from '../../../utils/icons/Maestro';
import { VisaSvg } from '../../../utils/icons/Visa';
import { HipercardSvg } from '../../../utils/icons/Hipercard';

export const PagamentoFacil = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
          padding: '5rem',
        },
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: '2rem' }} align={'center'}>
          Facilidade no Pagamento
        </Typography>
        <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.4rem' }}>
          Aceitamos PIX e as principais bandeiras de cartão de crédito e débito.
        </Typography>
        <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.4rem' }}>
          Parcelamos em até 12x sem juros.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: '1fr',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'stretch',
          gap: '1rem',
          [theme.breakpoints.down('lg')]: {
            marginTop: '2rem',
          },
        }}
      >
        <PixSvg />
        <MastercardSvg />
        <AmericanExpressSvg />
        <MaestroSvg />
        <HipercardSvg />
        <VisaSvg />
      </Box>
    </Box>
  );
};
