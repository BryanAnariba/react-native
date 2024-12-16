import { ThemeText } from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import React from 'react'
import { Text, View } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant='h1'>
        50 x 50
      </ThemeText>
      <ThemeText variant='h2'>
        2500
      </ThemeText>
    </View>
  )
}

export default CalculatorApp;