import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { isLoading } from "expo-font";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean;
}
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  textStyles
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50": ""}`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
