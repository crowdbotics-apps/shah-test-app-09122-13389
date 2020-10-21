import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <View style={styles.View_4}>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: {},
  View_1: {},
  Button_2: {},
  Text_3: {},
  View_1: {},
  Button_2: {},
  Text_3: {},
  View_4: { flexDirection: "row" },
  View_5: {},
  View_6: {}
})
