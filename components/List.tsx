import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import Title from "./Title";

type ListProps = {};

const List = () => {
  return (
    <View style={styles.container}>
      <Title>Title</Title>
      <View style={styles.list}>
        <ListItem
          price={180}
          name={"Test"}
          rate={3}
          image="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
        />
        <ListItem
          price={180}
          name={"Test"}
          rate={4}
          image="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
        />
        <ListItem
          price={180}
          name={"Test"}
          rate={5}
          image="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
  },
  list: {
    flexDirection: "row",
    gap: 16,
  },
});

export default List;
