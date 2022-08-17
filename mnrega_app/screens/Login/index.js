import { Text, TextInput, View,TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
const Login = () => {

    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null)
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput placeholder="Enter email" onChangeText={(e)=>{
            setEmail(e)
        }} />
        <TextInput placeholder="Enter password" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton} onPress={()=>{
            console.log("Login cliked")
            console.log({
                email,password
            })
        }}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
