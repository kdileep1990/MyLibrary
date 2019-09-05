import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import Colors from '../../../constants/Colors';
class ToggleImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedValue: props.selectedValue || undefined };
    }
    styles = StyleSheet.create({
    });
    onImageSelected = (selectedImage) => {
        this.setState({
            ...this.state,
            selectedValue: selectedImage.value
        });
        if (this.props.onValueChange) {
            this.props.onValueChange(selectedImage.value);
        }
    };
    render() {
        return (
            (<View style={{ flexDirection: 'row', alignItems: 'center'}}>
                {this.props.data.map((eachImage, index, data) => (
                    <TouchableHighlight
                    underlayColor= 'transparent'
                        key={eachImage.value}
                        onPress={() => this.onImageSelected(eachImage)} 
                        style={{marginRight: (index === (data.length - 1)) ? 0 : 40}}>
                        <Image
                            style={[this.props.imageStyle]}
                            source={eachImage.value === this.state.selectedValue ?  eachImage.selectedImageUrl : eachImage.imageUrl}
                            on
                        />
                    </TouchableHighlight>
                ))}
            </View>)
        );
    }
}
ToggleImages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        imageUrl: PropTypes.string,
        selectedImageUrl: PropTypes.string,
        value: PropTypes.any
    })),
    selectedValue: PropTypes.any,
    imageStyle: PropTypes.any,
    onValueChange: PropTypes.func
};
ToggleImages.defaultProps = {
    data: [],
    selectedValue: undefined,
    imageStyle: {},
    onValueChange: null
}
export default ToggleImages;