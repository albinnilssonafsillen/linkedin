import Head from 'next/head'
import MailList from '../components/content/MailList/MailList'
import Post from '../components/content/linkedInPost/Post'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>LinkedIn4ever</title>
      </Head>
      <MailList />
      <Post />
    </div>
  )
}
