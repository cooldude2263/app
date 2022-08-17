import { Text, TextInput, View,TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
const Register = () => {
    
    const [EmpId,setEmpId]=useState(null);
    const [superviserId,setSupervisorId]=useState(null);
    const [name,setName]=useState(null);
    const [fatherName,setFatherName]=useState(null);
    const [workId,setWorkId]=useState(null);
    const [assignedStatus,setAssignedstatus]=useState(null);
    const [dob,setDob]=useState(null);
    const [aadharNumber,setAadharNumber]=useState(null);
    const [address,setAddress]=useState(null);
    const [contact,setContact]=useState(null);
    const [registrationStatus,setRegistrationStatus]=useState(null);
    

    return(

        <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <TextInput placeholder="EmpId" onChangeText={(e)=>{
            setEmpId(e)
        }} />
        <TextInput placeholder="SupervisorId" onChangeText={(e)=>{
            setSupervisorId(e)
        }} />
        <TextInput placeholder="Name" onChangeText={(e)=>{
            setName(e)
        }} />
        <TextInput placeholder="Father's Name" onChangeText={(e)=>{
            setFatherName(e)
        }} />
        <TextInput placeholder="DOB" onChangeText={(e)=>{
            setDob(e)
        }} />
        <TextInput placeholder="Contact" onChangeText={(e)=>{
            setContact(e)
        }} />
        <TextInput placeholder="Aadhaar Number" onChangeText={(e)=>{
            setAadharNumber(e)
        }} />
        <TextInput placeholder="Address" onChangeText={(e)=>{
            setAddress(e)
        }} />
        <TextInput placeholder="registrationStatus" onChangeText={(e)=>{
            setRegistrationStatus(e)
        }} />
        <TextInput placeholder=" assignedStatus" onChangeText={(e)=>{
            setAssignedstatus(e)
        }} />
        <TextInput placeholder="workId" onChangeText={(e)=>{
            setWorkId(e)
        }} />
        
        
        <TouchableOpacity style={styles.submitButton} onPress={()=>{
            console.log("Submit Cliked")
            console.log({
                name,EmpId
            })
        }}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>



        </View>
    )
}
export default Register;