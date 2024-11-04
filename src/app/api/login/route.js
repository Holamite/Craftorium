import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(`Method ${req.method} Not Allowed`, {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const { email, password } = await req.json();

  const client = await clientPromise;
  const db = client.db("Cluster0");

  // Find the user
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // For simplicity, we're just sending a success message
  return new Response(
    JSON.stringify({ message: "Login successful", userId: user._id }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
