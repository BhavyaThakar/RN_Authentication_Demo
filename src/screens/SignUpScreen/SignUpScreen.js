import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';





const SignUpScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password')
    const navigation = useNavigation();
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')

    }
    const onSignInPressed = () => {
        console.warn("Sign in Pressed")
        navigation.navigate('SignIn')

    }
    const onTermsOfUsePressed = () => {
        console.warn('Terms of use pressed')
    }
    const onPrivacyPressed = () => {
        console.warn('on Privacy Pressed')
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create an Account
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
                <CustomInput
                    name="email"
                    control={control}
                    placeHolder={"Email"}
                    rules = {{
                        required : 'Email is required',
                        pattern: {value : EMAIL_REGEX, message : 'Email is invalid'}}}


                />
                <CustomInput
                    name="password"
                    placeHolder={"Password"}
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 3, message: 'Password should be at least 6 characters long'},
                        maxLength : {value : 24, message : 'Password should not be more than 24 characters long'}
                    }}

                />
                <CustomInput
                    name="password-repeat"
                    placeHolder={"Repeat Password"}
                    control={control}
                    secureTextEntry
                    rules={{
                        required : 'Confirmation of Password is required',
                        validate : value => value === pwd || 'Password do not match',
                    }}

                />

                <CustomButton
                    text={"Register"}
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By Registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />



                <CustomButton
                    text={"Have an Account? Sign In"}
                    onPress={onSignInPressed}
                    type={'TERTIARY'}

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
export default SignUpScreen