import { movieDBApi } from "@/core/api/movie-db.api";
import { MovieDBResponse } from "@/infraestructure/interfaces/movie-db-response.interface";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const upComingMoviesActions = async (): Promise<Movie[]> => {
  try {
    const { data }  = await movieDBApi.get<MovieDBResponse>("/upcoming");
    const movies = data.results.map((movie) => (MovieMapper.fromTheMovieDBToMovie(movie)));
    // console.log({movies});
    return movies;
  } catch (error) {
    console.error(error);
    throw "Cannot load now popular movies";
  }
};
