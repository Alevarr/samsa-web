"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const counter = searchParams.get("counter");
  const userID = searchParams.get("userID");

  useEffect(() => {
    window.YaSendSuggestToken(window.location.origin, {
      kek: true,
    });
  }, []);
  return (
    <>
      <h1>
        Чтобы разрешить доступ к счетчику {counter}, пожалуйста, нажмите кнопку
        Яндекса.
      </h1>
      <p>
        Если кнопка Яндекса не появилась, подождите, пожалуйста. Это может
        занять до 1 минуты.
      </p>
    </>
  );
}
