import { Movie } from "@/infraestructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { MoviePoster } from "./MoviePoster";

interface MovieHorizontalListProps {
  title: string;
  movies: Movie[];
  className?: string;
}

export const MovieHorizontalList = ({
  title,
  movies,
  className,
}: MovieHorizontalListProps) => {
  return (
    <View className={className}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};
