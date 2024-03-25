import React, { useMemo } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import ListItem from "../molecules/ListItem";
import Title from "../atoms/Title";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFoods, Food } from "../../api/actions";
import { FoodTypes } from "../../types/foods";
import WithPadding from "../templates/WithPadding";
import useDimensions from "../../hooks/useDimensions";
import Loader from "../icons/Loader";

const SkeletonList = ({ numItems = 3 }: { numItems?: number }) => {
  const { screen } = useDimensions();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ flexDirection: "row", paddingBottom: 16 }}
    >
      {new Array(numItems).fill(1).map((_, i) => (
        <View
          key={i}
          style={[
            styles.loader,
            {
              width: screen.width / 2.5,
              height: screen.height / 5,
              marginLeft: screen.width / 20,
            },
          ]}
        />
      ))}
    </ScrollView>
  );
};

type ListProps = {
  title: string;
  type: FoodTypes;
};

const List = ({ title, type }: ListProps) => {
  const { screen } = useDimensions();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: 0,
      queryKey: [type],
      queryFn: ({ pageParam }) => fetchFoods(type, pageParam),
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
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
      <WithPadding>
        <Title>{title}</Title>
      </WithPadding>
      {isLoading && <SkeletonList />}
      {flattenedData?.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={flattenedData}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => (
            <View style={{ width: screen.width / 20 }} />
          )}
          onEndReached={handleLoadMore}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={
            isFetchingNextPage ? (
              <View
                style={[
                  styles.loader,
                  {
                    width: screen.width / 2.5,
                    height: screen.height / 5,
                    marginLeft: screen.width / 20,
                  },
                ]}
              >
                <Loader />
              </View>
            ) : null
          }
          // onEndReachedThreshold={0.5}
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
  loader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4D4D4",
    borderRadius: 12,
  },
});

export default List;
