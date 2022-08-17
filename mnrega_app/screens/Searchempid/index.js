import { Text, TextInput, View,TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
const Searchempid = () => {

    const [empid,setEmpId]=useState(null);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Employee ID</Text>
        <TextInput placeholder="Enter empid" onChangeText={(e)=>{
            setEmpId(e)
        }} />
        
        <TouchableOpacity style={styles.searchButton} onPress={()=>{
            console.log("Search cliked")
            console.log({
                empid
            })
        }}>
            <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Searchempid;
