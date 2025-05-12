// /app/api/roadmap/route.js

import { cartController } from "../../../../lib/controllers/cartController";

export async function GET() {
  const result = (await cartController.getCart()).roadmap;
  console.log(result);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(req) {
  const { title, description, status } = await req.json();
  console.log(status);
  const result = await cartController.saveCart(title, description, status);
  console.log(result);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(req) {
  const { id, newStatus } = await req.json();
  console.log(id);
  const result = await cartController.updateCart(id, newStatus);
  console.log(result);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
