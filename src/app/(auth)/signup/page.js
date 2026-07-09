// app/signup/page.js
import SignupPage from '@/template/SignupPage'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
export default async function Signup() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  return (
    <div>
        <SignupPage/>
    </div>
  )
}
