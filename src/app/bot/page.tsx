"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ajaxQuery(
  url: string,
  params: any,
  callback: any,
  methodPost = false,
) {
  const request = new XMLHttpRequest();

  request.onload = () => {
    if (request.status === 200) {
      callback(request.responseText);
    } else {
      console.log(`Query failed with ${request.status} error code:`);
      console.log(request.responseText);
    }
  };

  const fullUrl = `${url}${
    methodPost ? "" : Object.keys(params).length > 0 ? "?" : ""
  }${Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&")}`;

  request.open(methodPost ? "POST" : "GET", fullUrl, true);

  if (methodPost) {
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  }

  request.send(
    methodPost
      ? Object.keys(params)
          .map((key) => `${key}=${encodeURIComponent(params[key])}`)
          .join("&")
      : null,
  );
  return request;
}

export default function Page() {
  // const searchParams = useSearchParams();
  // const counter = searchParams.get("counter");
  // const userID = searchParams.get("userID");
  const [ready, setReady] = useState(false);

  function sendYandexToken(objToken: any) {
    const params = {
      tokenData: JSON.stringify(objToken),
      // userID: userID,
    };

    const onResponse = (strResponse: string) => {
      document.body.innerHTML = strResponse;
    };

    ajaxQuery("yandexMetrika_onAccessGranted.php", params, onResponse, true);
  }
  useEffect(() => {
    // window.YaAuthSuggest.init(
    //   {
    //     client_id: "0b65a81b6b164d2b9f78f295e060e5fc",
    //     response_type: "token",
    //     redirect_uri: "https://195.78.14.172:3000/yandex-callback",
    //   },
    //   "https://195.78.14.172",
    //   { view: "default" },
    // )
    //   .then(({ handler }) => handler())
    //   .then((data) => console.log("Сообщение с токеном", data))
    //   .catch((error) => console.log("Обработка ошибки", error));
    window.YaAuthSuggest.init(
      {
        client_id: "0b65a81b6b164d2b9f78f295e060e5fc",
        response_type: "token",
        redirect_uri: "https://92.243.181.59:3000/yandex-callback",
      },
      window.location.origin,
      {
        view: "button",
        parentId: "container",
        buttonView: "main",
        buttonTheme: "light",
        buttonSize: "m",
        buttonBorderRadius: 0,
      },
    ) //@ts-ignore
      .then((result) => {
        console.log(result.handler);
        const r = result.handler();
        return r;
      }) //@ts-ignore
      .then((data) => {
        console.log(data);
        // sendYandexToken(data);
        console.log("Сообщение с токеном: ", data);
      }) //@ts-ignore
      .catch((error) => {
        console.log("Что-то пошло не так: ", error);
        document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
      });
  }, [ready]);
  return (
    <>
      <h1>
        Чтобы разрешить доступ к счетчику {1}, пожалуйста, нажмите кнопку
        Яндекса.
      </h1>
      <p>
        Если кнопка Яндекса не появилась, подождите, пожалуйста. Это может
        занять до 1 минуты.
      </p>
    </>
  );
}
