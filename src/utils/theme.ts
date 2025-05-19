import { createTheme, type ThemeOptions } from "@mui/material/styles";
import type { PaletteOptions } from "@mui/material";

// Extiende las interfaces de MUI
declare module "@mui/material/styles" {
  interface Palette {
    drawer: {
      background: string;
      text: string;
    };
    card: {
      background: string;
      border: string;
    };
  }

  interface PaletteOptions {
    drawer?: {
      background: string;
      text: string;
    };
    card?: {
      background: string;
      border: string;
    };
  }

  interface Theme {
    custom: {
      borderRadius: string;
      layoutPadding: number;
    };
  }

  interface ThemeOptions {
    custom?: {
      borderRadius: string;
      layoutPadding: number;
    };
  }
}

// Paleta clara
const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1976d2",
  },
  secondary: {
    main: "#9c27b0",
  },
  background: {
    default: "#f4f6f8",
    paper: "#ffffff",
  },
  text: {
    primary: "#212121",
    secondary: "#666666",
  },
  drawer: {
    background: "#2c3e50",
    text: "#ffffff",
  },
  card: {
    background: "#ffffff",
    border: "#e0e0e0",
  },
};

const theme: ThemeOptions = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: "Inter, sans-serif",
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
    },
  },
  custom: {
    borderRadius: "12px",
    layoutPadding: 24,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: lightPalette.drawer?.background,
          color: lightPalette.drawer?.text,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: lightPalette.drawer?.text,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: lightPalette.drawer?.text,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: lightPalette.card?.background,
          border: `1px solid ${lightPalette.card?.border}`,
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;
