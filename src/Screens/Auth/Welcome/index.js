import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Images } from "../../../Constant/Images";
import AuthHeader from "../../../Components/AuthHeader";
import { Routes } from "../../../Constant/Routes";
import { scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";

const slides = [
    {
        key: "one",
        title: "It’s Time to save your Precious Time ",
        text:
            "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: Images.WELCOME_1,
    },
    {
        key: "two",
        title: "No More Physical Que ",
        text:
            "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: Images.WELCOME_2,
    },
    {
        key: "three",
        title: "Now it’s on your Finger tip",
        text:
            "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: Images.WELCOME_3,
    },
];

export default class App extends React.Component {
    state = { showHomePage: false };
    _renderItem = ({ item }) => {
        return (
            <>
                <Image
                    source={item.image}
                    style={{
                        // resizeMode: "cover",
                        // height: "73%",
                        // width: "100%",
                    }}
                />
                <Text
                    style={{
                        paddingTop: 25,
                        paddingBottom: 10,
                        fontSize: 23,
                        fontWeight: "bold",
                        color: "#21465b",
                        alignSelf: "center",
                    }}
                >
                    {item.title}
                </Text>

                <Text style={{
                    textAlign: "center",
                    color: "#b5b5b5",
                    fontSize: 15,
                    paddingHorizontal: 30
                }}>
                    {item.text}
                </Text>
            </>
        );
    };
    onDone = () => {
        this.props.navigation.navigate(Routes.ChooseType)
    }
    render() {
        return (
            <>
                <SafeAreaView />
                <View>
                    <AuthHeader />
                </View>
                <AppIntroSlider
                    style={{ marginTop: scaleHeight(200), marginHorizontal: scaleWidth(50) }}
                    doneLabel="Done"
                    renderItem={this._renderItem}
                    data={slides}
                    activeDotStyle={{
                        backgroundColor: "#21465b",
                        // width: 30
                    }}
                    onDone={this.onDone}
                />
            </>
        );
    }
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});