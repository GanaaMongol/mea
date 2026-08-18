import type { SectionTabsBlock as SectionTabsProps } from '@/payload-types'

import { SiteLink } from '@/components/ui/SiteLink'
import { isActivePath, resolveHref } from '@/lib/links'

/** `dept-tabs` (about/departments/hubs), `tab-bar` (membership), `cap-tabs` (news). */
const VARIANT = {
  dept: { wrapper: 'dept-tabs', inner: 'container', item: 'dept-tab', active: 'dept-tab--active' },
  bar: { wrapper: 'tab-bar', inner: 'tab-bar__inner', item: 'tab-bar__item', active: 'tab-bar__item--active' },
  cap: { wrapper: 'cap-tabs', inner: 'container', item: 'cap-tab', active: 'cap-tab--active' },
} as const

export function SectionTabs({
  variant,
  items,
  align,
  plain,
  pathname,
}: SectionTabsProps & { pathname?: string }) {
  const style = VARIANT[variant] ?? VARIANT.dept

  // The modifiers live in the ported CSS (`dept-tabs--center`, `dept-tabs--plain`,
  // `cap-tabs--left`), so alignment is a class rather than an inline style.
  const wrapper = [
    style.wrapper,
    align === 'center' ? `${style.wrapper}--center` : null,
    align !== 'center' && variant === 'cap' ? 'cap-tabs--left' : null,
    plain ? `${style.wrapper}--plain` : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapper}>
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
