import { redirect } from 'next/navigation'

/**
 * The `prayers` collection exists only to put a "Залбирал" entry in the admin
 * nav directly under "Мэдээ & Нийтлэл" — Payload builds nav groups from
 * collections, so a nav item has to be one. It stores nothing; opening it hands
 * the editor the real `posts` list, filtered to prayers and newest first.
 */
export function PrayerListRedirect() {
  redirect('/admin/collections/posts?where[kind][equals]=prayer&sort=-publishedAt')
}
