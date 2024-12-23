import React from 'react';
import { Redirect } from 'expo-router';

const App = () => {
  // return (
  //   <SafeAreaView>
  //     <View className='mt-6 mx-2.5'>
  //       <Text className='text-2xl text-primary' style={{fontFamily: 'WorkSans-Black'}}>
  //         Index App Works!
  //       </Text>

  //       <Text className='text-4xl font-work-black text-secondary-200'>
  //         Index App Works!
  //       </Text>

  //       <Text className='text-3xl font-work-light text-secondary-100'>
  //         Index App Works!
  //       </Text>

  //       <Text className='text-2xl font-work-medium text-tertiary'>
  //         Index App Works!
  //       </Text>

  //       <Link href='/products/index'>
  //         Go to Products
  //       </Link>
  //     </View>
  //   </SafeAreaView>
  // )
  return <Redirect href="/home" />
}

export default App;
