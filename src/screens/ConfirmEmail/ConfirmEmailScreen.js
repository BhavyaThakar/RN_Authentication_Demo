import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';




const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

    const navigation = useNavigation();
    const onResendPressed = () => {
        console.warn("Resend Pressed")
    }

    const onConfirmPressed = () => {
        console.warn('Confirm pressed');
        navigation.navigate('Home')
    }

    const onSignInPressed = () => {
        console.warn('Back to sign in Pressed');
        navigation.navigate('SignIn')
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Confirm Your Account
                </Text>

                <CustomInput
                    placeHolder={"Enter your confirmation Code"}
                    value={code}
                    setValue={setCode}

                />


                <CustomButton
                    text={"Confirm"}
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text={"Resend Code"}
                    onPress={onResendPressed}
                    type='SECONDARY'

                />
                <CustomButton
                    text={"Back to Sign in"}
                    onPress={onSignInPressed}
                    type='TERTIARY'

                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        root: {
            alignItems: 'center',
            padding: 20,
            backgroundColor: "#F9FBFC"
        },
        text: {
            color: 'grey',
            marginVertical: 10,
        },
        link: {
            color: '#FDB075'
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#051c60',
            margin: 10,
        }
    }
)
export default ConfirmEmailScreen