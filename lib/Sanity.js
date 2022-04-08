import SanityClient  from "@sanity/client";

export const client= SanityClient({
    projectId:process.env.SANITY_PROJECT_ID,
    dataset:'uber',
    apiVersion:'v1',
    token:process.env.SANITY_TOKEN,
    useCdn:false,
})
