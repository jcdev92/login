import { StyleSheet , Text , TextInput , View } from "react-native";

export const Login = () => {
    return (
        <View>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subTitle}>Sign in to your account</Text>
            <TextInput placeholder="your@email.com" style={styles.inputText}/>
            <TextInput placeholder="Password" style={styles.inputText}/>
        </View>
    )
}

const styles = StyleSheet.create({
                                     title: {
                                         fontSize: 80 ,
                                         color: "#34434D" ,
                                         fontWeight: "Bold" ,

                                     } ,
                                     subTitle: {
                                         fontSize: 20 ,
                                         color: "grey" ,
                                     } ,
                                     inputText: {
                                         fontSize: 20 ,
                                         color: "grey" ,
                                         borderWidth: 1 ,
                                         padding: 10 ,
                                         borderRadius: 30 ,
                                         width: 300 ,
                                         height: 50 ,
                                         marginTop: 20 ,
                                         backgroundColor: "#fff" ,
                                         paddingStart: 20 ,
                                     }

                                 })


