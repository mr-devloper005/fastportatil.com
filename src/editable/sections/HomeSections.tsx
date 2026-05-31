import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, getEditableExcerpt, getEditableCategory, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function FeaturedHeroCard({ post, href }: { post?: SitePost; href: string }) {
  const title = post?.title || 'Find better offers in minutes'
  const description = getEditableExcerpt(post, 120) || 'Browse listings, promotions, and verified updates from the community.'
  const image = getEditablePostImage(post)
  return (
    <section className="rounded-3xl bg-[#e8e8e8] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <h1 className={dc.type.heroTitle}>{title}</h1>
          <p className="mt-4 max-w-xl text-lg text-[#374151]">{description}</p>
          <Link href={href} className="mt-6 inline-flex rounded-full bg-[#111820] px-6 py-3 text-sm font-bold text-white">
            Explore now
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`overflow-hidden rounded-2xl bg-[#d4d4d4] ${i % 3 === 1 ? 'row-span-2 min-h-[190px]' : 'min-h-[90px]'}`}>
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompactCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group w-[260px] shrink-0 snap-start">
      <article className="overflow-hidden rounded-3xl bg-white p-3 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#ececec]">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-tight">{post.title}</h3>
      </article>
    </Link>
  )
}

function HorizontalCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
        <div className="aspect-[4/3] bg-[#ececec] sm:aspect-auto sm:min-h-[180px]">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3665f3]">{getEditableCategory(post)}</p>
          <h3 className="mt-2 line-clamp-2 text-2xl font-bold tracking-tight">{post.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm text-[#4b5563]">{getEditableExcerpt(post, 120)}</p>
        </div>
      </div>
    </Link>
  )
}

function EditorialCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6b7280]">Pick {String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-2 line-clamp-3 text-xl font-bold leading-tight">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm text-[#4b5563]">{getEditableExcerpt(post, 95)}</p>
    </Link>
  )
}

function ImageFirstDealCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group w-[290px] shrink-0 snap-start">
      <article className="overflow-hidden rounded-3xl bg-[#ececec]">
        <div className="relative aspect-square overflow-hidden">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="bg-white p-4">
          <h3 className="line-clamp-2 text-[29px] font-bold tracking-tight leading-[1.05]">{post.title}</h3>
          <p className="mt-2 text-sm font-bold text-[#111820]">{getEditableCategory(post)}</p>
        </div>
      </article>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const href = lead ? postHref(primaryTask, lead, primaryRoute) : primaryRoute
  return (
    <section className="mx-auto max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8">
      <FeaturedHeroCard post={lead} href={href} />
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const pool = posts.slice(1, 10)
  if (!pool.length) return null
  return (
    <section className="mx-auto max-w-[1480px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#e8e8e8] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight">Shopping made easy</h2>
            <p className="mt-2 text-[#4b5563]">Enjoy reliability, secure delivery and hassle-free browsing.</p>
          </div>
          <Link href={primaryRoute} className="hidden rounded-full bg-[#111820] px-6 py-3 text-sm font-bold text-white md:inline-flex">Start now</Link>
        </div>
      </div>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2">
        {pool.map((post) => (
          <CompactCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />
        ))}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((s) => s.posts).slice(0, 4)
  const lead = sectionPosts[0] || posts[10]
  const rows = sectionPosts.slice(1).length ? sectionPosts.slice(1) : posts.slice(11, 14)
  if (!lead) return null
  return (
    <section className="mx-auto max-w-[1480px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <HorizontalCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} />
        <div className="grid gap-4">
          {rows.map((post, index) => (
            <EditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const deals = posts.slice(14, 26)
  if (!deals.length) return null
  return (
    <section className="mx-auto max-w-[1480px] px-4 py-5 pb-14 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold tracking-tight">Today&apos;s Deals</h2>
      <p className="mt-1 text-lg text-[#4b5563]">All with free shipping</p>
      <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-2">
        {deals.map((post) => (
          <ImageFirstDealCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />
        ))}
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="mx-auto max-w-[1480px] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#e8e8e8] p-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Ready to buy, sell, or promote?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#4b5563]">Create your listing, share your offer, and connect with the right audience fast.</p>
        <div className="mt-6 flex justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#3665f3] px-7 py-3 text-sm font-bold text-white">
            Contact support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
