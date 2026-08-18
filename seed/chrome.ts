import type { Payload } from 'payload'

import { customLink, seedGlobal, upsertMedia } from './helpers'

/** Announcement bar, header, newsletter and footer, transcribed from index.html. */
export const seedChrome = async (payload: Payload) => {
  const logo = await upsertMedia(payload, 'main-logo.jpeg', 'MEA лого')

  await seedGlobal(
    payload,
    'siteSettings',
    {
      announcement: {
        enabled: true,
        text: 'ЗАРЛАЛ: "Ээлжит бага хурал 2025.10.09-10нд УБ-д',
        cta: customLink('Бүртгүүлэх', '#'),
        links: [customLink('Үйл явдал', '#'), customLink('Залбирал', '#')],
        showLanguageSwitcher: true,
      },
      header: {
        ...(logo ? { logo } : {}),
        nav: [
          customLink('Бидний Тухай', '/about/vision'),
          customLink('Мэдээ & Нийтлэл', '/news'),
          customLink('Гишүүнчлэл', '/membership'),
          customLink('Үйлчлэлийн Албад', '/departments'),
          customLink('Donation', '#'),
          customLink('Холбоо Барих', '#'),
        ],
        showSearch: true,
        loginLink: customLink('Нэвтрэх', '/login', 'primary'),
      },
      newsletter: {
        enabled: true,
        title: 'Join Our Newsletter',
        description:
          'Receive fresh articles straight in your inbox, every Friday morning. I also share interesting finds from the internet!',
        placeholder: 'Enter your email',
        buttonLabel: 'Subscribe',
      },
      footer: {
        ...(logo ? { logo } : {}),
        topLinks: [
          customLink('Яв Дагалдуул', '#'),
          customLink('Donation & Fee', '#'),
          customLink('Нэвтрэх', '/login'),
        ],
        contact: {
          title: 'Холбоо барих',
          items: [
            { value: '(+976) 9903-2010, 9015-2040' },
            { value: 'info@mea.mn', href: 'mailto:info@mea.mn' },
            {
              value:
                '3345 Улаанбаатар хот, Баянзүрх дүүрэг, 4-хороо, 15-р хороолол, Энхтайвны тайвны өргөн чөлөө гудамж 4-р байр, 130 тоот',
            },
          ],
        },
        navGroups: [
          {
            title: 'Бидний Тухай',
            links: [
              customLink('Алсын хараа', '/about/vision'),
              customLink('Түүх', '/about/history'),
              customLink('Бүтэц', '/organization'),
              customLink('Их Хурал', '/about/congress'),
              customLink('Бага Хурал', '#'),
              customLink('Удирдах Зөвлөл', '/about/board'),
              customLink('Гүйцэтгэх Алба', '#'),
              customLink('Итгэлийн Тунхаг', '/about/creed'),
            ],
          },
          {
            title: 'Гишүүнчлэл',
            links: [
              customLink('Гишүүнээр элсэх', '/membership/join'),
              customLink('Мэдээлэл Шинэчлэх', '/profile'),
            ],
          },
          {
            title: 'Үйлчилгээ',
            links: [
              customLink('Тодорхойлолт Авах', '#'),
              customLink('Хуулийн Зөвлөгөө', '#'),
              customLink('Чуулган Байгуулах', '#'),
              customLink('Гишүүдийг Сэрэмжлүүлэх', '#'),
              customLink('Хамтын Ажиллагаа', '#'),
            ],
          },
          {
            title: 'ХАБ',
            links: [
              customLink('Улаанбаатар хот', '/hubs/ulaanbaatar'),
              customLink('21 Аймаг', '/hubs/aimag'),
              customLink('Итгэл Суурьт Байгууллага', '/hubs/faith-orgs'),
            ],
          },
          {
            title: 'Албад',
            links: [customLink('Бүх албад', '/departments')],
          },
        ],
        copyright: '© 2026 Монголын Эвангелийн Эвсэл',
        legalLinks: [customLink('Нууцлалын бодлого', '#'), customLink('Үйлчилгээний нөхцөл', '#')],
      },
    },
    (doc) => Boolean(doc?.header),
  )

  payload.logger.info('seed: site settings')
}
