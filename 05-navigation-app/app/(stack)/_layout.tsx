import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name='home/index' options={{ title: 'Home Screen', animation: 'fade_from_bottom' }} />
      <Stack.Screen name='products/index' options={{ title: 'Products Screen', animation: 'fade_from_bottom' }} />
      <Stack.Screen name='products/[id]' options={{ title: 'Details', animation: 'fade_from_bottom' }} />
      <Stack.Screen name='profile/index' options={{ title: 'Profile Screen', animation: 'fade_from_bottom' }} />
      <Stack.Screen name='settings/index' options={{ title: 'Settings Screen', animation: 'fade_from_bottom' }} />
    </Stack>
  )
}

export default StackLayout;
