// buy-residentials/page.js
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import React from "react";

export default async function BuyResidential({ searchParams }) {
  const params = await searchParams;

  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>there is something wrong</h3>;

  let finalData = data.data;

  if (params.category) {
    finalData = finalData.filter(
      (i) => i.category?.toLowerCase() === params.category?.toLowerCase(),
    );
  }

  return <BuyResidentialsPage data={finalData} />;
}
