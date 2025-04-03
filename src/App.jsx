import { MyRoutes, Sidebar, Device,  Light, Dark, AuthContextProvider, Menuambur  } from "./index";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {styled} from "styled-components";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <div className="ContentSidebar">
              <Sidebar state={sidebarOpen} setState={setSidebarOpen}/>
              </div>
              <div classname="ContentMenuambur">
                <Menuambur />
                </div>
              <Containerbody>
            <MyRoutes />
            </Containerbody>
            </Container>
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  background:${(theme)=>theme.bgtotal};
  .ContentSidebar{
    display: none;
  }
  .ContentMenuambur{
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
  grid-template-columns: 65px 1fr;
  .ContentSidebar{
    display: initial;
  }
  .ContentMenuambur{
    display: none;
  }
`;
 const Containerbody = styled.div`
 grid-column: 1;
 width: 100%;
 @media ${Device.tablet}{
  grid-column: 2;
  }
 `;
export default App;