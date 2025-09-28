import { View, ViewProps } from 'react-native'

interface WrapperProps extends ViewProps {
    children: React.ReactNode;
}

export default function Wrapper({ children, ...props }: WrapperProps ) {
  return (
    <View style={{ flex: 1 }} {...props}>
        {children}
    </View>
  )
}