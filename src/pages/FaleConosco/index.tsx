import { Box, Typography, Button } from '@mui/material';
import * as Yup from 'yup';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import bicicletarioImage from '../..//assets/img_home.jpg';
import { useTheme } from '@mui/material/styles';
import Logo from '../..//assets/Logo.png';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface FormValues {
  nome: string;
  email: string;
  numero: string;
  mensagem: string;
}

const FaleConosco = () => {
  const theme = useTheme();
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const part1Animation = useScrollAnimation();
  const part2Animation = useScrollAnimation();
  const part3Animation = useScrollAnimation();

  const wppMessage = `Olá, gostaria de saber mais sobre os serviços da Bicicletario Fácil - Rio De Janeiro`;

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={part1Animation.controls}
        ref={part1Animation.ref}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <img
            src={bicicletarioImage}
            alt="oooo"
            style={{
              width: '100%',
              height: '400px',
              filter: 'brightness(0.5)',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
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
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
              },
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
                  [theme.breakpoints.down('md')]: {
                    fontSize: '3rem',
                    lineHeight: '1.2rem',
                  },
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
                  [theme.breakpoints.down('md')]: {
                    fontSize: '3rem',
                    lineHeight: '2rem',
                  },
                }}
              >
                Atendimento
              </Typography>
            </Box>
            <img
              src={Logo}
              alt="Logo"
              style={{
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
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={part2Animation.controls}
        ref={part2Animation.ref}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '4rem',
            [theme.breakpoints.down('md')]: {
              padding: '3rem 4rem 1rem',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '2rem',
              fontFamily: 'Niramit',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.6rem',
              },
            }}
          >
            Entre em contato com nossa Central de Atendimento
          </Typography>
          <Typography
            sx={{
              fontSize: '2rem',
              fontFamily: 'Niramit',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.6rem',
              },
            }}
          >
            SAC: <strong>+55 21 98510-0734</strong>
          </Typography>
          <Typography
            sx={{
              fontSize: '2rem',
              fontFamily: 'Niramit',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.6rem',
              },
            }}
          >
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
            onClick={() => {
              const formattedUrl = wppMessage.replace(/ /g, '%20');
              window.open(
                `https://api.whatsapp.com/send?phone=5521985100734&text=${formattedUrl}`,
                '_blank',
              );
            }}
          >
            WhatsApp
          </Button>
        </Box>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={part3Animation.controls}
        ref={part3Animation.ref}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '6rem',
            [theme.breakpoints.down('md')]: {
              marginTop: '0rem',
            },
          }}
        >
          {/* <Box
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
            <Formik
              initialValues={{
                nome: '',
                email: '',
                numero: '',
                mensagem: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    sx={{
                      marginTop: '1rem',
                    }}
                    as={TextField}
                    label="Nome"
                    name="nome"
                    fullWidth
                    error={touched.nome && !!errors.nome}
                    helperText={touched.nome && errors.nome}
                  />
                  <Field
                    sx={{
                      marginTop: '1rem',
                    }}
                    as={TextField}
                    label="E-mail"
                    name="email"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    sx={{
                      marginTop: '1rem',
                    }}
                    as={TextField}
                    label="Número"
                    name="numero"
                    fullWidth
                    error={touched.numero && !!errors.numero}
                    helperText={touched.numero && errors.numero}
                  />
                  <Field
                    sx={{
                      marginTop: '1rem',
                    }}
                    as={TextField}
                    label="Mensagem"
                    name="mensagem"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      style: {
                        resize: 'both',
                        minHeight: '100px',
                      },
                    }}
                    error={touched.mensagem && !!errors.mensagem}
                    helperText={touched.mensagem && errors.mensagem}
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
                </Form>
              )}
            </Formik>
          </Box> */}
        </Box>
      </motion.div>
    </>
  );
};

export default FaleConosco;
