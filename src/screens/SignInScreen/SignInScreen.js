import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo.png';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';





const SignInScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSignInPressed = (data) => {
        console.warn("Sign in Pressed");
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password Pressed");
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = () => {
        console.warn("Sign up Pressed")
        navigation.navigate('SignUp');
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain' />

                <CustomInput
                    name="username"
                    placeHolder={'Username'}
                    control={control}
                    rules={{ required: 'Username is required' }}

                />

                <CustomInput
                    name="Password"
                    placeHolder={'Password'}
                    control={control}
                    rules={{ required: 'password is required', minLength: {value : 6, message : 'password should be minimum 6 characters long'}}}
                    secureTextEntry
                />



                <CustomButton
                    text={"Sign In"}
                    onPress={handleSubmit(onSignInPressed)}
                />

                <SocialSignInButtons />

                <CustomButton
                    text={"Forgot Password"}
                    onPress={onForgotPasswordPressed}
                    type={'TERTIARY'}

                />
                <CustomButton
                    text={"Dont have an Account? Create one"}
                    onPress={onSignUpPressed}
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
        logo: {
            width: '45%',
            height: '60%',
            maxWidth: 300,
            maxHeight: 300,
        }
    }
)
export default SignInScreen