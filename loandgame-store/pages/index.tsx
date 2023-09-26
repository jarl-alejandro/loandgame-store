import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type ConnectionStatus = {
  isConnected: boolean,
  movies: Movie[]
}

interface Movie {
  _id: string,
  name: string,
  description: string
}

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
  try {
    const client = await clientPromise
    const db = client.db("stores")

    /*
    await db
        .collection("movies")
        .insertMany([
          {
            name: "Pulp Fiction (1994)",
            description:  "Dirigida por Quentin Tarantino, esta película es un viaje no lineal a través de historias interconectadas de gángsters, violencia y humor negro en Los Ángeles.",
          },
          {
            name: "El Padrino (1972)",
            description:  "Dirigida por Francis Ford Coppola, es un épico drama criminal que sigue la vida de la familia Corleone mientras luchan por el poder en el mundo del crimen organizado.",
          },
          {
            name: "Titanic (1997)",
            description:  "Una emotiva historia de amor dirigida por James Cameron, ambientada en el trágico hundimiento del famoso barco Titanic.",
          },
          {
            name: "Forrest Gump (1994)",
            description:  "Dirigida por Robert Zemeckis, esta película cuenta la vida de Forrest Gump, un hombre con discapacidad intelectual que vive una vida extraordinaria y se convierte en testigo de momentos históricos clave.",
          },
          {
            name: "Matrix (1999)",
            description:  "Dirigida por los hermanos Wachowski, esta película de ciencia ficción sigue a Neo, un hacker que descubre que el mundo en el que vive es una simulación controlada por máquinas, lo que lo lleva a una búsqueda de la verdad y la libertad.",
          },
        ]);
        */

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();


    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: {
        isConnected: true,
        movies: JSON.parse(JSON.stringify(movies))
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false, movies: [] },
    }
  }
}

export default function Home({ isConnected, movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(movies)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected ? (
          <>
          <h2 className="subtitle">You are connected to MongoDB</h2>
          <section className='grid'>
            { movies.map((movie: Movie) => {
              return (
                <div key={movie._id} className='card'>
                  <h4>{ movie.name }</h4>
                  <p>{ movie.description }</p>
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

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

    
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .card {
          
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
