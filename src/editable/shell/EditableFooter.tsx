import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

const linkColumns = [
  { title: 'Buy', links: ['Registration', 'Buying help', 'Stores', 'Gift cards'] },
  { title: 'Sell', links: ['Start selling', 'How to sell', 'Business sellers', 'Affiliates'] },
  { title: 'About', links: ['Company info', 'News', 'Careers', 'Policies'] },
  { title: 'Help & Contact', links: ['Seller center', 'Contact us', 'Returns', 'Money Back Guarantee'] },
]

export function EditableFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/10 bg-[#ececec] text-[#1f2937]">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold">{col.title}</h3>
              <div className="mt-4 grid gap-2 text-sm text-[#4b5563]">
                {col.links.map((label) => (
                  <Link key={label} href="/about" className="hover:underline">{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-[#6b7280] sm:px-6 lg:px-8">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:underline">Privacy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
