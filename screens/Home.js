import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const fakePosts = [
    {
        id: "1",
        name: "Gyro Zeppeli",
        text: "Heard some rumors I'd been fucking Johnny. Of course I'm having sex with Johnny. Look at him, he's beautiful! That doesn't make me gay, that makes me smart!",
        timestamp: 1569109273726,
        avatar: require("../assets/gyro.png"),
        image: require("../assets/gyroPost.png")
    },
    {
        id: "2",
        name: "Hot Pants",
        text: "Looking after Diego is like taking care of a dog, except the dog turns into a lizard who screams wryy and tells you to call him god... in Italian.",
        timestamp: 1569109273726,
        avatar: require("../assets/hp.png"),
        image: require("../assets/hpPost.png")
    },
    {
        id: "3",
        name: "Leone Abbacchio",
        text: "Maybe it was a bad idea to prank the newbie, he drank so much \"tea\" his hair turned yellow.",
        timestamp: 1569109273726,
        avatar: require("../assets/abbacchio.png"),
        image: require("../assets/abbacchioPost.png")
    }
];

export default class Home extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ 
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: "center" 
                    }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{post.timestamp}</Text>
                        </View>

                        <Icon name="more-horiz" size={24} color="#73788B"></Icon>
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                </View>
            </View>
        );
    };
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={fakePosts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4"
    },
    header: {
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});