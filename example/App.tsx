import * as React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import DynamicRate from "./build/dist/DynamicRate";
/**
 * ? Local Imports
 */
import styles from "./App.style";

interface IProps {}

interface IState {
  rate: number;
  value: number;
}

class App extends React.Component<IProps, IState> {
  numberFormat = value => new Intl.NumberFormat("tr", {}).format(value);

  renderExampleCard = (value, rate) => (
    <View style={styles.cardStyle}>
      <DynamicRate value={value} rate={rate} textStyle={null} />
      <View style={styles.dividerStyle} />
      <View>
        <Text style={styles.cardTitleTextStyle}>
          <Text style={styles.cardValueTextStyle}>Starting Value:</Text>{" "}
          {this.numberFormat(value)}
        </Text>
        <Text style={styles.cardTitleTextStyle}>
          <Text style={styles.cardValueTextStyle}>Change Rate Per Hour:</Text>{" "}
          {this.numberFormat(rate)}
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTextStyle}>
                React Native Dynamic Rate
              </Text>
            </View>
            <View style={styles.cardsExampleContainer}>
              {this.renderExampleCard(150000, 3600)}
              {this.renderExampleCard(501394014, 50300)}
              {this.renderExampleCard(105, 305)}
              {this.renderExampleCard(0, 5014)}
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
