import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white } from 'ansi-colors';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
               
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#242424',
        padding: 15,
        borderRadius: 10,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square :{
        width: 24,
        height: 24,
        backgroundColor:'#6eb1f0',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 8,
    },
    itemText :{
        color: 'white',
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#6eb1f0',
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
    },
});

export default Task;


