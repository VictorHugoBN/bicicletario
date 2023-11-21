import { Box, Button, Input, TextField } from '@mui/material';

export const VisitaTecnicaUI = () => {
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '150px',
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
