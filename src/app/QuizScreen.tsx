import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProviders";

const QuizScreen = () => {
  const { question, questionIndex, onNext,score,totalQuestions, bestScore } = useQuizContext();
  const [time,setTime] = useState(20);


  useEffect(()=>{
    // start countdown
    setTime(20);
    const interval = setInterval(()=> {
      setTime((t) => t - 1 );
    },1000);

    return () => {
      clearInterval(interval);
    }

  },[question]);

  useEffect(()=>{
    if(time <= 0){
      onNext();
    }
  },[time]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text>Question {questionIndex + 1}/5</Text>
      </View>
      {question ? (
        <View>
          <QuestionCard question={question} />
          <Text style={styles.time}>{time}</Text>
        </View>
      ) : (
        <Card title="Well Done" >
          <Text>Correct answers: {score}/{totalQuestions}</Text>
          <Text>Best score : {bestScore}</Text>
          </Card>
      )}

      <CustomButton
        onPress={onNext}
        title="Next"
        rightIcon={<FontAwesome6 name="arrow-right-long" color="white" />}
      />
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FDFEF4",
    paddingVertical: 10,
    paddingTop: 50,
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});
