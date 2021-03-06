import * as React from "react";
import { View, Text } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./DynamicRate.style";

export default class DynamicRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicRate: 0,
      dynamicValue: props.initialValue || 0,
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

  numberFormat = (value) => {
    const { numberFormat = "tr-TR" } = this.props;
    return new Intl.NumberFormat(numberFormat, {}).format(value);
  };

  renderTextContent = () => {
    const { dynamicValue } = this.state;
    const { customNumberFormat = null, disableNumberFormatting } = this.props;

    if (customNumberFormat) {
      return customNumberFormat(dynamicValue);
    } else {
      return disableNumberFormatting
        ? dynamicValue
        : this.numberFormat(dynamicValue);
    }
  };

  render() {
    const { textStyle, TextComponent = Text } = this.props;
    return (
      <View style={styles.container}>
        <TextComponent style={textStyle || styles.textStyle}>
          {this.renderTextContent()}
        </TextComponent>
      </View>
    );
  }
}
