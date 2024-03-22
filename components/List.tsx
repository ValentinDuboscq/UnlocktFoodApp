import React, { useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import Title from "./Title";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFoods, Food } from "../api/actions";
import { FoodTypes } from "../types/foods";
import Star from "./icons/Star";
import Text from "./Text";

type ListProps = {
  title: string;
  type: FoodTypes;
};

const List = ({ title, type }: ListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: 0,
      queryKey: [type],
      queryFn: ({ pageParam }) => fetchFoods(type, pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      console.log("refetch on scroll");
      fetchNextPage();
    }
  };

  const flattenedData = useMemo(() => {
    let arr;

    if (data?.pages) {
      arr = data.pages.map((item) => item.data).flat();
    }

    return arr as Food[];
  }, [data]);

  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      {flattenedData?.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={flattenedData}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          onEndReached={handleLoadMore}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={
            isFetchingNextPage ? <Text>Chargement...</Text> : null
          }
          onEndReachedThreshold={0.5}
        />
      ) : null}
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
