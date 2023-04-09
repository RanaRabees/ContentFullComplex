import Image from 'next/image'
import { Inter } from 'next/font/google'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=contentfullcomplex`, { cache: 'no-store' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      {
        blogs.items.map((item: any) => (
          <>
            <h1>This Is Content Model Title</h1>
            <br />
            <div>{item.fields.title}</div>
            <br />
            <h1>This Is Content Model Description</h1>
            <br />
            <div>{documentToReactComponents(item.fields.description)}</div>
            <br />
            <div>{blogs.includes.Asset.map((a: any) => (
              <>
                <h1>This Is Image</h1>
                <br />
                <div>
                  {item.fields.img.sys.id == a.sys.id ?
                    <Image src={"https:" + a.fields.file.url} alt="" width="500" height="500" /> : <div></div>}
                </div>
                <br />
                <h1>This Is Image Size</h1>
                <br />
                <div>
                  {a.fields.file.details.size}
                </div>
                <br />
                <h1>This Is Image Height</h1>
                <br />
                <h2>{a.fields.file.details.image.height}</h2>
                <br />
                <h1>This Is Image Width</h1>
                <br />
                <h2>{a.fields.file.details.image.width}</h2>
              </>
            ))}
            </div>
            <br />
            <br />
            <br />
          </>
        ))}
    </div>
  )
}