// buy-residentials/page.js
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import React from "react";

export default async function BuyResidential({ searchParams }) {
  const params = await searchParams;

 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const res = await fetch(`${baseUrl}/api/profile`, {
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
