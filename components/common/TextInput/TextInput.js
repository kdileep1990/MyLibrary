// import React from 'react';
// import { StyleSheet, TouchableHighlight, View, Text, TextInput as NativeTextInput, TextInputProps } from 'react-native';
// import Colors from '../../../constants/Colors';
// import { TextInput as ReactNativePaperTextInput, DefaultTheme } from 'react-native-paper';
// import { Icon } from 'react-native-elements'
// import PropTypes from 'prop-types';

// class TextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             focussed: false,
//             value: props.value || ''
//         }
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.value != this.props.value) {
//             this.setState({
//                 ...this.state,
//                 value: this.props.value
//             })
//         }
//     }

//     styles = StyleSheet.create({
//         container: {
//             width: "100%",
//             marginTop: 8,
//             marginBottom: 8,
//             paddingLeft: this.props.paddingSides !== undefined ? this.props.paddingSides : 16,
//             paddingRight: this.props.paddingSides !== undefined ? this.props.paddingSides : 16
//         },
//         prefixStyle: {
//             height: 24,
//             marginBottom: -24,
//             top: 17.5,
//             left: 14,
//             zIndex: 1,
//             width: 'auto'
//         },
//         prefixText: {
//             fontSize: 16,
//             color: Colors["blueGrey-500"]
//         },
//         suffixStyle: {
//             height: 24,
//             top: -30,
//             marginBottom: -22,
//             marginLeft: 'auto',
//             zIndex: 1
//         },
//         suffixText: {
//             fontSize: 16,
//             color: Colors["blueGrey-500"]
//         },
//         suffixIcon: {
//             top: -5
//         },
//     });

//     textInputFocussed = () => {
//         this.setState({
//             ...this.state,
//             focussed: true
//         })
//     }

//     textInputBlurred = () => {
//         this.setState({
//             ...this.state,
//             focussed: false
//         })
//     }

//     textInputChanged = (changedText) => {
//         this.setState({
//             ...this.state,
//             value: changedText
//         })
//     }

//     getMarginLeft = () => {
//         if (this.props.prefixText) {
//             return 5 + (this.props.prefixText.length * 12);
//         } else if (this.props.prefixIcon) {
//             return 17;
//         } else {
//             return 0;
//         }
//     }

//     getMarginRight = () => {
//         if (this.props.suffixText) {
//             return 5 + (this.props.suffixText.length * 12);
//         } else if (this.props.suffixIcon) {
//             return 17;
//         } else {
//             return 0;
//         }
//     }

//     renderNativeInput = (props) => {

//         return (<NativeTextInput {...props}
//                                  ref={(input) => { this.textInput = input; }}
//                                  style={[props.style, {
//                                      color: this.props.error ? Colors["grey-900"]: Colors["grey-900"],
//                                      marginLeft: this.getMarginLeft(this.props),
//                                      marginRight: this.getMarginRight(this.props),
//                                      outline: 'none',
//                                      textAlignVertical: 'top',
//                                      paddingTop: 10,
//                                      paddingBottom: 10,
//                                      minHeight: 20 + ((this.props.numberOfLines || 1) * 18)
//                                  }]} />)
//     }

//     render() {
//         const theme = {
//             ...DefaultTheme,
//             colors: {
//                 ...DefaultTheme.colors,
//                 primary: this.props.error ? Colors["error"] : Colors["bluePrimary"],
//                 placeholder: this.props.error ? Colors["error"] : Colors["blueGrey-500"],
//                 background: this.props.disabled ? Colors["grey-100"] : Colors["white"],
//                 error: Colors["error"]
//             },
//             fonts: {
//                 ...DefaultTheme.colors,
//                 regular: {
//                     ...DefaultTheme.colors.regular,
//                     marginLeft: this.state.focussed || (!this.props.prefixText && !this.props.prefixIcon) || this.state.value ? 0 : this.getMarginLeft(this.props)
//                 }
//             }
//         }
//         return (
//             <View style={this.styles.container}>
//                 <TouchableHighlight onPress={() => this.textInput.focus()} underlayColor="transparent">
//                     <View>
//                     {(this.props.prefixText || this.props.prefixIcon) && (
//                         <View style={[this.styles.prefixStyle, {width: this.getMarginLeft() - 5}]}>
//                             <Text style={this.styles.prefixText}>{this.props.prefixText}</Text>
//                             <Icon type="andtesign" name={this.props.prefixIcon} size={24}/>
//                         </View>
//                     )}
//                     <ReactNativePaperTextInput {...this.props}
//                                                error={false}
//                                                label={`${this.props.label}${this.props.required ? "*" : ""}`}
//                                                placeholder={this.props.placeholder}
//                                                dense={true} /**dense is for adjusting height */
//                                                mode="outlined"
//                                                theme={theme}
//                                                disabled={this.props.disabled}
//                                                render={this.renderNativeInput}
//                                                onFocus={this.textInputFocussed}
//                                                onBlur={this.textInputBlurred}
//                                                editable={this.props.editable}
//                                                value={this.state.value}
//                                                onChangeText={this.textInputChanged}
//                                                multiline={this.props.multiline}
//                                                numberOfLines={this.props.numberOfLines}
//                     />
//                     {(this.props.suffixText || this.props.suffixIcon) && (
//                         <View style={[this.styles.suffixStyle, {right: 10}]}>
//                             {this.props.suffixText && <Text style={this.styles.suffixText}>{this.props.suffixText}</Text>}
//                             {this.props.suffixIcon && <Icon containerStyle={this.styles.suffixIcon} type="antdesign" name={this.props.suffixIcon} size={24}/>}
//                         </View>
//                     )}
//                     </View>
//                 </TouchableHighlight>
//                 {this.props.required && (<Text style={{color: Colors["blueGrey-500"], marginTop: 4}}>*Required</Text>)}
//                 {this.props.error && (<Text style={{color: Colors["error"], marginTop: 4}}>{this.props.errorText}</Text>)}
//                 {this.props.hintText && (<Text style={{color: Colors["blueGrey-500"], marginTop: 4}}>{this.props.hintText}</Text>)}
//             </View>
//         );
//     }
// }

// TextInput.propTypes = {
//     ...TextInputProps,
//     paddingSides: PropTypes.number,
//     prefixText: PropTypes.string,
//     prefixIcon: PropTypes.string,
//     suffixText: PropTypes.string,
//     suffixIcon: PropTypes.string,
//     error: PropTypes.bool,
//     disabled: PropTypes.bool,
//     label: PropTypes.string,
//     required: PropTypes.bool,
//     hintText: PropTypes.string,

// };
// TextInput.defaultProps = {
//     paddingSides: undefined,
//     prefixText: undefined,
//     prefixIcon: undefined,
//     suffixText: undefined,
//     suffixIcon: undefined,
//     error: false,
//     disabled: false,
//     label: "",
//     required: false,
//     hintText: undefined,
// };
// export default TextInput;

import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, TextInput as NativeTextInput, PickerIOS } from 'react-native';
import Colors from '../../../constants/Colors';
import { TextInput as ReactNativePaperTextInput, DefaultTheme } from 'react-native-paper';
import { Icon } from 'react-native-elements'

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focussed: false,
            value: props.value || ''
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value != this.props.value) {
            this.setState({
                ...this.state,
                value: this.props.value
            })
        }
    }

    styles = StyleSheet.create({
        container: {
            width: "100%",
            marginTop: 8,
            marginBottom: 8,
            paddingLeft: this.props.paddingSides !== undefined ? this.props.paddingSides : 25,
            paddingRight: this.props.paddingSides !== undefined ? this.props.paddingSides : 25
        },
        prefixStyle: {
            height: 24,
            marginBottom: -24,
            top: 17.5,
            left: 14,
            zIndex: 1,
            width: 'auto'
        },
        prefixText: {
            fontSize: 16,
            color: Colors["blueGrey-500"]
        },
        suffixStyle: {
            height: 24,
            top: -30,
            marginBottom: -22,
            marginLeft: 'auto',
            zIndex: 1
        },
        suffixText: {
            fontSize: 16,
            color: Colors["blueGrey-500"]
        },
        suffixIcon: {
            top: -5
        },
    });

    textInputFocussed = () => {
        this.setState({
            ...this.state,
            focussed: true
        })
    }

    textInputBlurred = () => {
        this.setState({
            ...this.state,
            focussed: false
        })
    }

    textInputChanged = (changedText) => {
        this.setState({
            ...this.state,
            value: changedText
        })
    }

    getMarginLeft = () => {
        if (this.props.prefixText) {
            return 5 + (this.props.prefixText.length * 12);
        } else if (this.props.prefixIcon) {
            return 17;
        } else {
            return 0;
        }
    }

    getMarginRight = () => {
        if (this.props.suffixText) {
            return 5 + (this.props.suffixText.length * 12);
        } else if (this.props.suffixIcon) {
            return 17;
        } else {
            return 0;
        }
    }

    renderNativeInput = (props) => {

        return (<NativeTextInput {...props}
                                 ref={(input) => { this.textInput = input; }}
                                 style={[props.style, {
                                     color: this.props.error ? Colors["grey-900"]: Colors["grey-900"],
                                     marginLeft: this.getMarginLeft(this.props),
                                     marginRight: this.getMarginRight(this.props),
                                     outline: 'none',
                                     textAlignVertical: 'top',
                                     paddingTop: 10,
                                     paddingBottom: 10,
                                     minHeight: 20 + ((this.props.numberOfLines || 1) * 18)
                                 }]} />)
    }

    render() {
        const theme = {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: this.props.error ? Colors["error"] : Colors["bluePrimary"],
                placeholder: this.props.error ? Colors["error"] : Colors["blueGrey-500"],
                background: this.props.disabled ? Colors["grey-100"] : Colors["white"],
                error: Colors["error"]
            },
            fonts: {
                ...DefaultTheme.colors,
                regular: {
                    ...DefaultTheme.colors.regular,
                    marginLeft: this.state.focussed || (!this.props.prefixText && !this.props.prefixIcon) || this.state.value ? 0 : this.getMarginLeft(this.props)
                }
            }
        }
        return (
            <View style={this.styles.container}>
                <TouchableHighlight onPress={() => this.textInput.focus()} underlayColor="transparent">
                    <View>
                    {(this.props.prefixText || this.props.prefixIcon) && (
                        <View style={[this.styles.prefixStyle, {width: this.getMarginLeft() - 5}]}>
                            <Text style={this.styles.prefixText}>{this.props.prefixText}</Text>
                            <Icon type="andtesign" name={this.props.prefixIcon} size={24}/>
                        </View>
                    )}
                    <ReactNativePaperTextInput {...this.props}
                                               error={false}
                                               label={`${this.props.label}${this.props.required ? "*" : ""}`}
                                               placeholder={this.props.placeholder}
                                               dense={true} /**dense is for adjusting height */
                                               mode="outlined"
                                               theme={theme}
                                               disabled={this.props.disabled}
                                               render={this.renderNativeInput}
                                               onFocus={this.textInputFocussed}
                                               onBlur={this.textInputBlurred}
                                               editable={this.props.editable}
                                               value={this.state.value}
                                               onChangeText={this.textInputChanged}
                                               multiline={this.props.multiline}
                                               numberOfLines={this.props.numberOfLines}
                    />
                    {(this.props.suffixText || this.props.suffixIcon) && (
                        <View style={[this.styles.suffixStyle, {right: 10}]}>
                            {this.props.suffixText && <Text style={this.styles.suffixText}>{this.props.suffixText}</Text>}
                            {this.props.suffixIcon && <Icon containerStyle={this.styles.suffixIcon} type="antdesign" name={this.props.suffixIcon} size={24}/>}
                        </View>
                    )}
                    </View>
                </TouchableHighlight>
                {this.props.required && (<Text style={{color: Colors["blueGrey-500"], marginTop: 4}}>*Required</Text>)}
                {this.props.error && (<Text style={{color: Colors["error"], marginTop: 4}}>{this.props.errorText}</Text>)}
                {this.props.hintText && (<Text style={{color: Colors["blueGrey-500"], marginTop: 4}}>{this.props.hintText}</Text>)}
            </View>
        );
    }
}
export default TextInput;