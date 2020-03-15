import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  SafeAreaView
} from "react-native";

import DynamicRate from "./lib/DynamicRate";

const { width: ScreenWidth } = Dimensions.get("window");

interface IProps {}

interface IState {
  value: number;
  rate: number;
}

class App extends Component<IProps, IState> {
  numberFormat = value => new Intl.NumberFormat("tr-TR", {}).format(value);

  renderExampleCard = (value, rate) => (
    <View
      style={{
        padding: 16,
        margin: 16,
        borderRadius: 8,
        width: ScreenWidth * 0.8,
        backgroundColor: "#fdfdfd",
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#757575",
        shadowOffset: {
          width: 0,
          height: 3
        }
      }}
    >
      <DynamicRate value={value} rate={rate} textStyle={null} />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#ccc",
          marginTop: 16,
          marginBottom: 16
        }}
      />
      <View>
        <Text style={{ color: "gray" }}>
          <Text style={{ fontWeight: "600", color: "#290404" }}>
            Starting Value:
          </Text>{" "}
          {this.numberFormat(value)}
        </Text>
        <Text style={{ color: "gray" }}>
          <Text style={{ fontWeight: "600", color: "#290404" }}>
            Change Rate Per Hour:
          </Text>{" "}
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
          <View
            style={{
              marginTop: "30%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ marginLeft: 32, marginRight: 32 }}>
              <Text
                style={{
                  fontSize: 40,
                  color: "#290404",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                React Native Dynamic Rate
              </Text>
            </View>

            <View style={{ marginTop: 32 }}>
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
