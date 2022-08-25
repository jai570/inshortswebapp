import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { fetchNewsWithTitle, fetchTerending } from "./utils/FetchNews";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper, useMediaQuery } from "@material-ui/core";
import NewsContent from "./component/Newscontent/NewsContent";
import Footer from "./component/footer/Footer";

function App() {
  const [categories, setcategories] = useState("");
  const [data, setdata] = useState({});

  const fetchwithcategory = async (category) => {
    const res = await fetchNewsWithTitle(category);
    setdata(res);
  };
  const fetchTopHeadlines = async () => {
    const res = await fetchTerending();
    setdata(res);
  };

  useEffect(() => {
    if (categories) {
      fetchwithcategory(categories);
    } else {
      fetchTopHeadlines();
    }
  }, [categories]);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {console.log(data)}
        <Navbar setcategories={setcategories} />
        <NewsContent data={data} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
