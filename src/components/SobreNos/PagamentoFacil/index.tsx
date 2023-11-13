import { Box, Typography } from '@mui/material';

import { PixSvg } from '../../../utils/icons/Pix';
import { MastercardSvg } from '../../../utils/icons/Mastercard';
import { AmericanExpressSvg } from '../../../utils/icons/AmericanExpress';
import { MaestroSvg } from '../../../utils/icons/Maestro';
import { VisaSvg } from '../../../utils/icons/Visa';
import { HipercardSvg } from '../../../utils/icons/Hipercard';

export const PagamentoFacil = () => {
  return (
    <Box
      sx={{
        padding: '5rem 10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: '2rem' }}>
          Facilidade no Pagamento
        </Typography>
        <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.4rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: '1fr',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '2rem',
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
