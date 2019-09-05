import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Colors from '../../../constants/Colors';

    class Button extends React.Component {
        constructor(props) {
            super(props);
            this.state = { pressStatus: false, focussed: false };
        }
    underlayColor = {
        primary: Colors["blueSubtle"],
        secondary: Colors["blueSubtle"]
    }
    styles = StyleSheet.create({
        textStyle: {
            fontSize: 16,
            fontWeight: '500',
        },
        primaryText: {
            color: Colors["white"]
        },
        secondaryText: {
            color: Colors["bluePrimary"],
        },
        smallText: {
            fontWeight: '500',
            fontSize: 14
        },
        primaryPressedStateText: {
            color: Colors["bluePrimary"]
        },
        primaryDisabledText: {
            color: '#9e9e9e'
        },
        secondaryDisabledText: {
            color: Colors["blueHigh"]
        },
        buttonStyle: {
            minWidth: 156,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: 'center',
            minHeight: 40,
            justifyContent: 'center'
        },
        primaryButton: {
            borderRadius: 4,
            backgroundColor: Colors["bluePrimary"]
        },
        secondaryButton: {
            borderRadius: 4,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: Colors["bluePrimary"],
            backgroundColor: Colors["white"],
        },
        smallSize: {
            minWidth: 121,
            paddingTop: 6,
            paddingBottom: 6,
        },
        primaryPressedState: {
            backgroundColor: Colors["blueHigh"]
        },
        secondaryPressedState: {
            backgroundColor: Colors["blueSubtle"]
        },
        primaryDisabledState: {
            backgroundColor: '#eeeeee'
        },
        secondaryDisabledState: {
            borderColor: '#5fa7f2',
        },
        noBorderButton: {
            borderWidth: 0
        },
        fullWidthButton: {
            width: '100%'
        }
    });
    _onShowUnderlay = () => {
        this.setState({
            ...this.state,
            pressStatus: true
        });
    }
    _onHideUnderlay = () => {
        this.setState({ pressStatus: false });
    }
    _onFocus = () => {
        this.setState({
            ...this.state,
            focussed: true
        });
    }
    _onBlur = () => {
        this.setState({ pressStatus: false });
    }
    getButtonStyle = () => {
        return StyleSheet.flatten([
            this.styles.buttonStyle,
            this.styles[this.props.type + 'Button'],
            this.styles[this.props.size + 'Size'],
            this.styles[this.state.pressStatus ? this.props.type + 'PressedState' : ''],
            this.styles[this.props.disabled ? this.props.type + 'DisabledState' : ''],
            this.styles[this.props.noBorder ? 'noBorderButton' : ''],
            this.styles[this.props.fullWidth ? 'fullWidthButton' : ''],
            (this.props.width ? {width: this.props.width} : {})
        ]);
    }
    getTextStyle = () => {
        return StyleSheet.flatten([
            this.styles.textStyle,
            this.styles[this.props.type + 'Text'],
            this.styles[this.props.size + 'Text'],
            this.styles[this.state.pressStatus ? this.props.type + 'PressedStateText' : ''],
            this.styles[this.props.disabled ? this.props.type + 'DisabledText' : '']
        ]);
    }
    render() {
        //console.log(styles.textH1);
        //const className = `${styles['text' + this.props.type]} ${styles['algn' + this.props.align]} ${styles[this.props.textWeight + 'Weight']}`;
        return (
            (<View style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
                <TouchableHighlight
                    activeOpacity={1}
                    style={this.getButtonStyle()}
                    onShowUnderlay={this._onShowUnderlay} /* Called when we touch the button */
                    onHideUnderlay={this._onHideUnderlay} /* Called when we release the button */
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}
                    underlayColor={this.underlayColor[this.props.type || 'primary']}>
                    <Text children={this.props.children} style={this.getTextStyle()}></Text>
                </TouchableHighlight>
            </View>)
        );
    }
}
Button.propTypes = {
    /*
    Specifies the type of the button. It can be primary or secondary.
    */
    type: PropTypes.oneOf(['primary', 'secondary']),

    /*
    Specifies the size of the button. It can be small or default.
    */
    size: PropTypes.oneOf(['small', 'default']),

    disabled: PropTypes.bool,

    noBorder: PropTypes.bool,

    onPress: PropTypes.func,

    icon: PropTypes.string,

    fullWidth: PropTypes.bool,

    width: [PropTypes.string, PropTypes.number]
};
Button.defaultProps = {
    type: 'primary',

    size: 'default',

    disabled: false,

    noBorder: false,

    onPress: null,

    icon: '',

    fullWidth: false,

    width: null
}
export default Button;