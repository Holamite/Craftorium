// "use client";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";

// const AuthPage = () => {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Simulate email sign-in/sign-up function
//   const onEmailSignIn = (email, password, isSignUp) => {
//     console.log(
//       `${isSignUp ? "Signing up" : "Logging in"} with`,
//       email,
//       password
//     );
//     // Add authentication logic here
//   };

//   // Simulate Google sign-in function
//   const onGoogleSignIn = () => {
//     console.log("Signing in with Google");
//     // Add Google sign-in logic here
//   };

//   const toggleAuthMode = () => setIsSignUp((prev) => !prev);

//   return (
//     <div className="flex min-h-screen bg-gray-200 items-center justify-center">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           {isSignUp ? "Create an Account" : "Log In"}
//         </h2>

//         {/* Form Inputs */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             onEmailSignIn(email, password, isSignUp);
//           }}
//           className="space-y-5"
//         >
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition"
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
//           >
//             {isSignUp ? "Sign Up" : "Log In"}
//           </button>
//         </form>

//         {/* Google Sign-In */}
//         <div className="mt-6">
//           <button
//             onClick={onGoogleSignIn}
//             className="w-full flex items-center justify-center py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
//           >
//             <FcGoogle className="mr-2" />
//             Continue with Google
//           </button>
//         </div>

//         {/* Toggle Sign-Up/Log-In Mode */}
//         <p className="text-center text-gray-600 mt-6">
//           {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
//           <span
//             onClick={toggleAuthMode}
//             className="text-indigo-500 cursor-pointer hover:underline"
//           >
//             {isSignUp ? "Log in" : "Sign up"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import login from "../pages/api/";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onEmailSignIn = async (email, password, isSignUp) => {
    console.log(`Trying to ${isSignUp ? "register" : "login"} user...`);

    try {
      const response = await fetch(`/api/${isSignUp ? "register" : "login"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Here you might want to redirect the user or update the app state
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const onGoogleSignIn = () => {
    console.log("Signing in with Google");
    // Add Google sign-in logic here
  };

  const toggleAuthMode = () => setIsSignUp((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-gray-200 items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isSignUp ? "Create an Account" : "Log In"}
        </h2>

        {message && (
          <p className="text-center text-sm mb-4 text-red-500">{message}</p>
        )}

        {/* Form Inputs */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEmailSignIn(email, password, isSignUp);
          }}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        {/* Google Sign-In */}
        <div className="mt-6">
          <button
            onClick={onGoogleSignIn}
            className="w-full flex items-center justify-center py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>

        {/* Toggle Sign-Up/Log-In Mode */}
        <p className="text-center text-gray-600 mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={toggleAuthMode}
            className="text-indigo-500 cursor-pointer hover:underline"
          >
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
