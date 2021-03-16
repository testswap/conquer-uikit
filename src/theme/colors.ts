import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#266bbf",
  primaryBright: "#1763bf",
  primaryDark: "#054ea8",
  secondary: "#1c76e6",
  success: "#31D0AA",
  warning: "#6baeff",
};

export const brandColors = {
  binance: "#1c76e6",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#3a9bc2",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#004293",
  textDisabled: "#adc1c9",
  textSubtle: "#0e58b3",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#046fbf",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
