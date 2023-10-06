
import clientPromise from '../lib/mongodb'
import storeStyle from '../styles/stores.module.css';
import Link from 'next/link';

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
            { stores.map((store: Store) => {
              return (
                <div key={store._id} className={storeStyle.card}>
                  <h3>{ store.name }</h3>
                  <p>{ store.description }</p>
                </div>
              )
            }) }

          <header>
            <nav
              className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 md:flex-wrap md:justify-start"
              data-te-navbar-ref>
              <div className="px-6">
               
                <button
                  className="border-0 bg-transparent px-2 py-3 text-xl leading-none md:hidden"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#navbarSupportedContentO"
                  aria-controls="navbarSupportedContentO"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                 
                  <span className="[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
                  id="navbarSupportedContentO"
                  data-te-collapse-item>
                  <ul
                    className="mr-auto flex flex-col md:flex-row"
                    data-te-navbar-nav-ref>

                    <li data-te-nav-item-ref>
                      <a
                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
                        href="/"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Register</a
                      >
                    </li>

                  </ul>
                </div>
              </div>
            </nav>

            <div
              className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
              style={{
                backgroundImage: `url('https://wallpapers.com/images/hd/xbox-series-x-halo-infinite-controller-wruor6ew6wy3w084.jpg')`
              }}>
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{
                  background: `rgba(17, 24, 39, 0.8)`
                  }}>
                <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h1 className="mb-4 text-4xl font-semibold">
                      LOAND GAME STORE
                    </h1>
                    <p className="mb-6 text-xl font-semibold"><br />
                    We share our games with the users of our website. With us you can:<br />
                      - Play games for less money<br />
                      - Play with full anti-blocking guarantee<br />
                    </p>
                    <button
                      type="button"
                      className="rounded border-2 border-neutral-50 px-10 pb-[20px] pt-[25px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                        <a href="/store">GET STARTED</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
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




