import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
 import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';





const NewPasswordScreen = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();





    const onSubmitPressed = () => {
        console.warn("on Submit Pressed")
        navigation.navigate('Home');
    
    }

    const onSignInPressed = () => {
        console.warn('Back to sign in Pressed')
        navigation.navigate('SignIn')
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset Your Password
                </Text>

                <CustomInput
                name="code"
                control={control}
                rules={{
                    required : "Confirmation code is required"
                }}
                    placeHolder={"Code"}


                />
                <CustomInput
                    name="new-password"
                    placeHolder={"New Password"}
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 3, message: 'Password should be at least 6 characters long'},
                        maxLength : {value : 24, message : 'Password should not be more than 24 characters long'}
                    }}

                />


                <CustomButton
                    text={"Submit"}
                    onPress={handleSubmit(onSubmitPressed)}
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
export default NewPasswordScreen