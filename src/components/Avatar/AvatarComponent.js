import React from "react";

import { AvatarsView } from "./AvatarView";
import "./style.css";

export const Ava = () => {
  const avatars = [
    { nickname: "Dreamer", name: "James" },
    { nickname: "Detonator", name: "Jorgen" },
    { nickname: "SSSR", name: "Amy" },
    { nickname: "Crazy", name: "Max" },
    { nickname: "KickBoy", name: "Phil" },
    { nickname: "Falcon", name: "Wim" },
    { nickname: "Angel", name: "John" },
  ];

  const result = avatars.map((avatar) => {
    return avatar.nickname;
  });

  return (
    <div className="avatar">
      <AvatarsView result={result} />
    </div>
  );
};
