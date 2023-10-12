import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const posts = [
  {
    title: "Summer Vacation in Paradise",
    slug: "summer-vacation-in-paradise",
    description:
      "Enjoying the sun, sand, and sea in the most beautiful destination. 🌴☀️ #TravelDiaries",
  },
  {
    title: "Weekend Adventure in the Mountains",
    slug: "weekend-adventure-in-the-mountains",
    description:
      "Exploring breathtaking mountain trails and camping under the stars. ⛰️🏕️ #NatureLovers",
  },
  {
    title: "Homemade Gourmet Dinner",
    slug: "homemade-gourmet-dinner",
    description:
      "Cooked up a delicious, five-course meal at home tonight. 🍽️👨‍🍳 #Foodie",
  },
  {
    title: "Art Gallery Opening Night",
    slug: "art-gallery-opening-night",
    description:
      "Mesmerized by the stunning artwork at the gallery opening. 🎨🖼️ #ArtLovers",
  },
  {
    title: "Sunset at the Beach",
    slug: "sunset-at-the-beach",
    description:
      "Captured the mesmerizing beauty of the sunset by the shore. 🌅🏖️ #SunsetViews",
  },
  {
    title: "New Book Release - Must Read!",
    slug: "new-book-release-must-read",
    description:
      "Dive into the latest literary masterpiece that's taking the world by storm. 📚📖 #BookRecommendation",
  },
  {
    title: "Adopted a Furry Friend Today",
    slug: "adopted-a-furry-friend-today",
    description:
      "Welcoming a new member to the family. Meet our adorable furball! 🐾❤️ #Pets",
  },
  {
    title: "Gaming Marathon All Weekend",
    slug: "gaming-marathon-all-weekend",
    description:
      "Leveled up, defeated bosses, and had an epic weekend gaming session. 🎮🕹️ #GamerLife",
  },
  {
    title: "Morning Yoga and Meditation",
    slug: "morning-yoga-and-meditation",
    description:
      "Starting the day with inner peace and mindfulness. 🧘‍♀️🌞 #WellnessJourney",
  },
  {
    title: "Scenic Road Trip Adventure",
    slug: "scenic-road-trip-adventure",
    description:
      "Exploring hidden gems and picturesque landscapes on the open road. 🚗🌄 #RoadTrip",
  },
];

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
