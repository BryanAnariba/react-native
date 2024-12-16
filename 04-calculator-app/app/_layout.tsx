import { Slot } from "expo-router";
import { View } from "react-native"
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />{/* slot es lo que contiene la app, y statusbar La app tapa todo hasta la hora en el telefono */}
      <StatusBar style="auto" />
    </View>
  );
  
}

export default RootLayout;
