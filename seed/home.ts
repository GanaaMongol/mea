import type { Payload } from 'payload'

import { customLink, paragraphs, upsertBySlug, upsertMedia } from './helpers'

/**
 * A first pass at index.html: the hero plus one prose section. The remaining
 * sections arrive as their blocks are built (plan.md §8 Алхам 4).
 */
export const seedHome = async (payload: Payload) => {
  const banner = await upsertMedia(payload, 'banner.png', 'MEA нүүр хуудасны баннер')

  await upsertBySlug(payload, 'pages', 'home', {
    title: 'Нүүр хуудас',
    _status: 'published',
    layout: [
      {
        blockType: 'pageBanner',
        variant: 'hub',
        title: "Together we're making Jesus known.",
        subtitle:
          'Монголын Эвангелийн Эвсэл нь чуулган, үйлчлэл, байгууллагуудыг нэгтгэн, эв нэгдэлтэйгээр сайн мэдээг түгээхийн төлөө оршдог. Бид ганцаараа биш, хамтдаа илүү ихийг бүтээнэ.',
        ...(banner ? { background: banner } : {}),
        height: 540,
        align: 'center',
        overlay: true,
        links: [
          customLink('Гишүүн Болох', '/membership', 'primary'),
          customLink('Бидний Тухай', '/about/vision', 'outline'),
        ],
      },
      {
        blockType: 'richText',
        header: {
          label: 'БИДНИЙ ТУХАЙ',
          title: 'Монголын Эвангелийн Эвсэл',
          align: 'center',
        },
        content: paragraphs(
          'Монголын Эвангелийн Эвсэл нь чуулган, үйлчлэл, байгууллагуудыг нэгтгэн, эв нэгдэлтэйгээр сайн мэдээг түгээхийн төлөө оршдог.',
        ),
        width: 'narrow',
        background: 'warm',
      },
    ],
  })

  payload.logger.info('seed: home page')
}
