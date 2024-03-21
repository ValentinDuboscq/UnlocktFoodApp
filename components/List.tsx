import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import Title from "./Title";

const list = [
  {
    price: 180,
    name: "test 1",
    rate: 3,
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    price: 180,
    name: "test 2",
    rate: 3,
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    price: 180,
    name: "test 3",
    rate: 3,
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
];

type ListProps = {};

const List = () => {
  // TODO : https://chat.openai.com/share/ed4daa21-568c-4054-8060-2ba4098cb5de

  const handleLoadMore = () => {
    // if (hasNextPage && !isFetchingNextPage) {
    //   fetchNextPage();
    // }
    console.log("more")
  };

  return (
    <View style={styles.container}>
      <Title>Title</Title>
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item) => item.name}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        onEndReached={handleLoadMore}
        // onEndReachedThreshold={0.5}
      />
      {/*<View style={styles.list}>*/}
      {/*  {list.map((item) => (*/}
      {/*    <ListItem {...item} key={item.name} />*/}
      {/*  ))}*/}
      {/*</View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
  },
  list: {
    paddingHorizontal: 24,
  },
});

export default List;
