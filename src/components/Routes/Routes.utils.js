import Releases from "../../pages/Releases/Releases";
import Trending from "../../pages/Trending";
import ComingSoon from "../../pages/ComingSoon";
import Favorites from "../../pages/Favorites";
import WatchLater from "../../pages/WatchLater";

export const routesList = [
  {
    path: "/releases",
    Component: Releases,
    title: "Последние релизы",
  },
  {
    path: "/trending",
    Component: Trending,
    title: "В тренде",
  },
  {
    path: "/coming",
    Component: ComingSoon,
    title: "Coming Soon",
  },
  {
    path: "/favorites",
    Component: Favorites,
    title: "Избранные",
  },
  {
    path: "/watch-later",
    Component: WatchLater,
    title: "Посмотреть позже",
  },
];
