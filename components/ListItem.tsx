import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Text from "./Text";
import Rate from "./Rate";

type ListItemProps = {
  price: number;
  name: string;
  img: string;
  rate: number;
};

const ListItem = ({ price, rate, name, img }: ListItemProps) => {
  return (
    <View style={styles.container}>
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
    width: 150,
    height: 175,
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
    gap: 4,
    padding: 8,
    backgroundColor: "white",
    borderEndStartRadius: 12,
    borderEndEndRadius: 12,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: "#D4D4D4",
  },
});

export default ListItem;
