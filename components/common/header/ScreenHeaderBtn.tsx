import { Image, TouchableOpacity } from "react-native";

import styles from "./Screenheader.style";
import React from "react";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: any) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;