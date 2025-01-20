import { nowPlayingMoviesAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated-movies.actions";
import { upComingMoviesActions } from "@/core/actions/movies/upcoming-movies.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingMoviesQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const popularMoviesQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const topRatedMoviesQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const upComingMoviesQuery = useQuery({
    queryKey: ["movies", "upComing"],
    queryFn: upComingMoviesActions,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  return {
    nowPlayingMoviesQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upComingMoviesQuery,
  };
};
