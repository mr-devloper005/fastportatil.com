'use client'

import { ArrowRight, Bookmark, Building2, Clock3, FileText, Image as ImageIcon, Mail, MapPin, Phone, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableBrandAssets } from '@/editable/theme/brand-assets'

function getCards(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') return [
    { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify details, and publish quickly.' },
    { icon: Phone, title: 'Sales support', body: 'Talk through package options and listing setup.' },
    { icon: MapPin, title: 'Coverage requests', body: 'Request more category or city-specific visibility.' },
  ]
  if (kind === 'editorial') return [
    { icon: FileText, title: 'Content submissions', body: 'Share article ideas and editorial collaborations.' },
    { icon: Mail, title: 'Campaigns', body: 'Coordinate partnerships and sponsored placements.' },
    { icon: Sparkles, title: 'Contributor support', body: 'Get help on publishing workflows and voice.' },
  ]
  if (kind === 'visual') return [
    { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss visual campaigns and promotion plans.' },
    { icon: Sparkles, title: 'Licensing', body: 'Contact us for usage rights and media requests.' },
    { icon: Mail, title: 'Media kits', body: 'Request decks and placement information.' },
  ]
  return [
    { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources and links for featured spots.' },
    { icon: Mail, title: 'Partnerships', body: 'Coordinate promotion and cross-posting campaigns.' },
    { icon: Sparkles, title: 'Support', body: 'Need help with setup or publishing? We can assist.' },
  ]
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const cards = getCards(getProductKind(recipe))

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f7f6] text-[#111820]">
        <section className="mx-auto grid max-w-[1480px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111820] p-6 text-white shadow-[0_24px_80px_rgba(17,24,32,0.18)] sm:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#ff3b18,#ff9d00,#0ba7ff)]" />
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#9edcff]">
                <Zap className="h-4 w-4" />
                {pagesContent.contact.eyebrow}
              </span>
              <span className="h-12 w-20 overflow-hidden rounded-xl bg-white/10">
                <img src={editableBrandAssets.logo} alt="" className="h-full w-full scale-125 object-cover" />
              </span>
            </div>

            <h1 className="mt-10 max-w-2xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl">
              Fast help for listings, launches, and laptop-speed ideas.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">{pagesContent.contact.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Clock3, label: '24h', text: 'response rhythm' },
                { icon: ShieldCheck, label: 'Direct', text: 'request routing' },
                { icon: ArrowRight, label: 'Clear', text: 'next steps' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                  <item.icon className="h-5 w-5 text-[#ff9d00]" />
                  <p className="mt-3 text-2xl font-black tracking-[-0.04em]">{item.label}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/52">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff5a1f]">Message desk</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">{pagesContent.contact.formTitle}</h2>
              <div className="mt-5">
                <EditableContactLeadForm />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {cards.map((lane) => (
                <div key={lane.title} className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf5ff] text-[#0b69a3]">
                    <lane.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.03em]">{lane.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#52606d]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
