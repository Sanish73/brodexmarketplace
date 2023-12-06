import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../Redux/actions/brandAction';
import {storeData} from '../Common/functions';
import {loginStateChange} from '../Redux/actions/brandAction';

const LoginScreen = () => {
    const page = 1;
    const refresh = true;
    const dispatch = useDispatch();
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    // const [isLoggedIn,     setIsLoggedIn] = useState(false); const email =
    // 'admin@admin.com'; const password = 'fancystore';

    const handleOnChangeText = (text) => {
        setEmail(text);
    }
    const handleOnChangePass = (text) => {
      setPassword(text);
    }

    console.log(email);
    console.log(password);

    const handleLogin = () => {
        login('', email, password, page, refresh, function (dt) {
            if (dt
                ?.status) {
                storeData("@loginstatus", dt, function (dtx) {
                    loginStateChange(dt
                        ?.status, dtx)(dispatch);
                });
            } else 
                (Alert.alert("Error", "Invalid Email or Password"))
        })(dispatch);
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Welcome</Text>
                <Text style={styles.subHeading}>Login to continue!</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                    handleOnChangeText(text)
                }}
                    placeholderTextColor="#3498db"placeholder="Enter your email"/>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry
                    onChangeText={(text) => {
                    handleOnChangePass(text)
                }}
                    placeholderTextColor="#3498db"/>
                <Button title="Login in" onPress={handleLogin} color="#4e67eb"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 70,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    subHeading: {
        fontSize: 16,
        marginBottom: 20,
        color: 'black'
    },
    form: {
        width: '80%'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        color: 'black'
    }
});

export default LoginScreen;
