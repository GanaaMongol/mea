/**
 * A phone number doubles as a login identifier, so it is stored and compared
 * digits-only — "9410-9967", "+976 94109967" and "94109967" are one account.
 */
export const normalizePhone = (value: string): string => value.replace(/\D/g, '')
