import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Card = {
  title: string;
  children?: React.ReactNode;
};

const Card = ({ title, children }: Card) => {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    width: 370,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: "500",
  },
});
