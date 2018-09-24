import React from 'react';
import { Modal, Image, Text, Button, View, StyleSheet } from 'react-native';

const placeDetail = props => {  
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button color="red" title="Delete" onPress={props.onItemDeleted}/>
                    <Button color="blue" title="close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 40
    },
    placeImage: {
        marginRight: 8,
        height: 200,
        width: "100%"
    },
    placeName: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    }
})

export default placeDetail;