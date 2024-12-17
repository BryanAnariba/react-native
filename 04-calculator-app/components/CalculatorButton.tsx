import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native"

interface CalculatorButtonProps {
  label: string;
  color?: string;
  blackText?: boolean;
  isDobleSize?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, isDobleSize = false, onPress }: CalculatorButtonProps) => {
  return (
    <Pressable style={({pressed}) => ({
      ...globalStyles.btn,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: isDobleSize ? 180 : 80,
    })} 
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.btnText,
          color: blackText ? 'black' : 'white'
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}
