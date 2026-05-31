'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableBrandAssets } from '@/editable/theme/brand-assets'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  useEffect(() => {
    const setIcon = (rel: string) => {
      let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.rel = rel
        document.head.appendChild(link)
      }
      link.href = editableBrandAssets.favicon
      link.type = 'image/png'
    }

    setIcon('icon')
    setIcon('shortcut icon')
    setIcon('apple-touch-icon')
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1480px] items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="h-14 w-24 overflow-hidden rounded-md">
            <img src={editableBrandAssets.logo} alt={SITE_CONFIG.name} className="h-full w-full scale-125 object-cover" />
          </span>
          <span className="hidden text-xl font-extrabold tracking-[-0.03em] sm:inline">{SITE_CONFIG.name}</span>
        </Link>

        <form action="/search" className="ml-auto flex w-full min-w-0 max-w-[760px] items-center gap-2">
          <label className="flex min-w-0 flex-1 items-center rounded-full border-2 border-[#111820] bg-white px-4 py-2.5">
            <Search className="h-4 w-4 text-[#6b7280]" />
            <input
              name="q"
              type="search"
              placeholder="Search for anything"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#6b7280]"
            />
          </label>
          <button className="h-12 rounded-full bg-[#3665f3] px-6 text-sm font-bold text-white">Search</button>
        </form>

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
