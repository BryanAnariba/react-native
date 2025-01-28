import { nowPlayingMoviesAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated-movies.actions";
import { upComingMoviesActions } from "@/core/actions/movies/upcoming-movies.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({pageParam}) => {
      console.log('Loading top rated movies from page: ' + pageParam)
      return topRatedMoviesAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1
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
