import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
