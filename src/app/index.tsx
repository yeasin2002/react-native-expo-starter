import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { withUniwind } from "uniwind";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppTheme } from "@/contexts/app-theme-context";

const StyledIonicons = withUniwind(Ionicons);

export default function HomePage() {
  const { currentTheme, isDark } = useAppTheme();

  return (
    <Container>
      {/* Top bar */}
      <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
        <Text className="text-2xl font-bold text-foreground">Home</Text>
        <ThemeToggle />
      </View>

      {/* Hero section */}
      <View className="items-center px-6 pt-8 pb-10">
        <View className="w-20 h-20 rounded-full bg-primary items-center justify-center mb-6">
          <StyledIonicons name="rocket-outline" size={36} className="text-primary-foreground" />
        </View>
        <Text className="text-3xl font-bold text-foreground text-center mb-3">Expo Starter</Text>
        <Text className="text-base text-default-500 text-center leading-6">
          A solid foundation for building cross-platform apps with Expo, HeroUI Native, and Uniwind.
        </Text>
      </View>

      {/* Stats row */}
      <View className="flex-row gap-3 px-6 mb-6">
        {[
          { label: "Framework", value: "Expo 55" },
          { label: "Styling", value: "Uniwind" },
          { label: "Theme", value: currentTheme },
        ].map((item) => (
          <View key={item.label} className="flex-1 bg-content1 rounded-2xl p-4 items-center">
            <Text className="text-lg font-bold text-foreground capitalize">{item.value}</Text>
            <Text className="text-xs text-default-400 mt-1">{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Feature cards */}
      <View className="px-6 gap-3 pb-10">
        {[
          {
            icon: "color-palette-outline" as const,
            title: "Theming",
            desc: isDark ? "Dark mode is active" : "Light mode is active",
          },
          {
            icon: "layers-outline" as const,
            title: "Navigation",
            desc: "File-based routing with Expo Router",
          },
          {
            icon: "flash-outline" as const,
            title: "Animations",
            desc: "Powered by Reanimated 4",
          },
        ].map((card) => (
          <View
            key={card.title}
            className="flex-row items-center bg-content1 rounded-2xl p-4 gap-4"
          >
            <View className="w-10 h-10 rounded-xl bg-primary/10 items-center justify-center">
              <StyledIonicons name={card.icon} size={20} className="text-primary" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-foreground">{card.title}</Text>
              <Text className="text-xs text-default-400 mt-0.5">{card.desc}</Text>
            </View>
            <StyledIonicons name="chevron-forward" size={16} className="text-default-300" />
          </View>
        ))}
      </View>
    </Container>
  );
}
