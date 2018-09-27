import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './PlaceInput/PlaceInput';
import PlaceList from './PlaceList/PlaceList';
//import placeImage from './src/assets/image1.jpg';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions/index';

class MainComponent extends React.Component {
    addPlaceToArrayHandler = placename => {
        this.props.onAddPlace(placename);
    };

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };

    placeDeleteHandler = () => {
        this.props.onDeletePlace();
    };

    closeModalHandler = () => {
        this.props.onDeselectPlace();
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onModalClosed={this.closeModalHandler}
                    onItemDeleted={this.placeDeleteHandler}
                />
                <PlaceInput addPlace={this.addPlaceToArrayHandler} />
                <PlaceList
                    listPlace={this.props.places}
                    onItemSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const mapStateToProps = state => ({
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);
