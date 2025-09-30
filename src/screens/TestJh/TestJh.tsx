import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { FeaturedItemSection } from "./sections/FeaturedItemSection/FeaturedItemSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { RecentItemsSection } from "./sections/RecentItemsSection/RecentItemsSection";
import { RecommendedItemsSection } from "./sections/RecommendedItemsSection/RecommendedItemsSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";

export const TestJh = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative w-full min-h-screen bg-[#121511]"
      data-model-id="30:25"
    >
      <SidebarSection />
      <NavigationSection />
      <MainContentSection />
      <ContentSection />
      <HeaderSection />
      <FeaturedItemSection />
      <RecentItemsSection />
      <RecommendedItemsSection />
    </div>
  );
};
