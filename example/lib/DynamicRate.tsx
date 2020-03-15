import React, { Component } from "react";
import { StyleSheet, View, Text, StyleProp } from "react-native";

interface Props {
  rate: number;
  value: number;
  textStyle: any;
}

interface State {
  dynamicRate: number;
  dynamicValue: number;
}

export default class DynamicRate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dynamicRate: 0,
      dynamicValue: props.value || 0
    };
  }

  static defaultProps = {};

  componentDidMount() {
    this.calculateRate();
  }

  calculateRate = () => {
    const { rate } = this.props;
    const dynamicRate = rate / 3600;
    this.setState({ dynamicRate }, () => this.dynamicRateChange());
  };

  dynamicRateChange = () => {
    setInterval(() => {
      const { dynamicValue, dynamicRate } = this.state;
      const newValue = dynamicValue + dynamicRate;
      this.setState({ dynamicValue: newValue });
    }, 1000);
  };

  numberFormat = value => new Intl.NumberFormat("tr-TR", {}).format(value);

  render() {
    const { dynamicValue } = this.state;
    const { textStyle } = this.props;
    return (
      <View style={styles.container}>
        <Text style={textStyle || styles.textStyle}>
          {this.numberFormat(dynamicValue)}
        </Text>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center"
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500"
  }
});
