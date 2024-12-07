import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import questions from "../questions";
import Card from "./Card";

type QuestionCard = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCard) => {

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
           
          />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;

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
