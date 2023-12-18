import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
  onPress: () => void
  title: string
  style?: object
  titleStyle?: object
}

const Button = ({ onPress, title, style, titleStyle }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export { Button }
