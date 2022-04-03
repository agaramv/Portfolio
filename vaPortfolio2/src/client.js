import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'hgf6d30z',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk3Ce0WwyQkUKSwIp02rFzDMuMXKjD00EEJk3Vi2LW3VNd47Jun6ARYPCAOFPpBA5OkRdj7xGrweg18zZGMTUltFyYnAPMJSw8Eo2uRLo9poAlNZjZpdVHae3BFKOLvU3Yt3VmR3d0UGCS8Vjo4hvYqiKGML8bVfk3PfCc0kSvRltaYP31PZ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
