import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
  cardsExampleContainer: ViewStyle;
  cardStyle: ViewStyle;
  dividerStyle: ViewStyle;
  cardTitleTextStyle: TextStyle;
  cardValueTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: "30%",
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    marginLeft: 32,
    marginRight: 32
  },
  titleTextStyle: {
    fontSize: 40,
    color: "#290404",
    fontWeight: "bold",
    textAlign: "center"
  },
  cardsExampleContainer: {
    marginTop: 32
  },
  cardStyle: {
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
  },
  dividerStyle: {
    height: 1,
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#ccc"
  },
  cardTitleTextStyle: {
    color: "gray"
  },
  cardValueTextStyle: {
    fontWeight: "600",
    color: "#290404"
  }
});
