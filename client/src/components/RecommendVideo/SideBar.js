import React from "react";
import SideBarCard from "./SideBarCard";

function SideBar({ videos }) {
  console.log('Recom videos')
  return videos.map((video) => (
    <SideBarCard
      key={video._id}
      title={video.title}
      user={video.writer.handle}
      catagory={video.catagory}
      thumbnail={video.thumbnail}
      id={video._id}
    />
  ));
}

export default React.memo(SideBar);
