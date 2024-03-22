import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { Rubik_600SemiBold, Rubik_400Regular } from "@expo-google-fonts/rubik";
import { Text } from "react-native";

const queryClient = new QueryClient();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Chargement...</Text>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};

export default Layout;
