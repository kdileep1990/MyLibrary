import React, { Component } from "react";
import { FlatList, TouchableOpacity, TouchableHighlight, Text, View } from "react-native";
import { Divider, List, Menu,  DefaultTheme } from "react-native-paper";
import Colors from "../../../constants/Colors";
import TextInput from "../TextInput/TextInput";

export default class Select extends Component {
    static defaultProps = {
        data: [],

        disabled: false,

        valueExtractor: (item, index) => {
            if (item && item.hasOwnProperty('id')) {
                return item.id;
            }
            return item;
        },
        labelExtractor: (item, index) => {
            if (item && item.hasOwnProperty('value')) {
                return item.value;
            }
            return item;
        },
    };

    state = {
        error: "",
        itemHeight: 54,
        open: false,
        selected: -1,
        value: this.props.value,
        width: 350
    };

    componentWillReceiveProps({ value }) {
        if (value !== this.props.value) {
            this.setState({ value });
        }
    }

    onPress = () => {
        let selected = this.selectedIndex();

        this.setState({ open: true, selected });
    };

    onClose = () => {
        this.setState({ open: false });
    };

    selectedIndex = () => {
        let { value } = this.state;
        let { data, valueExtractor } = this.props;

        return data.findIndex(
            (item, index) => null != item && value === valueExtractor(item, index)
        );
    };

    onSelect = index => {
        let { data, valueExtractor, onChangeOption } = this.props;

        let value = valueExtractor(data[index], index);

        if (typeof onChangeOption === "function") {
            onChangeOption(value, index, data);
        } else {
            this.setState({
                ...this.state,
                value: value
            });
        }

        setTimeout(this.onClose, 250);
    };

    selectedItem = () => {
        let { data } = this.props;

        return data[this.selectedIndex()];
    };

    keyExtractor = (item, index) => {
        let { valueExtractor } = this.props;

        return `${index}-${valueExtractor(item, index)}`;
    };

    renderBase = props => {
        let { value } = this.state;
        let { data, error, labelExtractor, placeholder, errorText, hintText, label } = this.props;

        let index = this.selectedIndex();
        let title;

        if (~index) {
            title = labelExtractor(data[index], index);
        }

        if (null == title) {
            title = value;
        }

        title = null == title || "string" === typeof title ? title : String(title);

        const theme = {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: this.props.error ? Colors["error"] : Colors["bluePrimary"],
                placeholder: this.props.error ? Colors["error"] : Colors["blueGrey-500"],
                background: Colors["white"]
            }
        }
        return (
            <TextInput error={error} label={label} placeholder={placeholder} value={labelExtractor(data[index], this.selectedIndex) || placeholder || 'Select'} editable={false} errorText={errorText} hintText={hintText} paddingSides={0} suffixIcon="down"/>
            /*<View>
                <TextInput
                    pointerEvents="none"
                    error={error}
                    mode="outlined"
                    label={label}
                    style={{marginVertical: 8}}
                    onChangeText={undefined}
                    editable={false}
                    value={title}
                    theme={theme}
                />
                {error && (<Text style={{color: Colors["grey-900"], marginTop: 4}}>{errorText}</Text>)}
                {hintText && (<Text style={{color: Colors["blueGrey-500"], marginTop: 4}}>{hintText}</Text>)}
            </View>*/
        );
    };

    renderItem = ({ item, index }) => {
        let { selected } = this.state;
        let { valueExtractor, labelExtractor } = this.props;

        let value = valueExtractor(item);
        let label = labelExtractor(item);

        let title = null == label ? value : label;

        return (
            <Option
                width={this.state.width}
                index={index}
                selected={selected === index}
                {...item}
                title={title}
                onPress={this.onSelect}
            />
        );
    };

    render() {
        const { disabled, style } = this.props;
        return (

            <View style={{width: "100%", marginTop: 8, marginBottom: 8, paddingLeft: 25, paddingRight: 25 }}>
                <Menu
                    visible={this.state.open}
                    onDismiss={this.onClose}
                    style={{marginTop: 56}}
                    anchor={
                        <TouchableOpacity
                            onLayout={({
                                           nativeEvent: {
                                               layout: { x, y, width, height }
                                           }
                                       }) => this.setState({ width })}
                            style={[style && style]}
                            onPress={!disabled ? this.onPress : null}
                        >
                            <View pointerEvents="none">{this.renderBase()}</View>
                        </TouchableOpacity>
                    }
                >
                    <FlatList
                        style={{ maxHeight: 300}}
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </Menu>
            </View>
        );
    }
}

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }
    onPress = () => {
        const { index, onPress } = this.props;

        if (typeof onPress === "function") {
            onPress(index);
        }
    };

    _onShowUnderlay = () => {
        this.setState({
            ...this.state,
            pressStatus: true
        });
    }
    _onHideUnderlay = () => {
        this.setState({ 
            ...this.state,
            pressStatus: false 
        });
    }

    render() {
        const { selected, title } = this.props;
        const { pressStatus } = this.state;
        return (
            <TouchableHighlight
                style={{
                    backgroundColor: selected || pressStatus ? Colors["blueSubtle"] : Colors["white"],
                    padding: 16,
                    width: this.props.width,
                    height: 48
                }}
                activeOpacity={1}
                onPress={this.onPress}
                onShowUnderlay={this._onShowUnderlay} /* Called when we touch the button */
                onHideUnderlay={this._onHideUnderlay} /* Called when we release the button */
                underlayColor="none"
            >
                <Text style={{ fontSize: 16,
                    color: selected || pressStatus ? Colors["bluePrimary"] : Colors["grey-900"]}}>{title}</Text>
            </TouchableHighlight>
        );
    }
}