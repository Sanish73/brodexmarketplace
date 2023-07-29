import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../Redux/actions/brandAction';
import  {storeData}  from '../Common/functions';
import  {getStoredData}  from '../Common/functions';
import { loginStateChange } from '../Redux/actions/brandAction';

const LoginScreen = () => {

  const page = 1;
  const refresh = true;

  const dispatch = useDispatch();


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const email  = 'admin@admin.com';
  const password = 'fancystore';

  const handleLogin = () => {
    login('', email , password, page, refresh, function(dt){
      // console.log("++++++++++++++++++++++",dt);
      
    
      if(dt?.status){
       
        //  console.log("++++++++++++++++++++++++++++++++++++++++");
        storeData("@loginstatus",dt,function(dtx){
          loginStateChange( dt?.status , dtx)(dispatch);
          //fortokenREduxer.js
             });

      }else(
        Alert.alert("Error","Invalid Email or Password")
      )
    })(dispatch);
   
  };

  return (
    <View style={styles.container}>
           <View>
              <Text style={styles.heading}>Welcome</Text>
              <Text style={styles.subHeading}>Sign up to continue!</Text>
          </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          // onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          // onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button title="Login in" onPress={handleLogin} color="#4e67eb" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginScreen;
