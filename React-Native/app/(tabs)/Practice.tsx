import React from "react";
import { Image, ScrollView, StyleSheet, Text, View} from "react-native";

export default function ProfileCard() {
    return (
        <ScrollView style={{backgroundColor: 'lightgrey', height: '100%,'}}>
            <View style={styles.card}>
                <Image source={require('../../assets/images/favicon.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.jobTitle}>Software Engineer</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',padding: 20,
    },

    card: {
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        
    },

    profileImage: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginTop: 20,
    },

    profileName: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
    },

    jobTitle: {
        marginTop: 15,
    },
});
