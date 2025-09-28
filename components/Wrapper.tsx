import { ScrollView, StatusBar, ViewProps } from "react-native";

interface WrapperProps extends ViewProps {
  children: React.ReactNode;
}

export default function Wrapper({ children, ...props }: WrapperProps) {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingBlock: StatusBar.currentHeight,
        paddingInline: 12,
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
}
