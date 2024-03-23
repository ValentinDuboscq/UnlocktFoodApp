import React, { useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../molecules/ListItem";
import Title from "../atoms/Title";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFoods, Food } from "../../api/actions";
import { FoodTypes } from "../../types/foods";
import Text from "../atoms/Text";
import WithPadding from "../templates/WithPadding";
import useDimensions from "../../hooks/useDimensions";
import Loader from "../icons/Loader";

type ListProps = {
  title: string;
  type: FoodTypes;
};

const List = ({ title, type }: ListProps) => {
  const { screen } = useDimensions();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
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
