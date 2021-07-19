import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Good } from "../types";
import { Head } from "../components/Head";

export default function Home() {
  const [goods, setGoods] = useState<Good[]>([]);

  const { t } = useTranslation();

  const postGood = async () => {
    await fetch("/api/goods", {
      method: "POST",
    });
  };

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(`/api/goods`);
      const goods = await res.json();
      setGoods(goods);
    };

    fetchGoods();
  }, []);

  console.log(goods);

  return (
    <div>
      <Head />
      <main>
        <div>{t("test.test")}</div>
        <div className="bg-gray-100">Top</div>
        <div>
          {goods.map((good) => (
            <div key={good.id}>
              <div>{good.name_en}</div>
              <div>{good.name_jp}</div>
              <div>{good.description_en}</div>
              <div>{good.description_jp}</div>
              <div>{good.price_now}</div>
              <div>{good.size_x}</div>
              <div>{good.size_y}</div>
              <div>{good.size_z}</div>
            </div>
          ))}
        </div>
        <button onClick={postGood}>TEST POST</button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
