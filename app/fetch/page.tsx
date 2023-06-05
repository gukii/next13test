async function getData( pageNr: Number ) {
    //const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${pageNr}`
    
    const url = `http://localhost:3000/myapi/`+pageNr
  
    console.log('fetch url:', url, { next: { revalidate: 3 } } )
    const res = await fetch(url)
    console.log('got data res:', res)

    const data = res.json()  
    console.log('fetched data:', JSON.stringify(data))
    
    return data
}
  
  
export default async function Page() {
    const pageNr = Math.floor(Math.random()*10)
    const data = await getData( pageNr );
    console.log(`pageNr:${pageNr} data:${JSON.stringify(data)}`)
    return (
      <>
        <p>
          { `pageNr:${pageNr} data:${JSON.stringify(data)}` }
        </p>
      </>
    );
}

//         <ClientPieceRandom /> 
