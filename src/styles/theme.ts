import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#3b4247",
  textColor: "#c7c7c7",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: `rgb(10,189,168)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.1)",


  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#fff0f5",
  textColor: "#333",
  infoIconColor: "#777",
  iconColor: "#white",
  accentColor1: `rgb(255,0,0)`,
  accentColor2: "#1abc9c",
  shadowColor: "rgba(0, 0, 0, 0.1)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "18px",
  textSizeTextL900: "16px",
  textSizeTextL700: "16px",
  textSizeTextL500: "16px",

  textSizeTextM: "14px",
  textSizeTextM900: "12px",
  textSizeTextM700: "12px",
  textSizeTextM500: "12px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "10px",
};


export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 2s;
    color: ${(props) => props.theme.textColor};
  }
`;
