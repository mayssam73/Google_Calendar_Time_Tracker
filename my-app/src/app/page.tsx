"use client";

import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react'
import Dashboard from './dashboard/page'
import LoginPage from './loginPage'

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <SessionProvider>
      { status === "authenticated" ? <Dashboard /> : <LoginPage /> }
    </SessionProvider>
  )
}