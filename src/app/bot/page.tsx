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

  // const fullUrl = `${url}${
  //   methodPost ? "" : Object.keys(params).length > 0 ? "?" : ""
  // }${Object.keys(params)
  //   .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  //   .join("&")}`;

  request.open(methodPost ? "POST" : "GET", url, true);

  if (methodPost) {
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  }

  request.send(JSON.stringify(params));
  // request.send(
  //   methodPost
  //     ? Object.keys(params)
  //         .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  //         .join("&")
  //     : null,
  // );
  return request;
}

export default function Page() {
  const searchParams = useSearchParams();
  const counter = searchParams.get("counter");
  const projectID = searchParams.get("projectID");
  const userID = searchParams.get("userID");
  const SD = searchParams.get("SD");

  const [message, setMessage] = useState<string | null>(null);

  function sendYandexToken(objToken: any) {
    const params = {
      tokenData: JSON.stringify(objToken),
      userID: userID,
      // KVBot
      // projectID: projectID,

      // TGBot
      SD: SD,
    };

    const onResponse = (strResponse: string) => {
      setMessage(strResponse);
    };

    ajaxQuery(
      // "http://localhost/bot/yandexMetrika_onAccessGranted.php", For KVBot
      "http://localhost:8080/bot/yandexMetrika_onAccessGranted.php", // For tgbot
      params,
      onResponse,
      true,
    );
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
        //TODO: добавить userID, а на странице приема все собрать и отдать в тг бота
        // redirect_uri: `http://localhost/bot/tg_bot_YMetrika_access_granted.php?userID=${userID}&counter=${counter}`,
        redirect_uri: "https://2dchat-web.vercel.app/bot/yandex-callback",
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
        // console.log(data);
        sendYandexToken(data);
        // console.log("Сообщение с токеном: ", data);
      }) //@ts-ignore
      .catch((error) => {
        console.log("Что-то пошло не так: ", error);
        setMessage(`Что-то пошло не так: ${JSON.stringify(error)}`);
      });
  }, []);
  return (
    <>
      {message ? (
        <b>{message}</b>
      ) : (
        <>
          <h1>
            Чтобы разрешить доступ к счетчику {counter}, пожалуйста, нажмите
            кнопку Яндекса.
          </h1>
          <p>
            Если кнопка Яндекса не появилась, подождите, пожалуйста. Это может
            занять до 1 минуты.
          </p>
        </>
      )}
    </>
  );
}
