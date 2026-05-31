import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableBrandAssets } from '@/editable/theme/brand-assets'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Classified', href: '/classified' },
  { label: 'Contact Page', href: '/contact' },
  { label: 'Sign in', href: '/login' },
  { label: 'Sign up', href: '/signup' },
]

export function EditableFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/10 bg-[#ececec] text-[#1f2937]">
      <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-10 text-sm font-semibold text-[#4b5563] sm:px-6 lg:px-8">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-center gap-3 px-4 py-4 text-xs text-[#6b7280] sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="h-10 w-20 overflow-hidden rounded-md">
              <img src={editableBrandAssets.logo} alt={SITE_CONFIG.name} className="h-full w-full scale-125 object-cover" />
            </span>
            <p>
              &copy; {year} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
