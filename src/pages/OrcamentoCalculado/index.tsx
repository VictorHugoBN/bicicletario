import { Box, Button, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

interface FormValues {
  comprimento: number;
  numeroBicicleta: number;
}

export const OrcamentoCalculado = () => {
  const [orcamento, setOrcamento] = useState<number>(-1);

  const validationSchema = Yup.object().shape({
    comprimento: Yup.number()
      .required('Comprimento é obrigatório')
      .positive('Comprimento deve ser um número válido')
      .typeError('Comprimento deve ser um número'),
    numeroBicicleta: Yup.number()
      .required('Comprimento é obrigatório')
      .positive('Comprimento deve ser um número válido')
      .typeError('Quantidade deve ser um número'),
  });

  const handleSubmit = (values: FormValues) => {
    const comprimento = Number(values.comprimento);
    const numeroBicicleta = Number(values.numeroBicicleta);

    if (numeroBicicleta > comprimento * 3) {
      setOrcamento(-2);
      toast.error('Erro no cálculo do orçamento');
    } else {
      setOrcamento(comprimento * numeroBicicleta * 9.99);
      toast.success('Orçamento calculado com sucesso!');
    }
    console.log(values);
  };

  return (
    <Box
      sx={{
        padding: '4rem 10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          padding: '0',
        },
      }}
    >
      <Box
        sx={{
          width: '40rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          padding: '3rem 5rem',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          [theme.breakpoints.down('md')]: {
            width: '90%',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Niramit',
            fontSize: '2rem',
            fontWeight: 700,
          }}
          align="center"
        >
          Solicitação de orçamento calculado
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Niramit',
            fontSize: '1.2rem',
          }}
          align="center"
        >
          1 metro comporta 3 bicicletas
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              justifyContent: 'center',
            },
          }}
        >
          <Formik
            initialValues={{
              numeroBicicleta: 0,
              comprimento: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '2rem',
                    [theme.breakpoints.down('md')]: {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '0',
                    },
                  }}
                >
                  <Box
                    sx={{
                      padding: '2rem 0.8rem',
                      [theme.breakpoints.down('md')]: {
                        padding: '0',
                        marginTop: '1rem',
                      },
                    }}
                  >
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
                      Comprimento total
                    </Typography>
                    <Field
                      sx={{
                        marginTop: '1rem',
                      }}
                      as={TextField}
                      name="comprimento"
                      fullWidth
                      error={touched.comprimento && !!errors.comprimento}
                      helperText={touched.comprimento && errors.comprimento}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: '2rem 0.8rem',
                      [theme.breakpoints.down('md')]: {
                        padding: '0',
                      },
                    }}
                  >
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
                    <Field
                      sx={{
                        marginTop: '1rem',
                      }}
                      as={TextField}
                      name="numeroBicicleta"
                      fullWidth
                      error={
                        touched.numeroBicicleta && !!errors.numeroBicicleta
                      }
                      helperText={
                        touched.numeroBicicleta && errors.numeroBicicleta
                      }
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                    [theme.breakpoints.down('md')]: {
                      justifyContent: 'center',
                      alignSelf: 'center',
                    },
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      width: '8rem',
                      textTransform: 'none',
                      fontSize: '1.2rem',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      ':hover': {
                        backgroundColor: 'primary.light',
                      },
                      [theme.breakpoints.down('md')]: {
                        marginTop: '2rem',
                      },
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
        {orcamento >= 0 && (
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 500,
              fontFamily: 'Niramit',
              textAlign: 'center',
              lineHeight: '1.8rem',
              marginTop: '2rem',
            }}
          >
            Resultado:{' '}
            <strong>R${orcamento.toFixed(2).replace('.', ',')}</strong>
          </Typography>
        )}
        {orcamento === -2 && (
          <Typography
            sx={{
              fontSize: '1rem',
              fontFamily: 'Niramit',
              fontWeight: 500,
              color: 'red',
              textAlign: 'center',
              lineHeight: '1.8rem',
              marginTop: '2rem',
            }}
          >
            Erro no cálculo do orçamento: verifique se a condição de espaço e
            número de bicicletas está sendo cumprida
          </Typography>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
};
