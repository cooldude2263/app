import { Text, TextInput, View,TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
const Aftergetmyattendance = () => {

    const [date,setDate]=useState(null);
    const [superviserId,setSuperviserId]=useState(null);
    const [workId,WorkId]=useState(null)
    
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>After Get my attendance</Text>
        <TextInput placeholder="Superviser Id" onChangeText={(e)=>{
            setSuperviserId(e)
        }} />
         <TextInput placeholder="Date" onChangeText={(e)=>{
            setDate(e)
        }} />
         <TextInput placeholder="WorkId" onChangeText={(e)=>{
            setWorkId(e)
        }} />
        <TouchableOpacity style={styles.submitButton} onPress={()=>{
            console.log("Submit cliked")
            console.log({
                date,superviserId
            })
        }}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Aftergetmyattendance;
