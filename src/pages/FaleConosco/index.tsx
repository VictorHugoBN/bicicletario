import { Box, Typography, Button, Input, TextField } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import bicicletarioImage from '../../../public/assets/bicicletarioHome.jpg';

const FaleConosco = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: Record<string, string> = {};

    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    console.log(formValues);
  };

  return (
    <>
      <Box sx={{ position: 'relative', marginTop: '100px' }}>
        <img
          src={bicicletarioImage}
          alt="oooo"
          style={{ width: '100%', height: '400px', filter: 'brightness(0.5)' }}
        />
        <Box
          sx={{
            width: '80%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontSize: '5rem',
                color: 'white',
                lineHeight: '3.5rem',
                fontFamily: 'Niramit',
                fontWeight: 500,
              }}
            >
              Central de
            </Typography>
            <Typography
              sx={{
                fontSize: '5rem',
                color: 'white',
                lineHeight: '4.3rem',
                marginTop: '1rem',
                fontStyle: 'italic',
                fontWeight: 700,
              }}
            >
              Atendimento
            </Typography>
          </Box>
          <img
            src="../../../public/assets/Logo.png"
            alt="Logo"
            style={{
              // display: { xs: 'flex', md: 'none' },
              marginRight: '',
              marginLeft: '0.5%', // Ajuste o espaçamento direito conforme necessário
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              height: 'auto', // Ajuste a altura conforme necessário
              maxWidth: '400px', // Garante que a imagem não exceda a largura máxima
              cursor: 'pointer',
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '4rem',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontFamily: 'Niramit' }}>
          Entre em contato com nossa Central de Atendimento
        </Typography>
        <Typography sx={{ fontSize: '2rem', fontFamily: 'Niramit' }}>
          SAC: <strong>+55 62 99900-9900</strong>
        </Typography>
        <Typography sx={{ fontSize: '2rem', fontFamily: 'Niramit' }}>
          ou nos envie uma mensagem
        </Typography>
        <Button
          type="submit"
          startIcon={<WhatsAppIcon sx={{ width: '2rem', height: '2rem' }} />}
          sx={{
            background: 'green',
            color: 'white',
            width: '13rem',
            height: '3rem',
            textTransform: 'none',
            fontSize: '1.5rem',
            marginTop: '1rem',
          }}
        >
          WhatsApp
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '6rem',
        }}
      >
        <Box
          sx={{
            width: '24rem',
            padding: '3rem 4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexDirection: 'column',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <Input
              required
              name="nome"
              placeholder="Nome"
              fullWidth
              sx={{ fontSize: '1.25rem' }}
            />
            <Input
              required
              name="email"
              placeholder="E-mail"
              fullWidth
              sx={{ fontSize: '1.25rem' }}
            />
            <Input
              required
              name="numero"
              placeholder="Número"
              fullWidth
              sx={{ fontSize: '1.25rem' }}
            />
            <TextField
              required
              name="mensagem"
              placeholder="Mensagem"
              variant="standard"
              multiline
              fullWidth
              sx={{ fontSize: '1.25rem' }}
            />
            <Button
              type="submit"
              sx={{
                width: '8rem',
                textTransform: 'none',
                fontSize: '1.2rem',
                backgroundColor: 'primary.main',
                color: 'white',
                marginTop: '2rem',
                ':hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default FaleConosco;
