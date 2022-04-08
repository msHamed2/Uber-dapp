import sanityClient from '@sanity/client'
export const client= sanityClient({
  projectId: '5ybfq3ws',
dataset:'uber',
  apiVersion:'v1',

  token: "skRewRNrZRqVY47VpQfIKIYQcaMIFzzHrZAJNsMBc5nxA01uOoZjk9LFvZG1YjSxZOHK6AHbHlAaCcJELWP0g4e8Rbk7H5o3dupMIrs6aN7hfCCQtjLtksgWyzG3BwsPghHAORaiN4V948yPps60J3CLSy4wldiec4c97NjYoIlefRVuylYN",
  useCdn:false,
})

export const clissent = sanityClient({
  projectId: '5ybfq3ws',
  dataset:'uber',
  apiVersion: "v1",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
