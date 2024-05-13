import { Roboto } from 'next/font/google';

import { GoogleSignInButton } from "./components/authButton";

export default function LoginPage() {
  return (
    <div className="container">
      <GoogleSignInButton />
    </div>
  );
}