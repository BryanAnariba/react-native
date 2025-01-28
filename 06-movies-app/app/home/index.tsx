import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideshow } from "@/presentation/components/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { MovieHorizontalList } from "@/presentation/components/movies/MovieHorizontalList";

const HomeSreen = () => {
  const {
    nowPlayingMoviesQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upComingMoviesQuery,
  } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingMoviesQuery.isLoading)
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );

  return (
    <ScrollView>
      <View
        className={"mt-2 pb-10"} // Para controlar en IOS
        style={{ paddingTop: safeArea.top }} // Para controlar en IOS
      >
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Carrousel de peliculas */}
        <MainSlideshow movies={nowPlayingMoviesQuery.data ?? []} />

        {/* Peliculas Populares */}
        <MovieHorizontalList
          title="Populares"
          movies={popularMoviesQuery.data ?? []}
          className="mb-7"
        />

        {/* Top rated peliculas */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedMoviesQuery.fetchNextPage}
          className="mb-7"
        />

        {/* Por Venir */}
        <MovieHorizontalList
          title="Proximamente en Cines"
          movies={upComingMoviesQuery.data ?? []}
          className="mb-7"
        />
      </View>
    </ScrollView>
  );
};

export default HomeSreen;
