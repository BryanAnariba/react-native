- Log in into themoviedb.org
- The movie db url: https://developer.themoviedb.org/reference/movie-now-playing-list
- The movie db key: https://www.themoviedb.org/settings/api
- Tank Stack Query: https://tanstack.com/query/latest/docs/framework/react/installation

# Error al crasheo al tocar el carrousel
```Reemplace la variable zIndex ennode_modules/react-native-reanimated-carousel/src/layouts/parallax.ts```
```Con esto const zIndex = Math.round(interpolate(value, [-1, 0, 1], [0, size, 0]));```