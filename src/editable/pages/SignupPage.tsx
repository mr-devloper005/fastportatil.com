import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Local signup page for this public site.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f5f5] text-[#111820]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1480px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-3xl font-extrabold tracking-tight">Create account</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#4b5563]">Already have an account? <Link href="/login" className="font-bold text-[#3665f3] hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b7280]">Start selling and promoting</p>
            <h2 className="mt-5 max-w-xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl">Get your space online in minutes.</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#4b5563]">Create your account to publish listings, connect with customers, and manage your ads in one dashboard.</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
