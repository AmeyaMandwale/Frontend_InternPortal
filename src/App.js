/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo, useRef } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Argon Dashboard 2 MUI themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SmartToyIcon from '@mui/icons-material/SmartToy';

// Argon Dashboard 2 MUI routes
import routes from "routes";

// Argon Dashboard 2 MUI contexts
import { useArgonController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

// Icon Fonts
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";

export default function App() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
const [showChatbot, setShowChatbot] = useState(false);
const [chatMessages, setChatMessages] = useState([]); // { sender: 'user' | 'bot', text: string }
const [currentInput, setCurrentInput] = useState('');
const messagesEndRef = useRef(null);
useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [chatMessages]);

const handleSendMessage = (e) => {
  e.preventDefault();

  if (currentInput.trim() === '') return;

  const userMessage = { sender: 'user', text: currentInput.trim() };
  const botReply = { sender: 'bot', text: 'Thank you!' };

  setChatMessages(prev => [...prev, userMessage, botReply]);
  setCurrentInput('');
};

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

const toggleChatbot = () => {
  setShowChatbot(prev => !prev);
};

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
const robotButton = (
  <ArgonBox
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="3.5rem"
    height="3.5rem"
    bgColor="white"
    shadow="sm"
    borderRadius="50%"
    position="fixed"
    right="2rem"
    bottom="6.5rem"
    zIndex={99}
    color="dark"
    sx={{ cursor: "pointer" }}
    onClick={toggleChatbot} // Toggle visibility
  >
    <SmartToyIcon fontSize="medium" color="inherit" />
  </ArgonBox>
);

  const configsButton = (
    <ArgonBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </ArgonBox>
  );

 return direction === "rtl" ? (
  <CacheProvider value={rtlCache}>
    <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName="Argon Dashboard 2 PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {robotButton}
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  </CacheProvider>
) : (
  <ThemeProvider theme={darkMode ? themeDark : theme}>
    <CssBaseline />
    {layout === "dashboard" && (
      <>
        <Sidenav
          color={sidenavColor}
          brand={darkSidenav || darkMode ? brand : brandDark}
          brandName="Argon Dashboard 2 PRO"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
        <Configurator />
        {robotButton} 
        {configsButton}
      </>
    )}
   {showChatbot && (
  <ArgonBox
    position="fixed"
    bottom="10.5rem"
    right="2rem"
    width="400px"
    height="400px"
    bgColor="white"
    boxShadow={5}
    borderRadius="lg"
    p={2}
    zIndex={100}
    display="flex"
    flexDirection="column"
  >
    <ArgonBox
      textAlign="center"
      fontWeight="bold"
      fontSize="16px"
      mb={1}
    >
      AI Assistant
    </ArgonBox>
    <hr style={{ margin: '0 0 10px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />
    <ArgonBox
      flex="1"
      overflow="auto"
      mb={1}
      sx={{
        '&::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
      }}
    >
      {chatMessages.map((msg, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: '8px',
          }}
        >
          <div
            style={{
              backgroundColor: msg.sender === 'user' ? '#007bff' : '#f1f1f1',
              color: msg.sender === 'user' ? 'white' : '#333',
              padding: '10px 14px',
              borderRadius: '16px',
              maxWidth: '80%',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </ArgonBox>
    <ArgonBox component="form" onSubmit={handleSendMessage} display="flex">
      <input
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
    </ArgonBox>
  </ArgonBox>
)}
    {layout === "vr" && <Configurator />}
    <Routes>
      {getRoutes(routes)}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </ThemeProvider>
);
}
