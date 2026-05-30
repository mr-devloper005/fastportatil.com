import faviconImage from '@/editable/assets/favicon.png'
import logoImage from '@/editable/assets/fastportatil-logo.png'

const imageSrc = (image: string | { src: string }) => (typeof image === 'string' ? image : image.src)

export const editableBrandAssets = {
  logo: imageSrc(logoImage),
  favicon: imageSrc(faviconImage),
} as const
