import { StyleSheet, View } from "react-native";
import Button from "../components/atoms/Button";
import colors from "../assets/colors";
import Title from "../components/atoms/Title";
import Text from "../components/atoms/Text";
import WithPadding from "../components/templates/WithPadding";
import WelcomeIllustration from "../components/icons/WelcomeIllustration";
import WelcomeWave from "../components/icons/WelcomeWave";
import useDimensions from "../hooks/useDimensions";

export default function Welcome() {
  const { screen } = useDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title
          style={{
            fontSize: 32,
            color: "white",
            paddingTop: "20%",
          }}
        >
          Healthy Food
        </Title>
        <View style={[styles.wave, { bottom: -screen.height / 7 }]}>
          <WelcomeWave width={screen.width} height={screen.height / 6} />
        </View>
        <View style={styles.illu}>
          <WelcomeIllustration height={screen.height / 2} />
        </View>
      </View>
      <View style={styles.bottom}>
        <WithPadding>
          <Text
            style={{ color: "#D4D4D4", textAlign: "center", lineHeight: 28 }}
          >
            Start your day off right with these healthy breakfast recipes{" "}
          </Text>
          <Button href="/home" title="Get started" />
        </WithPadding>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
  top: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    position: "relative",
  },
  illu: {
    position: "absolute",
    bottom: -100,
  },
  wave: {
    position: "absolute",
  },
  bottom: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 36,
  },
});
