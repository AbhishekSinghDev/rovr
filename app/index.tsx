import { Redirect } from "expo-router";
import React from "react";

const RootPage = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default RootPage;
