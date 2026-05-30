'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, ChevronDown, Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-3 px-4 py-2 text-xs text-[#4b5563] sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span>Hi!</span>
            <Link href="/login" className="font-semibold text-[#3665f3] hover:underline">Sign in</Link>
            <span>or</span>
            <Link href="/signup" className="font-semibold text-[#3665f3] hover:underline">register</Link>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/contact" className="hover:underline">Help & Contact</Link>
            <button type="button" className="inline-flex items-center gap-1 hover:underline">My account <ChevronDown className="h-3.5 w-3.5" /></button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1480px] items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-11 w-11 rounded-md object-contain" />
          <span className="hidden text-xl font-extrabold tracking-[-0.03em] sm:inline">{SITE_CONFIG.name}</span>
        </Link>

        <button type="button" className="hidden rounded-md px-2 py-1 text-sm text-[#374151] lg:block">Shop by category</button>

        <form action="/search" className="flex min-w-0 flex-1 items-center gap-2">
          <label className="flex min-w-0 flex-1 items-center rounded-full border-2 border-[#111820] bg-white px-4 py-2.5">
            <Search className="h-4 w-4 text-[#6b7280]" />
            <input
              name="q"
              type="search"
              placeholder="Search for anything"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#6b7280]"
            />
          </label>
          <select name="category" className="hidden h-12 rounded-full border border-black/20 bg-white px-4 text-sm lg:block">
            <option value="all">All Categories</option>
            {navItems.map((item) => (
              <option key={item.href} value={item.label.toLowerCase()}>{item.label}</option>
            ))}
          </select>
          <button className="h-12 rounded-full bg-[#3665f3] px-6 text-sm font-bold text-white">Search</button>
        </form>

        <div className="hidden items-center gap-3 lg:flex">
          <UserRound className="h-5 w-5 text-[#1f2937]" />
          <Bell className="h-5 w-5 text-[#1f2937]" />
          <ShoppingCart className="h-5 w-5 text-[#1f2937]" />
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)} className="rounded-full border border-black/15 p-2 lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="hidden border-t border-black/10 lg:block">
        <div className="mx-auto flex max-w-[1480px] items-center gap-6 overflow-x-auto px-4 py-3 text-sm text-[#1f2937] sm:px-6 lg:px-8">
          <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>Home</Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? 'font-bold' : ''}>
              {item.label}
            </Link>
          ))}
          <Link href="/about">About</Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 px-4 py-3 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm font-semibold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
