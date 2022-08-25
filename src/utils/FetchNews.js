import axios from "axios";

export const fetchTerending = async () => {
  try {
    const { data } = await axios.get(
      "https://google-news1.p.rapidapi.com/top-headlines",
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "google-news1.p.rapidapi.com",
        },
        params: {
          lang: "en-US",
          country: "US",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchNewsWithTitle = async (title) => {
  try {
    const { data } = await axios.get(
      "https://google-news1.p.rapidapi.com/topic-headlines",
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "google-news1.p.rapidapi.com",
        },
        params: {
          topic: `${title}`,
          country: "US",
          lang: "en-US",
          limit: "50",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
