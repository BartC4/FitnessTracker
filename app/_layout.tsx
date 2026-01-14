import { Stack } from "expo-router";

/**
 * The root layout of the application.
 */
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}
