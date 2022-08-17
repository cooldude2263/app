import { Text, TextInput, View,TouchableOpacity } from "react-native";
// import { useState } from "react";
import { styles } from "./styles";
const First = () => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Use As</Text>

        <TouchableOpacity style={styles.twoButton} onPress={()=>{
            console.log("Login cliked")
        }}>
            <Text style={styles.twoText}>Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.twoButton} onPress={()=>{
            console.log("employee details cliked")
        }}>
            <Text style={styles.twoText}>Employee Details</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default First;
