import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigateTo(name: string, params: any = {}): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack(): void {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
