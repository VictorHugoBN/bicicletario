import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export const OrcamentoCalculado = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: '4rem 10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '40rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
          padding: '3rem 5rem',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>
          Solicitação de orçamento calculado
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ padding: '2rem 4rem' }}>
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                fontFamily: 'Niramit',
                textAlign: 'center',
                lineHeight: '1.8rem',
                marginTop: '1rem',
              }}
            >
              Comprimento toltal
            </Typography>
            <OutlinedInput
              id="orcamento-calculado-comprimeno"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="Comprimento Total"
              type="number"
              size="small"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{ marginTop: '1rem', width: '100%' }}
            />
          </Box>
          <Box sx={{ padding: '2rem 0.8rem' }}>
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                fontFamily: 'Niramit',
                textAlign: 'center',
                lineHeight: '1.8rem',
                marginTop: '1rem',
              }}
            >
              Quantidade de bicicletas
            </Typography>
            <TextField
              id="orcamento-calculado-quantidadeBicicletas"
              variant="outlined"
              type="number"
              sx={{ marginTop: '1rem', width: '100%' }}
              size="small"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
          }}
        >
          <Button
            sx={{
              fontFamily: 'Niramit',
              fontSize: '1.3rem',
              fontWeight: 500,
              textTransform: 'none',
              width: '10rem',
              marginTop: '1.5rem',
              backgroundColor: 'primary.main',
              color: 'white',
              ':hover': {
                backgroundColor: 'primary.light',
              },
            }}
            onClick={() => navigate('/')}
          >
            Confirmar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
