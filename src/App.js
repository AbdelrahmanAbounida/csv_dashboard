import './App.css';
import { useMode, ColorModeContext } from './assets/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar, CustomSidebar } from './pages/globals';
import { Routes,Route } from 'react-router-dom';
import {Default, Home, Profile,Excel} from './pages'
import { ProSidebarProvider } from 'react-pro-sidebar';
import {Box} from '@mui/material';
function App() {
  const [theme, colorMode] = useMode()

  return (

    <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    
                        <ProSidebarProvider>
                          
                        <Box className="App" >
                          
                          <CustomSidebar />
                          <Box sx={{width:"80%"}}>
                              <Navbar />
                              <Routes>
                                  <Route path="/" element={<Home />} />
                                  <Route path="/default" element={<Default />}/>
                                  <Route path="/excel" element={<Excel />}/>
                                  <Route path="/profile" element={<Profile />}/>
                                  <Route path="/logout" element={<Home />}/>
                              </Routes>
                          </Box>
                        </Box>
                        </ProSidebarProvider>
                    </ThemeProvider>
        </ColorModeContext.Provider>
  );
}

export default App;
