import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createServer } from "miragejs";
import { feed } from "./data/feed";

if (window.server) {
  server.shutdown();
}

// this is meant to simulate retrieving data from an external API
// more documentation miragejs.io
window.server = createServer({
  routes() {
    this.get("/api/tiktok/feed", () => {
      return { feed };
    });
  },
});

export default function App() {
  let [feed, setFeed] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/tiktok/feed")
      .then((res) => res.json())
      .then((json) => setFeed(json.feed));
  }, []);

  return (
    <View>
      {feed.map((feedItem) => (
        <Text key={feedItem.id}>{feedItem.userName}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
