export async function POST(req: Request) {
  const requestBody = await req.json();

  await fetch("http://localhost/catchForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  return new Response("ok", {
    status: 200,
  });
}
