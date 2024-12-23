import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        {/* <Link className='mb-5' href="/products">Go to products</Link>
        <Link className='mb-5' href="/profile">Go to profile</Link>
        <Link className='mb-5' href="/settings">Go to settings</Link> */}

        <CustomButton className='mb-2' children='Go to products' onPress={() => router.push('/products')} />

        <CustomButton className='mb-2' children='Go to profile' color='secondary' onPress={() => router.push('/profile')} />

        <CustomButton className='mb-2' children='Go to settings' color='tertiary' onPress={() => router.push('/settings')} />

        <Link href="/products" asChild>
          <CustomButton className='mb-10' children='Go to products' variant='text-only' />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
