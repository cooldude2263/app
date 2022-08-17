import { Text, TextInput, View,TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
const Aftermarkattendance = () => {
    
    const [superviserId,setSuperviserId]=useState(null);
    const [location,setLocation]=useState(null);
    const [workId,setWorkId]=useState(null);
    const [image,setImage]=useState(null);

    return(

        <View style={styles.container}>
        <Text style={styles.text}>After Mark Attendance</Text>
        
        <TextInput placeholder="SuperviserId" onChangeText={(e)=>{
            setSuperviserId(e)
        }} />
        <TextInput placeholder="Location" onChangeText={(e)=>{
            setLocation(e)
        }} />
        <TextInput placeholder="WorkId" onChangeText={(e)=>{
            setWorkId(e)
        }} />
         <TextInput placeholder="Image" onChangeText={(e)=>{
            setImage(e)
        }} />
        
        
        <TouchableOpacity style={styles.uploadButton} onPress={()=>{
            console.log("Upload Cliked")
            console.log({
                location,workId
            })
        }}>
            <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>



        </View>
    )
}
export default Aftermarkattendance;