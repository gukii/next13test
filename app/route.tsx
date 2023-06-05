import { NextResponse } from 'next/server';

/*
async function getData() {
    const index = Math.floor(Math.random()*10)
    const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${index}`
    console.log('fetch url:', url, { next: { revalidate: 3 } } )
    const res = await fetch(url)
    //console.log('got data res:', res)
    const data = res.json()  
    //console.log('fetched data:', JSON.stringify(data))
    return data
}
*/
 

// could try to change request or response header:
// https://stackoverflow.com/questions/71036865/how-to-modify-request-headers-in-next-js


// good info and example to use with edge functions for cache control:
// https://vercel.com/guides/how-to-configure-the-cache-control-response-header-in-vercel-projects

export async function GET() {

    const ms = Date.now()
    const hello = { hello: 'world, ms:'+ ms }

    return NextResponse.json(
        hello,    // { name: 'Mary Lamb' }
        {
          status: 200,
          headers: {
            'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
          },
        },
    );

    //return NextResponse.json({ hello: 'world' });
}


 

function getData( body:any ) : any {
    return { somedata: 'dummy' }
}


export async function POST(
    request: Request
) {
    const body = await request.json();
    const data = await getData(body);

    return NextResponse.json(data);
}

/*
// https://makerkit.dev/blog/tutorials/nextjs13


export async function POST(
  request: Request
) {
  const organizationId = getOrganizationId();
  const response = NextResponse.json({ organizationId });
 
  response.cookies.set('organizationId', organizationId, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  });
 
  return response;
}
*/

/*
export async function POST(
  request: Request
) {
  const rawBody = await request.text();
 
  // handle webhook here
}
*/


/*
// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}
*/