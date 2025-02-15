import Recat from "react";
import { Tabs } from "expo-router";

const FacialRecog = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="facial_recog"
                options={{
                    title: "Facial Recognition",
                    tabBarLabel: "Facial Recognition",
                    tabBarIcon: () => (
                        <IonIcons name={"camera"} size={26} color="#162B47" />
                    ),
                }}
            />
        </Tabs>
    );
}

export default FacialRecog