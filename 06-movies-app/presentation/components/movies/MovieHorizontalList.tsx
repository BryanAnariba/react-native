import { Movie } from "@/infraestructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { MoviePoster } from "./MoviePoster";

interface MovieHorizontalListProps {
  title: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

export const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: MovieHorizontalListProps) => {

  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Para ver si esta al final de scroll
    const isEndScroll = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndScroll) return;
    isLoading.current = true;
    // console.log('Load next movies!');
    loadNextPage && loadNextPage();
  }

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  return (
    <View className={className}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
