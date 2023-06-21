import React, { useContext, useEffect, useState } from "react";
import Banner from "../sectionBanner/Banner";
import RowPost from "../sectionRowPost/RowPost";
import request from "../Constants/request";

export default function Home() {
  const moviesCategory = request.map((value) => {
    return <RowPost title={value.title} url={value.url} movies={value} />;
  });

  return (
    <div>
      <Banner />
      {moviesCategory}
    </div>
  );
}

{
  /* <RowPost title={"popular on netflix"} url={request.orgninal} />
      <RowPost title={"romanse"} url={request.romance} />
      <RowPost title="action" url={request.action} />
      <RowPost title="horrerMovies" url={request.horrer} />
      <RowPost title="comedies" url={request.comedies} />
      <RowPost title="documentry" url={request.documentry} /> */
}
