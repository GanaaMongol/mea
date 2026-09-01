import fs from 'fs/promises'
import path from 'path'

import type { RegionMapBlock as RegionMapProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'
import { MapView } from './MapView'

/** Tags every aimag path with its name so the client can read it off the DOM. */
const tagRegions = (svg: string, regions: { pathId: string; name: string }[]) =>
  regions.reduce(
    (markup, region) =>
      markup.replace(
        new RegExp(`<path id="${region.pathId}"`, 'g'),
        `<path id="${region.pathId}" data-region="${region.name}" tabindex="0"`,
      ),
    svg,
  )

export async function RegionMap({ header, regions, linkToTable }: RegionMapProps) {
  const file = path.join(process.cwd(), 'public/images/mongolia.svg')
  const svg = await fs.readFile(file, 'utf8').catch(() => null)

  if (!svg) return null

  const list = (regions ?? []).filter(
    (region): region is { pathId: string; name: string; id?: string | null } =>
      Boolean(region.pathId && region.name),
  )

  return (
    <section className="section section--warm">
      <div className="container">
        <SectionHeader header={header} />
        <MapView svg={tagRegions(svg, list)} regions={list} linkToTable={linkToTable ?? true} />
      </div>
    </section>
  )
}
