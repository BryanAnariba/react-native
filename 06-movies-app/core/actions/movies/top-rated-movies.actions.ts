import { movieDBApi } from "@/core/api/movie-db.api";
import { MovieDBResponse } from "@/infraestructure/interfaces/movie-db-response.interface";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({page = 1, limit = 10}: Options): Promise<Movie[]> => {
  try {
    const { data }  = await movieDBApi.get<MovieDBResponse>("/top_rated", {
      params: {
        page: page
      }
    });
    const movies = data.results.map((movie) => (MovieMapper.fromTheMovieDBToMovie(movie)));
    // console.log({movies});
    return movies;
  } catch (error) {
    console.error(error);
    throw "Cannot load now top rated movies";
  }
};
