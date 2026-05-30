'use client'

import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

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
      <main className="bg-[#f5f5f5] text-[#111820]">
        <section className="mx-auto grid max-w-[1480px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b7280]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.05em]">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4b5563]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {cards.map((lane) => (
                <div key={lane.title} className="rounded-3xl border border-black/10 bg-white p-5">
                  <lane.icon className="h-5 w-5 text-[#3665f3]" />
                  <h2 className="mt-3 text-xl font-bold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#4b5563]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl font-bold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
