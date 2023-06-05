// new guidelines on how to do things


# producing a Response

https://nextjs.org/docs/pages/building-your-application/routing/middleware#producing-a-response

(set caching header?)




## auth / redirect

in edge function or middleware:


// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthValid } from './lib/auth'

export function middleware(request: NextRequest) {
  // Example function to validate auth
  if (isAuthValid(request)) {
    return NextResponse.next()
  }

  request.nextUrl.searchParams.set('from', request.nextUrl.pathname)
  request.nextUrl.pathname = '/login'

  return NextResponse.redirect(request.nextUrl)
}


>> THIS IS NO LONGER SUPPORTED (producing a response body)

// pages/_middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthValid } from './lib/auth'

export function middleware(request: NextRequest) {
  // Example function to validate auth
  if (isAuthValid(request)) {
    return NextResponse.next()
  }

  return NextResponse.json({ message: 'Auth required' }, { status: 401 })
}

--

The following patterns will no longer work:

new Response('a text value')
new Response(streamOrBuffer)
new Response(JSON.stringify(obj), { headers: 'application/json' })
NextResponse.json()