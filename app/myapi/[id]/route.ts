import { NextResponse } from "next/server";

interface IParams {
    id?: string;
}

export default async function handler(
    request: Request,
    { params }: { params: IParams }
  ) {

    const { id } = params;

    const ms = Date.now()
    const hello = { hello: `world with id:${id} ms:${ms}` }

    return NextResponse.json(
        hello,    // { name: 'Mary Lamb' }
        {
          status: 200,
          headers: {
            'Cache-Control': 's-maxage=3, stale-while-revalidate=20',
          },
        },
    );
}

//export default function handler(request, response) {


// response.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate=30');
// response.status(200).json({ name: 'John Doe' });