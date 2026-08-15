import type { SectionTabsBlock as SectionTabsProps } from '@/payload-types'

import { SiteLink } from '@/components/ui/SiteLink'
import { isActivePath, resolveHref } from '@/lib/links'

/** `dept-tabs` (about/departments/hubs), `tab-bar` (membership), `cap-tabs` (news). */
const VARIANT = {
  dept: { wrapper: 'dept-tabs', inner: 'container', item: 'dept-tabs__tab', active: 'dept-tabs__tab--active' },
  bar: { wrapper: 'tab-bar', inner: 'tab-bar__inner', item: 'tab-bar__item', active: 'tab-bar__item--active' },
  cap: { wrapper: 'cap-tabs', inner: 'container', item: 'cap-tabs__tab', active: 'cap-tabs__tab--active' },
} as const

export function SectionTabs({
  variant,
  items,
  align,
  pathname,
}: SectionTabsProps & { pathname?: string }) {
  const style = VARIANT[variant] ?? VARIANT.dept

  return (
    <div className={style.wrapper} style={align === 'center' ? { justifyContent: 'center' } : undefined}>
      <div className={style.inner}>
        {items?.map((item, index) => {
          const href = resolveHref(item)
          const active = pathname ? isActivePath(href, pathname) : false
          return (
            <SiteLink
              key={item.id ?? index}
              link={item}
              className={[style.item, active ? style.active : null].filter(Boolean).join(' ')}
            />
          )
        })}
      </div>
    </div>
  )
}
