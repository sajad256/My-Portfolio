import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rnw from "vite-plugin-react-native-web";

export default defineConfig({
  plugins: [react(), rnw()],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
});
