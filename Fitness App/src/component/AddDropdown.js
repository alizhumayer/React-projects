import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import ApslButton from "apsl-react-native-button";
import LoadingUtil from "../utils/LoadingUtil";

const data = [
  "Chest",
  "Shoulders",
  "Back",
  "Arms",
  "Legs",
  "Hip",
  "Core",
  "Cardio",
];

const { width } = Dimensions.get("window");

export class AddDropdown extends Component {  //eslint-disable-line
  static defaultProps = {
    placeholder: "Please enter information",
    placeholderTextColor: "#666",
    keyboardType: "default",
    adjustScreen: () => null,
  };

  state = {
    category: this.props.options[0],
    inputText: "",
  };

  handlePress = async () => {
    await LoadingUtil.showLoading();
    (await this.props.handleConfirmPressed) &&
      this.props.handleConfirmPressed();
    await this.props.handleConfirm({
      item: this.state.inputText,
      category: this.state.category,
    });
    await LoadingUtil.dismissLoading();
  };

  render() {
    const handleSelect = this.props.handleSelect
      ? this.props.handleSelect
      : (index, value) => {
          this.setState({ category: value });
        };
    // console.warn(handleSelect);
    // console.warn({...styles,...this.props.styles}.dropdownMenu)
    return (
      <View style={[styles.container, this.props.styles.container]}>
        {!this.props.hideTextInput && (
          <TextInput
            style={[styles.dropdownInput, this.props.styles.dropdownInput]}
            placeholderTextColor={this.props.placeholderTextColor}
            placeholder={this.props.placeholder}
            value={this.state.inputText}
            onChangeText={text => this.setState({ inputText: text })}
            keyboardType={this.props.keyboardType}
            onFocus={this.props.adjustScreen}
          />
        )}
        <View
          style={[
            styles.dropdownContainer,
            this.props.styles.dropdownContainer,
          ]}>
          <ModalDropdown
            style={[styles.dropdownMenu, this.props.styles.dropdownMenu]}
            textStyle={[
              styles.dropdownMenuText,
              this.props.styles.dropdownMenuText,
            ]}
            dropdownStyle={[
              styles.dropdownList,
              this.props.styles.dropdownList,
            ]}
            dropdownTextStyle={[
              styles.dropdownListText,
              this.props.styles.dropdownListText,
            ]}
            dropdownTextHighlightStyle={[
              styles.dropdownSelection,
              this.props.styles.dropdownSelection,
            ]}
            options={this.props.options}
            defaultValue={this.props.options[0]}
            onSelect={handleSelect}
          />
          {!this.props.hideConfirmButton && (
            <ApslButton
              style={[styles.confirmButton, this.props.styles.confirmButton]}
              onPress={this.handlePress}
              children={
                <Text key="confirm" style={{ color: "#cc6699" }}>
                  Confirm
                </Text>
              }
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: 20,
    zIndex: 999,
  },
  dropdownInput: {
    paddingLeft: 10,
    marginLeft: width * 0.03,
    marginRight: width * 0.03,
    // backgroundColor: "rgba(255,140,0,0.1)",
    height: 50,
  },
  dropdownContainer: {
    padding: width * 0.03,
    paddingTop: width * 0.02,
    flexDirection: "row",
  },
  dropdownMenu: {
    width: width * 0.62,
    height: 50,
    borderRadius: 6,
    marginRight: width * 0.02,
    borderWidth: 1,
    borderColor: "#FF8c00",
    // backgroundColor:'#EEE',
    justifyContent: "center",
  },
  dropdownMenuText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#FF8c00",
  },
  dropdownList: {
    width: width * 0.62,
    marginTop: 15,
  },
  dropdownListText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#FF8c00",
  },
  dropdownSelection: {
    color: "#00cccc",
  },
  confirmButton: {
    height: 50,
    width: width * 0.3,
    borderColor: "#787",
  },
});
