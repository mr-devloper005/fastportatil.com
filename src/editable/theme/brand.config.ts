import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#3665f3', surface: '#111820' }
      : productKind === 'editorial'
        ? { primary: '#111820', surface: '#f5f5f5' }
        : productKind === 'directory'
          ? { primary: '#111820', surface: '#f5f5f5' }
          : { primary: '#111820', surface: '#f5f5f5' },
} as const
