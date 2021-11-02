import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-900 text-white">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Blue Tech Stack!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Anda sedang mencari Partner? kami solusinya.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://www.canva.com/design/DAEs20jAGrM/Y0oGevc5HLOHdlCyjQ9ADw/view?utm_content=DAEs20jAGrM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Proposal Aplikasi &rarr;</h3>
            <p className="mt-4 text-xl">
              Download Proposal.
            </p>
          </a>

          <a
            href="https://wa.me/6281288253426"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Kontak &rarr;</h3>
            <p className="mt-4 text-xl">
              Tertarik? Hubungi Kami.
            </p>
          </a>

          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 text-white bg-gray-900">
        <a
          className="flex items-center justify-center font-medium	"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
