import type { Payload } from 'payload'

import postsData from './data/posts.json' with { type: 'json' }
import { paragraphs, upsertBySlug, upsertMedia } from './helpers'

type SeedPost = {
  slug: string
  title: string
  kind: 'news' | 'article'
  excerpt: string
  publishedAt: string
  image: string
  alt: string
}

/** The full article from news-detail.html, keyed by the post it belongs to. */
const NOMAD_SLUG = 'nuudelchdiin-dund-hiih-uilchlel'

const NOMAD_BODY_TOP = [
  'Монгол орны хүн амын нэлээд хэсэг нь өнөөдөр ч гэсэн отор нүүдлийн амьдралын хэв маягаа хадгалсаар байна. Хаваржаа, зуслан, өвөлжөө хооронд шилжин нүүдэллэдэг малчин өрхүүдэд байнгын чуулгантай холбогдох, эргэн тойрны итгэгчдийн нөхөрлөлд хамрагдах боломж ихэвчлэн хязгаарлагдмал байдаг. Үүнийг анхаарч МЭЭ-ийн зарим чуулган "нүүдэлчдийн дунд хийх үйлчлэл" хэмээх шинэ санаачилгыг эхлүүлээд байна.',
  'Энэ үйлчлэлийн цөм нь бэлтгэгдсэн жижиг багууд бэлчээр, хөдөө хээр рүү өөрсдөө зорин очиж, малчин өрхүүдтэй уулзаж, залбирч, сайн мэдээг хуваалцахад оршино. Баг бүр ердөө хоёроос гурван хүнээс бүрддэг бөгөөд морь, мотоцикл, зарим үед зөвхөн явганаар зам туулан хол зайд орших айлуудад хүрдэг.',
  'Санаачилга эхэлснээс хойш нэг жил гаруй хугацаанд арав гаруй бүсэд баг илгээж, зуу орчим өрхтэй уулзаж чадсан байна. Малчид ихэвчлэн зочломтгой байж, урт удаан ярилцах цаг зав гарган хүлээж авдаг нь багийнхныг урам зоригжуулж байгаа гол хүчин зүйлсийн нэг гэдгийг манлайлагчид онцолж байна.',
]

const NOMAD_BODY_BOTTOM = [
  'Гэвч зам зай, цаг агаарын эрс өөрчлөлт, холбооны сүлжээ дутмаг зэрэг сорилтууд ч цөөнгүй тулгардаг. Багийнхан өвлийн хүйтэнд гэр гэрээр очих, зунд бороо шороон шуурганд амьдралын аюулгүй байдлаа хайрлан замд гарах тохиолдол цөөнгүй. Ийм болзолгүй нөхцөлд ажилладаг тул шинэ гишүүд элсэхээс өмнө тусгай бэлтгэл сургалтад хамрагддаг.',
  '"Бид хотын чуулгандаа зуршсан итгэлийн загвараа биш, малчны амьдралын хэмнэлд тохирсон энгийн бөгөөд гүн ярианы хэлбэрийг эрэлхийлдэг" хэмээн санаачилгыг удирдаж буй нэгэн итгэгч тэмдэглэв. Малчид ихэвчлэн үнэн бодит, амьдралтай холбоотой түүхийг илүү дотно хүлээж авдаг гэдгийг тэрбээр нэмж хэлэв.',
  'Ирэх жилүүдэд илгээлтийн албанаас илүү олон бүс нутагт ижил төрлийн багуудыг байгуулж, орон нутгийн чуулгануудтай хамтран урт хугацааны дэмжлэг үзүүлэх төлөвлөгөөтэй байна. Энэ ажил нь алслагдсан бүс нутгуудад итгэлийн үйлчлэл хүрэлцдэггүй гэсэн урьдын шүүмжлэлд бодит хариу болно гэдэгт олон хүн итгэлтэй байна.',
]

export const seedPosts = async (payload: Payload) => {
  const posts = postsData as SeedPost[]

  // Gallery images for the one article that has a full body in the mockups.
  const [galleryMain, gallerySecond, galleryThird] = await Promise.all([
    upsertMedia(payload, 'pic1.png', 'Малчин өрхтэй уулзаж буй үйлчлэлийн баг'),
    upsertMedia(payload, 'pic2.png', 'Бэлчээрт зорьж яваа баг'),
    upsertMedia(payload, 'pic3.png', 'Хээрийн гэрт хийсэн уулзалт'),
  ])
  const nomadCover = await upsertMedia(payload, 'banner.png', 'Нүүдэлчдийн дунд хийх үйлчлэл')

  for (const post of posts) {
    const cover = await upsertMedia(payload, post.image, post.alt)
    const isNomad = post.slug === NOMAD_SLUG

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const layout: any[] = isNomad
      ? [
          { blockType: 'richText', content: paragraphs(...NOMAD_BODY_TOP), width: 'narrow' },
          {
            blockType: 'gallery',
            variant: 'mosaic',
            items: [galleryMain, gallerySecond, galleryThird]
              .filter((image): image is number => typeof image === 'number')
              .map((image) => ({ image })),
          },
          { blockType: 'richText', content: paragraphs(...NOMAD_BODY_BOTTOM), width: 'narrow' },
        ]
      : [{ blockType: 'richText', content: paragraphs(post.excerpt), width: 'narrow' }]

    await upsertBySlug(payload, 'posts', post.slug, {
      title: post.title,
      kind: post.kind,
      excerpt: post.excerpt,
      publishedAt: new Date(post.publishedAt).toISOString(),
      ...(isNomad && nomadCover ? { cover: nomadCover } : cover ? { cover } : {}),
      layout,
      _status: 'published',
    })
  }

  payload.logger.info(`seed: ${posts.length} posts`)
}
