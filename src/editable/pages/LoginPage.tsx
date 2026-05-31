import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Local login page for this public site.' })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f5f5] text-[#111820]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1480px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b7280]">Member access</p>
            <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl">Welcome back.</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#4b5563]">Sign in to continue posting, managing listings, and tracking responses across your pages.</p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Login</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-[#4b5563]">New here? <Link href="/signup" className="font-bold text-[#3665f3] hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
