import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-orange-800">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
