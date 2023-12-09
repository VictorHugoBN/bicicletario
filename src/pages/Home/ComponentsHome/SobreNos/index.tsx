import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import SpeedIcon from '@mui/icons-material/Speed';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const SobreNos = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '4rem',
          }}
        >
          {/* Responsive header text */}
          <Typography
            variant="h2"
            align="center"
            fontWeight={600}
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: theme.palette.primary.main,
            }}
          >
            Conheça Nossa Empresa de Bicicletários
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            padding: { xs: '2rem 0', md: '4rem 0' },
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Changes direction based on screen size
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              [theme.breakpoints.down('lg')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                width: '25%',
                maxHeight: '30rem',
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
                [theme.breakpoints.down('lg')]: {
                  width: '80%',
                },
              }}
            >
              <SpeedIcon
                sx={{
                  color: 'white',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Na nossa empresa, priorizamos a agilidade e a eficiência em
                todas as etapas do processo. Desde o planejamento até a
                instalação de bicicletários, nos empenhamos para garantir que
                cada projeto seja entregue rapidamente, sem comprometer a
                qualidade. Entendemos a importância de cumprir prazos,
                especialmente em ambientes urbanos dinâmicos onde cada segundo
                conta.
              </Typography>
            </Box>

            <Box
              sx={{
                width: '25%',
                maxHeight: '30rem',
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
                [theme.breakpoints.down('lg')]: {
                  width: '80%',
                },
              }}
            >
              <PaidIcon
                sx={{
                  color: 'white',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Oferecemos soluções de bicicletários que combinam qualidade
                superior e preços acessíveis. Nosso foco está em fornecer o
                melhor custo-benefício do mercado, sem sacrificar a durabilidade
                e a funcionalidade dos nossos produtos. Com opções variadas para
                atender a diferentes orçamentos, nossa empresa se destaca por
                proporcionar economia e eficiência para clientes de todos os
                portes.
              </Typography>
            </Box>

            <Box
              sx={{
                width: '25%',
                maxHeight: '30rem',
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
                [theme.breakpoints.down('lg')]: {
                  width: '80%',
                },
              }}
            >
              <AssignmentTurnedInIcon
                sx={{
                  color: 'white',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Nossa empresa é sinônimo de compromisso com a excelência. Cada
                bicicletário que projetamos e instalamos passa por rigorosos
                padrões de qualidade para garantir a total satisfação do
                cliente. Acreditamos que a atenção aos detalhes e o foco na
                durabilidade e segurança são fundamentais para criar soluções
                que não apenas atendam, mas superem as expectativas dos nossos
                clientes.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SobreNos;
