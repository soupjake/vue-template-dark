import { CalendarItem } from './calendar_item';

export interface CalendarResponse {
    kind: string,
    etag: string,
    summary: string,
    updated: string,
    timeZone: string,
    accessRole: string,
    defaultReminders: object[],
    nextSyncToken: string,
    items: CalendarItem[]
}