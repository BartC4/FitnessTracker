import { Redirect } from "expo-router";

/**
 * Redirect invalid routes to home screen
 */
export default function NotFoundScreen() {
  return (
    <Redirect href="/"/>
  )
}
