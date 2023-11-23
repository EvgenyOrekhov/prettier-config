import { View, Text } from "react-native";
import clsx from "clsx";
import tw from "twrnc";

export function MyButton({ isHovering, children }) {
  let classes = clsx("rounded bg-blue-500 px-4 py-2 text-base text-white", {
    "bg-blue-700 text-gray-100": isHovering,
  });

  return (
    <View style={tw`bg-white p-4 dark:bg-black`}>
      <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text>
      <button className={classes}>{children}</button>
    </View>
  );
}
