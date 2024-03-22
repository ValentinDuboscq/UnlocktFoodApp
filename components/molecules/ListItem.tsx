import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Text from "../atoms/Text";
import Rate from "./Rate";
import useDimensions from "../../hooks/useDimensions";

type ListItemProps = {
  price: number;
  name: string;
  img: string;
  rate: number;
};

const ListItem = ({ price, rate, name, img }: ListItemProps) => {
  const { screen } = useDimensions();

  return (
    <View
      style={[
        styles.container,
        { width: screen.width / 2.5, height: screen.height / 3.5 },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} contentFit="cover" />
        <View style={styles.rateContainer}>
          <Rate value={rate} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 12,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    borderStartStartRadius: 12,
    borderStartEndRadius: 12,
  },
  rateContainer: {
    position: "absolute",
    bottom: 4,
    right: 4,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "white",
    borderEndStartRadius: 12,
    borderEndEndRadius: 12,
    height: "40%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Rubik_600SemiBold",
  },
  price: {
    fontSize: 14,
    color: "#D4D4D4",
  },
});

export default ListItem;
