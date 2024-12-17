import { CalculatorButton } from '@/components/CalculatorButton';
import { ThemeText } from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react'
import { View } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant='h1'>
          50 x 50
        </ThemeText>
        <ThemeText variant='h2'>
          2500
        </ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='C' color={Colors.lightGray} blackText={true} onPress={() => console.log('C')} />
        <CalculatorButton label='+/-' color={Colors.lightGray} blackText={true} onPress={() => console.log('+/-')} />
        <CalculatorButton label='del' color={Colors.lightGray} blackText={true} onPress={() => console.log('del')} />
        <CalculatorButton label='÷' color={Colors.orange} onPress={() => console.log('÷')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7' color={Colors.darkGray} onPress={() => console.log('C')} />
        <CalculatorButton label='8' color={Colors.darkGray} onPress={() => console.log('+/-')} />
        <CalculatorButton label='9' color={Colors.darkGray} onPress={() => console.log('del')} />
        <CalculatorButton label='x' color={Colors.orange} onPress={() => console.log('÷')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' color={Colors.darkGray} onPress={() => console.log('C')} />
        <CalculatorButton label='5' color={Colors.darkGray} onPress={() => console.log('+/-')} />
        <CalculatorButton label='6' color={Colors.darkGray} onPress={() => console.log('del')} />
        <CalculatorButton label='-' color={Colors.orange} onPress={() => console.log('÷')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1' color={Colors.darkGray} onPress={() => console.log('C')} />
        <CalculatorButton label='2' color={Colors.darkGray} onPress={() => console.log('+/-')} />
        <CalculatorButton label='3' color={Colors.darkGray} onPress={() => console.log('del')} />
        <CalculatorButton label='+' color={Colors.orange} onPress={() => console.log('÷')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' color={Colors.darkGray} isDobleSize={true} onPress={() => console.log('C')} />
        <CalculatorButton label='.' color={Colors.darkGray} onPress={() => console.log('del')} />
        <CalculatorButton label='=' color={Colors.orange} onPress={() => console.log('÷')} />
      </View>
    </View>
  )
}

export default CalculatorApp;
