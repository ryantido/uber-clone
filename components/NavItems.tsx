import { NAV_ITEMS } from "@/constants/nav";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "lucide-react-native";

export default function NavItems() {
  return (
    <FlatList
      data={NAV_ITEMS}
      renderItem={({ item }) => (
        <TouchableOpacity className="bg-gray-200 min-w-48 my-6 rounded-lg">
          <View>
            <Image
              source={{
                uri: item.icon,
              }}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <View className="flex-row justify-center items-center gap-3 my-4">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <ArrowRight className="w-4 h-4" />
            </View>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View className="w-4" />}
    />
  );
}
