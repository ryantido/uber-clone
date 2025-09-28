import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { store } from "@/store";
import "@/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="h-full">
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="MapScreen" />
        </Stack>
      </Provider>
    </SafeAreaView>
  );
}
