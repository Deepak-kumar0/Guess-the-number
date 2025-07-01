import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameoverScreen";

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);
  const [rounds, setRounds] = useState(0); 

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRounds(0);
    setStep(1);
  };

  return (
    <LinearGradient colors={["#4c9f7f", "#3b5998", "#1c6a19"]} style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={{ flex: 1 }}>
          {step === 1 && (
            <StartGameScreen
              step={step}
              setStep={setStep}
              userNumber={userNumber}
              setUserNumber={setUserNumber}
            />
          )}
          {step === 2 && (
            <GuessScreen
              userNumber={userNumber}
              setStep={setStep}
              setRounds={setRounds} 
            />
          )}
          {step === 3 && (
            <GameOverScreen
              userNumber={userNumber}
              rounds={rounds}
              onStartNewGame={startNewGameHandler} 
            />
          )}
        </View>
      </ImageBackground>
      <StatusBar hidden />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
