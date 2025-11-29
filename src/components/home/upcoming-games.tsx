import React from "react";
import UpcomingGameCard from "../cards/upcoming-game-card";

export const UpcomingGames = () => {
  const staticData = [
    {
      image: "/images/games/game1.png",
      title: "Mass Effect 3",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game2.png",
      title: "Pathologic II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game3.png",
      title: "Hellblade II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game4.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game5.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game6.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game1.png",
      title: "Mass Effect 3",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game2.png",
      title: "Pathologic II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game3.png",
      title: "Hellblade II",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game4.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game5.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
    {
      image: "/images/games/game6.png",
      title: "Baldur’s Gate III",
      description:
        "Pathologic 2 is a survival horror RPG set in a mysterious plague-ridden town. You play as a healer struggling",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-12 gap-3 space-y-5">
      {staticData.map((data, index) => (
        <React.Fragment key={index}>
          <div className="col-span-12 h-full w-full md:col-span-6 lg:col-span-3">
            <UpcomingGameCard
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              isBadge
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
