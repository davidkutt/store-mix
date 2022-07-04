/** @format */

import * as React from "react";
import { Image, Text, View } from "react-native";
import moment from "moment";

import { Config, withTheme } from "@common";

import styles from "./styles";

const Header = React.memo(({ theme: { colors: text } }) => {
  const currentDate = moment().format("DD MMM YY");

  return (
    <View style={styles.headerLogo}>
        <View style={styles.logoContainer}>
          {/*<Image source={Config.LogoImage} style={styles.logo} />*/}
          <Text style={styles.logoText}>
            StoreMIX
          </Text>
          <Text style={[styles.headerDate, { color: text }]}>
            {currentDate.toUpperCase()}
          </Text>
      </View>
    </View>
  );
});

export default withTheme(Header);
