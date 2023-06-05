import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'r3joe2vm',
  dataset: 'production',
  useCdn: true,
  token: 'skTzWWLs1vSpcavmatVKQv03eRJqiGQoZlPuAbTYs6vdNFFcD1WptCnsCj8uHDjEpVmQkIpTEOeGuunjxPZvI5YYKSew9RQ3F1p8Y8Z6qsHCZJqlLkq0N5NnU2ijFFa5nHYc2YjpPLtfAZm4eJCjpcIk3P5vCTpncBX9dzSwcE9ejCmAgNHX',
});

export async function getAllPosts() {
  return await client.fetch(`*[_type == "post"]{title, slug,coverImage, body, publishedAt, tag->{name} }`);
}

export async function getPostBySlug(slug: string) {
  try {
    const result = await client.fetch(`*[_type == "post" && slug.current == $slug]`, { slug });
    return result[0];
  } catch (error) {
    console.error(error);
  }
}
export async function getAllProducts() {
  return await client.fetch(`*[_type == "product"]{name, slug,image, description, price, category->{name} }`);
}

export async function getProductBySlug(slug: string) {
  try {
    const result = await client.fetch(`*[_type == "product" && slug.current == $slug]`, { slug });
    return result[0];
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCategories() {
  return await client.fetch(`*[_type == "category"]`);
}

export async function getAboutContent() {
  const result = await client.fetch(`*[_type == "about"]{
    title,
    slug,
    publishedAt,
    body[]{
      ..., 
      children[]{
        ...,
        _type == "authorReference" => {
          "name": @.author->name,
          "slug": @.author->slug
        }
      }
    }
  }`);

  return result[0];
}

const query = `*[_type == "mediaGallery"]{
  title,
  "images": images[].asset->url
}`;

export async function getImages() {
  return await client.fetch(query);
}

export async function getGallery() {
  const query = `*[_type == "mediaGallery"]{
    title,
    "images": images[].asset->url
  }`;

  const galleries = await client.fetch(query);

  product
  return galleries[0];
}






