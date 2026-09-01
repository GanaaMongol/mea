import type { Block } from 'payload'

/** Видео — rich text доторх "+" цэснээс нэмэгдэнэ. YouTube хаяг тавихад тоглуулагч болно. */
export const VideoBlock: Block = {
  slug: 'video',
  interfaceName: 'VideoBlock',
  labels: { singular: 'Видео', plural: 'Видео' },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Видеоны хаяг (URL)',
      admin: {
        description: 'YouTube-ийн хаягийг буулгана уу. Ж: https://www.youtube.com/watch?v=… эсвэл https://youtu.be/…',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return 'Хаяг оруулна уу.'
        const ok = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com)\//i.test(value)
        return ok || 'YouTube-ийн хаяг байх ёстой.'
      },
    },
    { name: 'caption', type: 'text', label: 'Тайлбар', localized: true },
  ],
}
