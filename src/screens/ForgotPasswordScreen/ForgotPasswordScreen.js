import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';






const ForgotPasswordScreen = () => {

    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();


    const onSendPressed = () => {
        console.warn("Send Pressed")
        navigation.navigate('NewPassword')
    }

    const onSignInPressed = () => {
        console.warn('Back to sign in Pressed');
        navigation.navigate('SignIn')
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset Your Password
                </Text>

                <CustomInput
                    rules={{
                        required: 'Username is required',
                        minLength: { value: 3, message: 'Username should be at least 3 characters long'},
                        maxLength : {value : 24, message : 'Username should not be more than 24 characters long'}
                    }}
                    name="username"
                    control={control}
                    placeHolder={"Username"}

                />


                <CustomButton
                    text={"Send"}
                    onPress={handleSubmit(onSendPressed)}
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
export default ForgotPasswordScreen