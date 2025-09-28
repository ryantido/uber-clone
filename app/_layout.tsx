import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { store } from "@/store";
import "@/global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="h-full">
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
        </Stack>
      </Provider>
    </SafeAreaView>
  );
}
