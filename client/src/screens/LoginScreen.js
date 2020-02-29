import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth'
class LoginScreen extends Component {
     isUserEqual = (googleUser, firebaseUser)=> {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              return true;
            }
          }
        }
        return false;
      }
     onSignIn = (googleUser)=> {
        console.log('Google Auth Response', googleUser);
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
            )
            firebase.auth().signInWithCredential(credential).then(()=> console.log('user signed in'))
            .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        }.bind(this));
      }

    signInWithGoogleAsync = async () =>{
        try{
            const result = await Google.logInAsync({
                androidClientId:'53110014268-9rqorg0lh6l8g9frrgmpu2mbm0vvufvn.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })
            
            if(result.type === "success"){
                this.onSignIn(result)
                return result.accessToken
            }else {
                return {cancelled: true}
            }


        }catch(e){
            return{error: true}
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in with google" onPress={() => this.signInWithGoogleAsync()}/>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});