import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "@/constants";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

  const { email, password } = form;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign in to Aura
          </Text>
          <FormField
            title="Email"
            value={email}
            handleChangeText={(e: string) =>
              setForm((prevForm) => ({ ...prevForm, email: e }))
            }
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="adewale@gmail.com"
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e: string) =>
              setForm((prevForm) => ({ ...prevForm, password: e }))
            }
            otherStyles="mt-7"
            keyboardType="password"
            placeholder="***********"
          />
          <View>
            <Text className="text-lg text-gray-100 text-right font-pregular mt-1">
              Forgot password?
            </Text>
          </View>

          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link
              className="text-lg text-secondary font-psemibold"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
