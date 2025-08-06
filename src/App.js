import { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SmartToyIcon from '@mui/icons-material/SmartToy';

import routes from "routes";
import { useArgonController, setMiniSidenav, setOpenConfigurator } from "context";

import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import chatFlow from "data/chatFlow.json";
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";

export default function App() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
const [chatId, setChatId] = useState("start"); 
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentInput.trim() === '') return;

    const userMessage = { sender: 'user', text: currentInput.trim() };
    setChatMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      const botReply = { sender: 'bot', text: 'Thank you!' };
      setChatMessages(prev => [...prev, botReply]);
      setIsBotTyping(false);
    }, 1000);
  };

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const toggleChatbot = () => {
    setShowChatbot(prev => !prev);
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) return getRoutes(route.collapse);
      if (route.route) return <Route exact path={route.route} element={route.component} key={route.key} />;
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
      onClick={toggleChatbot}
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

  const TypingIndicator = () => (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '8px' }}>
      <div style={{ display: 'inline-flex', gap: '4px', height: '12px', paddingLeft: '10px' }}>
        <div style={dotStyle(0)} />
        <div style={dotStyle(0.2)} />
        <div style={dotStyle(0.4)} />
      </div>
    </div>
  );

  const dotStyle = (delay) => ({
    width: '6px',
    height: '6px',
    backgroundColor: '#aaa',
    borderRadius: '50%',
    animation: `blink 1.4s infinite both`,
    animationDelay: `${delay}s`,
  });

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName="Intern Portal"
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
            brandName="Intern Portal"
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
          <ArgonBox textAlign="center" fontWeight="bold" fontSize="16px" mb={1}>
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
            {isBotTyping && <TypingIndicator />}
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
                border: '1px solid #ccc',
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

      <style>{`
        @keyframes blink {
          0% { opacity: 0.2; transform: scale(1); }
          20% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(1); }
        }
      `}</style>
    </ThemeProvider>
  );
}
