import { CalendarDate } from './calendar_date';

export interface CalendarItem {
    kind: string,
    etag: string,
    id: string,
    status: string,
    htmlLink: string,
    created: string,
    updated: string,
    summary: string,
    creator: object,
    organizer: object,
    start: CalendarDate,
    end: CalendarDate,
    iCalUID: string,
    sequence: number,
    reminders: object
}