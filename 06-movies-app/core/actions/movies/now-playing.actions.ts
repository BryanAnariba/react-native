import { movieDBApi } from "@/core/api/movie-db.api";
import { MovieDBResponse } from "@/infraestructure/interfaces/movie-db-response.interface";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingMoviesAction = async (): Promise<Movie[]> => {
  try {
    const { data }  = await movieDBApi.get<MovieDBResponse>("/now_playing");
    const movies = data.results.map((movie) => (MovieMapper.fromTheMovieDBToMovie(movie)));
    // console.log({movies});
    return movies;
  } catch (error) {
    console.error(error);
    throw "Cannot load now playing movies";
  }
};
