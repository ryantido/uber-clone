import { Text, View } from "react-native";
import React from "react";
import Wrapper from "@/components/Wrapper";
import NavItems from "@/components/NavItems";
export default function Index() {
  return (
    <Wrapper>
      <View>
        <Text className="text-4xl font-semibold text-gray-950 -tracking-widest">
          Uber
        </Text>
        <NavItems />
      </View>
    </Wrapper>
  );
}
