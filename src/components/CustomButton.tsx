import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

const CustomButton = ({
  title,
  rightIcon,
  ...pressableProps
}: CustomButton) => {
  return (
    <Pressable
      {...pressableProps}
      style={{
        backgroundColor: "#005055",
        width: 300,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
