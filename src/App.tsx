import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PaidIcon from "@mui/icons-material/Paid";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import bicicletarioPng from "../public/assets/bicicletarioHome.png";
import Header from "./components/header/Header";

export default function BoxSx() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#620682',
      },
      secondary: {
        main: '#FFE500',
      },
    },
    typography: {
      fontFamily: 'Amaranth',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Box
        sx={{
          height: '30rem',
          backgroundColor: 'coral',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingX: '6rem',
          paddingY: '3rem',
        }}
      >
        <Typography
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            fontSize: '3rem',
            width: '50%',
            textAlign: 'center',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '2.5rem',
            mt: '3.5rem',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              width: '20rem',
              backgroundColor: 'primary.main',
              padding: '3rem',
              borderRadius: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <SpeedIcon
              sx={{ color: 'secondary.main', width: '4rem', height: '4rem' }}
            />
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>

          <Box
            sx={{
              width: '20rem',
              backgroundColor: 'primary.main',
              padding: '3rem',
              borderRadius: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <PaidIcon
              sx={{ color: 'secondary.main', width: '4rem', height: '4rem' }}
            />
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>

          <Box
            sx={{
              width: '20rem',
              backgroundColor: 'primary.main',
              padding: '3rem',
              borderRadius: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <AssignmentTurnedInIcon
              sx={{ color: 'secondary.main', width: '4rem', height: '4rem' }}
            />
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ position: "relative", width: "80%", marginTop: "6rem" }}>
          <img
            src={bicicletarioPng}
            alt="oooo"
            style={{ width: "100%", borderRadius: "2rem" }}
          ></img>
          <IconButton
            aria-label="delete"
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              zIndex: 99,
              backgroundColor: "#DED7E0",
              color: "primary.main",
              width: "4rem",
              height: "4rem",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ width: "3rem", height: "3rem" }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              zIndex: 99,
              backgroundColor: "#DED7E0",
              color: "primary.main",
              width: "4rem",
              height: "4rem",
            }}
          >
            <KeyboardArrowRightIcon sx={{ width: "3rem", height: "3rem" }} />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
