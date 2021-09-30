import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ClerkProvider } from "@clerk/clerk-react";
// import { Clerk } from "@clerk/clerk-js";
import Clerk from "@clerk/clerk-js/dist/clerk.js";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ClerkProvider Clerk={Clerk} frontendApi="clerk.dq2g0.16u6f.lcl.dev">
          <Navigation colorScheme={colorScheme} />
        </ClerkProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
