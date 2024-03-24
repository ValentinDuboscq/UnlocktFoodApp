import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import WithPadding from "../templates/WithPadding";
import { Image } from "expo-image";
import useDimensions from "../../hooks/useDimensions";
import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
  HealthValue,
} from "react-native-health";

const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.ActiveEnergyBurned],
    write: [AppleHealthKit.Constants.Permissions.ActiveEnergyBurned],
  },
} as HealthKitPermissions;

const EnergyBurnedBanner = () => {
  const { screen } = useDimensions();

  useEffect(() => {
    try {
      AppleHealthKit.initHealthKit(permissions, (error: string) => {
        if (error) {
          console.log("[ERROR] Cannot grant permissions!");
        }

        let startDate = new Date(); // set to the start of today
        startDate.setHours(0, 0, 0, 0);
        let endDate = new Date(); // set to the current time today

        const options: HealthInputOptions = {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          unit: "kilocalorie",
          includeManuallyAdded: true,
        };

        AppleHealthKit.getBasalEnergyBurned(
          options,
          (callbackError: string, results: HealthValue[]) => {
            console.log(results);
          },
        );
      });
    } catch (e) {
      // console.error(e);
    }
  }, []);

  return (
    <WithPadding>
      <View style={styles.container}>
        <Title style={{ color: "white" }}>Healthy Food</Title>
        <Text style={{ color: "white", maxWidth: "60%" }}>
          Keep you healthy life with healthy food
        </Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>TODO</Text>
        <Image
          style={[
            styles.image,
            { width: screen.width / 3, height: screen.height / 9 },
          ]}
          source={require("../../assets/plate.png")}
          contentFit={"contain"}
        />
      </View>
    </WithPadding>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 12,
    position: "relative",
    width: "100%",
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: -20,
  },
});

export default EnergyBurnedBanner;
