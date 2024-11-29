import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";

import CustomButton from "@/components/CustomButton";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <View>
              <Text className="text-3xl text-white font-bold text-center"> Discover Endless</Text>
            </View>
            <Text className="text-3xl text-white font-bold text-center">
            
              Possibilities with  {" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
            source={images.path}
            className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
            resizeMode="contain"
          />
          </View>
          <Text className='text-sm text-gray-100 font-pregular mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless 
            Exploration with Aora</Text>
            <CustomButton title="Continue with Email" handlePress={() => router.push("/sign-in")} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
