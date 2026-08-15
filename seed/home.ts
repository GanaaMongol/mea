import type { Payload } from 'payload'

import { customLink, upsertBySlug, upsertMedia } from './helpers'

/** index.html, section by section. */
export const seedHome = async (payload: Payload) => {
  const [banner, quoteBg, ctaBg] = await Promise.all([
    upsertMedia(payload, 'banner.png', 'MEA нүүр хуудасны баннер'),
    upsertMedia(payload, 'section1.png', ''),
    upsertMedia(payload, 'section2.png', ''),
  ])

  const [pray, harvest, bird] = await Promise.all([
    upsertMedia(payload, 'pray.svg', ''),
    upsertMedia(payload, 'harvest.svg', ''),
    upsertMedia(payload, 'bird.svg', ''),
  ])

  const accelImages = await Promise.all([
    upsertMedia(payload, 'card-1.png', 'Хүүхэд / Гэр бүл'),
    upsertMedia(payload, 'card-2.png', 'Залуус'),
    upsertMedia(payload, 'card-3.png', 'Илгээлт'),
    upsertMedia(payload, 'card-4.png', 'Дижитал / AI'),
  ])

  const ACCEL_TEXT = '"Дараа үеийнхээ итгэлийн суурийг тавьж, гэр бүлийг бэхжүүлэх үйлчлэл."'

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
        blockType: 'cardGrid',
        variant: 'info',
        background: 'warm',
        header: {
          title: 'МОНГОЛЫН ЭВАНГЕЛИЙН ЭВСЭЛД ТАВТАЙ МОРИЛ',
          description:
            'Гурван төрлийн гишүүнчлэл: хувь хүн, сүм чуулган, байгууллага. Танд аль нь тохирохыг сонгоно уу.',
          align: 'center',
        },
        items: [
          {
            ...(pray ? { icon: pray } : {}),
            title: 'ТОВЧ ТҮҮХ',
            text: 'Монголын Эвангелийн Эвслийн (МЭЭ) анхны суурь 1992-1993 оны үеэс эхлэлтэй билээ. Тухайн үед байсан илгээлтийн байгууллагууд болон...',
            link: customLink('Дэлгэрэнгүй', '/about/history'),
          },
          {
            ...(harvest ? { icon: harvest } : {}),
            title: 'МЭЭ-ийн ЗОРИЛГО',
            text: 'Монгол чуулганы эв нэгдэл, хамтын ажиллагааг хангах Монгол чуулганыг гаж буруу урсгалаас хамгаалах',
            link: customLink('Дэлгэрэнгүй', '/about/vision'),
          },
          {
            ...(bird ? { icon: bird } : {}),
            title: 'ГИШҮҮНЧЛЭЛ',
            text: 'Бурхан ертөнцийг үнэхээр хайрласан тул цорын ганц Хүүгээ өгсөн. Ингэснээр Хүүд итгэгч хэн ч мөхөхгүй, харин мөнх амьтай болох юм.',
            link: customLink('Дэлгэрэнгүй', '/membership/join'),
          },
        ],
      },
      {
        blockType: 'quoteBanner',
        variant: 'quote',
        title: 'Бид нэг ЭЗЭН, нэг ИТГЭЛ, нэг СҮНСНИЙ эв нэгдлийг эрхэмлэнэ.',
        ...(quoteBg ? { background: quoteBg } : {}),
      },
      {
        blockType: 'accelerators',
        numbered: true,
        header: {
          label: 'ДИЖИТАЛ СТРАТЕГИ',
          title: '4 Хурдасгуур',
          description:
            'Эвслийн зорилгыг урагшлуулах дөрвөн стратегийн чиглэл. Тус бүр дээр дарж дэлгэрэнгүй үзнэ үү.',
        },
        items: [
          { ...(accelImages[0] ? { image: accelImages[0] } : {}), title: 'Хүүхэд / Гэр бүл', text: ACCEL_TEXT },
          { ...(accelImages[1] ? { image: accelImages[1] } : {}), title: 'Залуус', text: ACCEL_TEXT },
          { ...(accelImages[2] ? { image: accelImages[2] } : {}), title: 'Илгээлт', text: ACCEL_TEXT },
          { ...(accelImages[3] ? { image: accelImages[3] } : {}), title: 'Дижитал / AI', text: ACCEL_TEXT },
        ],
      },
      {
        blockType: 'postsFeed',
        variant: 'plain',
        header: {
          label: 'МЭДЭЭ & НИЙТЛЭЛ',
          title: 'Сүүлийн үеийн мэдээ ба нийтлэлүүд',
          align: 'left',
        },
        source: 'auto',
        kind: 'all',
        limit: 4,
        filter: {
          enabled: true,
          style: 'buttons',
          items: [
            { label: 'Бүгд', kind: 'all' },
            { label: 'Мэдээ', kind: 'news' },
            { label: 'Нийтлэл', kind: 'article' },
          ],
        },
        moreLink: customLink('Дэлгэрэнгүй', '/news'),
        readLabel: 'Унших',
      },
      {
        blockType: 'quoteBanner',
        variant: 'cta',
        overline: 'Бидэнтэй Нэгдэх үү?',
        title: 'Христийн бие дотор сайн дурын үйлчлэгчдыг хайж байна',
        ...(ctaBg ? { background: ctaBg } : {}),
        cta: customLink('Гишүүн Болох', '/membership', 'primary'),
      },
    ],
  })

  payload.logger.info('seed: home page')
}
