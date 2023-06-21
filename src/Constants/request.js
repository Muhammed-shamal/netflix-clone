import { APIKEY } from "./constant";

// const request =[ {
//   trending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
//   action: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
//   comedies: `/discover/movie?api_key=${APIKEY}&with_networks=213`,
//   documentry: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
//   romance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
//   horrer: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
//   orgninal: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
// }];

const request = [
  {
    title: "Popular on Netflix",
    url: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  },

  {
    title: "Orginal",
    url: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  },

  {
    title: "Action",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  },

  {
    title: "Comedies",
    url: `/discover/movie?api_key=${APIKEY}&with_networks=213`,
  },

  {
    title: "Romance",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  },

  {
    title: "Documentry",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  },

  {
    title: "Horrer",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  },
];
export default request;
