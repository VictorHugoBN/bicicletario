import { Box, Grid } from '@mui/material';
import { theme } from '../../styles/theme';
import bicicletarioImage from '../../assets/bicicletarioHome.jpg';

const Galeria = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        padding: '5rem',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid container spacing={4}>
        {[1, 2, 3, 4].map((index) => (
          <Grid item xs={12} sm={6} key={index}>
            <img
              src={bicicletarioImage}
              alt={`Gallery Image ${index}`}
              style={{
                width: '100%',
                maxWidth: '1200px',
                borderRadius: '2rem',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Sombra opcional para profundidade
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Galeria;
