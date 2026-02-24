import type { TimeEvent } from "../Event";


export async function getData() {
    const response = await fetch('/data.json');
    const data: TimeEvent[] = await response.json();
    return data;
}