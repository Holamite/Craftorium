import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

// export async function POST(req, res) {
//   console.log("Register endpoint hit");

//   if (req.method === "POST") {
//     const { email, password } = req.body;
//     console.log("Email:", email, "Password:", password);

//     const client = await clientPromise;
//     const db = client.db("Cluster0");

//     // Check if user already exists
//     const existingUser = await db.collection("users").findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     console.log(hashedPassword);

//     // Insert the new user
//     const result = await db.collection("users").insertOne({
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User created successfully",
//       userId: result.insertedId,
//     });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export async function POST(req) {
  console.log("Register endpoint hit");

  const { email, password } = await req.json(); // Parse request body
  console.log("Email:", email, "Password:", password);

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const client = await clientPromise;
  const db = client.db("Cluster0");

  // Check if user already exists
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);

  // Insert the new user
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  return new Response(
    JSON.stringify({
      message: "User created successfully",
      userId: result.insertedId,
    }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
}
