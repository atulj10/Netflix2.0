const API_KEY="f01cb3d1f71f48f9d81de9db0162f2ec"

const requests={
    fetchTrending:`/search/movie?query=Trending&api_key=${API_KEY}`,
    fetchNetflixOriginals:`/search/movie?query=Netflix&api_key=${API_KEY}`,
    fetchTopRated: `/search/movie?query=Top+movies&api_key=${API_KEY}`,
    fetchActionMovies:`/search/movie?query=Action&api_key=${API_KEY}`,
    fetchComedyMovies:`/search/movie?query=Comedy&api_key=${API_KEY}`,
    fetchHorrorMovies:`/search/movie?query=Horror&api_key=${API_KEY}`,
    fetchRomanceMovies:`/search/movie?query=Romance&api_key=${API_KEY}`,
    fetchDocumentaries:`/search/movie?query=Documentaries&api_key=${API_KEY}`
}

export default requests