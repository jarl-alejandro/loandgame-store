import clientPromise from '../lib/mongodb'
import storeStyle from './stores.module.css';

interface Props {
  isConnected: boolean,
  stores: Store[]
}

interface Store {
  _id: string,
  name: string,
  description: string
}



async function getData() {
  const client = await clientPromise
  const db = client.db("stores")
  const stores = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

  return {
    isConnected: true,
    stores: JSON.parse(JSON.stringify(stores))
  }
}

export default async function Home() {
  const { isConnected, stores }: Props = await getData()
  

  return (
    <>
      {isConnected ? (
        <>
        <h2 className="subtitle">You are connected to MongoDB</h2>
        <section className={storeStyle.grid}>
          { stores.map((store: Store) => {
            return (
              <div key={store._id} className={storeStyle.card}>
                <h3>{ store.name }</h3>
                <p>{ store.description }</p>
              </div>
            )
          }) }
        </section>
        </>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
          for instructions.
        </h2>
      )}
    </>
  )
}
