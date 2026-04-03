import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import AnimeExplorePage from "../pages/ِAnimeExplorePage.tsx";
import AnimeDetailsPage from "../pages/AnimeDetailsPage";
import FavoritesPage from "../pages/FavoritesPage";
const AppRouter = () => {
  return (
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/explore" element={<AnimeExplorePage />}></Route>
          <Route path="/info/:id" element={<AnimeDetailsPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
  )
}

export default AppRouter
