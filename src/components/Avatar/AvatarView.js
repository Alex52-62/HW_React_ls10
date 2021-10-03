import React from "react";
import AvatarGroup from "react-avatar-group";

import "./style.css";

export const AvatarsView = ({ result }) => (
  <AvatarGroup
    avatars={result}
    initialCharacters={1}
    max={3}
    size={60}
    displayAllOnHover
    shadow={2}
  />
);
