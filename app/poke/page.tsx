import '../../styles/globals.css'
//import Link from 'next/link'

import ClientPieceRandom from '../random/page'


/*
// Generates statically like getStaticProps.
fetch(URL, { cache: 'force-cache' });

// Generates server-side upon every request like getServerSideProps.
fetch(URL, { cache: 'no-store' });

// Generates statically but revalidates every 20 seconds
fetch(URL, { next: { revalidate: 20 } });
*/

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


export default async function Page() {
  const data = await getData();
  console.log(data.results[0].name)
  return (
    <>
      <ClientPieceRandom /> 
      <p>
        { data?.results[0].name }
      </p>
    </>
  );
}

*/


async function getData( pageNr: Number ) {
  //const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${pageNr}`
  const url = `http://localhost:3000/myapi/other`

  console.log('fetch url:', url )
  const res = await fetch(url, { next: { revalidate: 3 } } )
  //console.log('got data res:', res)
  const data = res.json()  
  console.log('fetched data:', JSON.stringify(data))
  return data
}


export default async function Page() {
  const pageNr = Math.floor(Math.random()*10)
  const data = await getData( pageNr );
  console.log('data returned:', JSON.stringify(data))

  const dataOne = data?.results?.length ? data.results[0].name : 'nodata'
  console.log(`pageNr:${pageNr} first poke:${dataOne}`)
  return (
    <>
      <ClientPieceRandom /> 
      <p>
        { `pageNr:${pageNr} first poke:${dataOne}` }
      </p>
    </>
  );
}







// export default function Page() : React.ReactElement {
//   return (<Link href="/breaking">2nd page, navigate to breaking</Link>);
// }