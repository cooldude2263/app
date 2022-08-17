import { Text, TextInput, View,TouchableOpacity } from "react-native";
// import { useState } from "react";
import { styles } from "./styles";
const Afterlogin = () => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>After Login Buttons</Text>

        <TouchableOpacity style={styles.fourButton} onPress={()=>{
            console.log("search emp cliked")
        }}>
            <Text style={styles.fourText}>Search Emp </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fourButton} onPress={()=>{
            console.log("Register cliked")
        }}>
            <Text style={styles.fourText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fourButton} onPress={()=>{
            console.log("cliked")
        }}>
            <Text style={styles.fourText}>Get My Emp Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fourButton} onPress={()=>{
            console.log("mark cliked")
        }}>
            <Text style={styles.fourText}>Mark Attendance</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Afterlogin;
