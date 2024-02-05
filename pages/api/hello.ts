import type { HandlerContext } from "zuby";

export default function handler(_context: HandlerContext) {
    return new Response('Hello from ZUby.js!', {
        status: 200,
        statusText: 'OK',
        headers: {
            'content-type': 'application/json',
        },
    })
}