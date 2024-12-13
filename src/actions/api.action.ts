"use server";

const API_URL = "https://bica-project.tw1.ru";

type Response = {
  answer_text: string;
  emotion: number;
};

export async function sendDialog(text: string) {
  const body = {
    input_text: text,
  };
  console.log(body);
  try {
    const response = await fetch(`${API_URL}/getAnswerDialog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Response = await response.json();

    return { data, error: null };
  } catch (e) {
    const error = e as Error;

    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}
export async function sendEssay(text: string) {
  const body = {
    input_text: text,
  };
  console.log(body);
  try {
    const response = await fetch(`${API_URL}/getAnswerEssay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Response = await response.json();

    return { data, error: null };
  } catch (e) {
    const error = e as Error;

    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}
