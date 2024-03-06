/*dynamic segment can be created square breackets[foldername]*/
export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

// app / blog / [slug] / page.js         Route
    // / blog / a                     example url
// { slug: 'a' }                         params