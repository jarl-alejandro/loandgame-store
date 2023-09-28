
import clientPromise from '../lib/mongodb'
import storeStyle from '../styles/stores.module.css';

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
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i>
            <a href="store">
              Mi tienda
            </a>
          </button>
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




