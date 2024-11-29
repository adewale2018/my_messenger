import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: () => void;
  otherStyles: string;
  keyboardType: string;
  otherProps?: object;
}

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...otherProps
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="border border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center focus:border-secondary flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          {...otherProps}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eyeHide : icons.eye} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
