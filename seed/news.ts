import type { Payload } from 'payload'

import { customLink, upsertBySlug, upsertMedia } from './helpers'

/** news2.html — banner + the filterable, bordered news grid. */
export const seedNewsPage = async (payload: Payload) => {
  const banner = await upsertMedia(
    payload,
    'news2-banner.png',
    'Монголын Илгээлтийн Чуулга Уулзалт',
  )

  await upsertBySlug(payload, 'pages', 'news', {
    title: 'Мэдээ & Нийтлэл',
    _status: 'published',
    layout: [
      {
        blockType: 'pageBanner',
        variant: 'news',
        tag: 'Нийтлэл',
        title: 'Монголын Илгээлтийн Чуулга Уулзалт',
        ...(banner ? { background: banner } : {}),
        links: [customLink('Дэлгэрэнгүй', '#')],
      },
      {
        blockType: 'postsFeed',
        variant: 'bordered',
        header: {
          label: 'МЭДЭЭ & НИЙТЛЭЛ',
          title: 'Сүүлийн Үеийн Мэдээ Нийтлэлүүд',
          align: 'left',
        },
        source: 'auto',
        kind: 'all',
        limit: 12,
        filter: {
          enabled: true,
          style: 'tabs',
          items: [
            { label: 'Бүгд', kind: 'all' },
            { label: 'Мэдээ', kind: 'news' },
            { label: 'Нийтлэл', kind: 'article' },
          ],
        },
        readLabel: 'Унших',
      },
    ],
  })

  payload.logger.info('seed: news page')
}
