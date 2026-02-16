import homeContent from "../content/home.json";

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  location: {
    address: string;
    city: string;
    mapUrl: string;
  };
  newsletter: {
    heading: string;
    description: string;
  };
}

export function getHomeContent(): HomeContent {
  return homeContent as HomeContent;
}
