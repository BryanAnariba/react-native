import { Image, Pressable } from "react-native";

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  classname?: string;
}

export const MoviePoster = ({id, poster, smallPoster = false, classname}: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${classname}`}
    >
      <Image 
        source={{uri: poster}} 
        className="shadows-lg rounded-2xl w-full h-full" 
        style={{
          width: smallPoster ? 85 : 150, 
          height: smallPoster ? 130 : 250
        }}
        resizeMode="cover" // para que la imagen se adapte al contenedor
      />
    </Pressable>
  );
};
