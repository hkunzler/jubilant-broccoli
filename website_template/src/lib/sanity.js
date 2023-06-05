// lib/sanity.js

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'r3joe2vm',
    dataset: 'production',
    useCdn: true
})
