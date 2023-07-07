import React from 'react';
import './ProjectItem.scss';
import IntroProjectBackground from '../../assets/staticImages/imageEight.png';
import { client } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type ImageObj = {
  asset: {
    url: string
  }
}

interface ProjectProps {
  name: string,
  images: Array<ImageObj>
}

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

function ProjectItem({ name, images }: ProjectProps) {
  console.log("images", images)
  const image = images !== null ? urlFor(images[0].asset.url).url() : IntroProjectBackground
  return (
    <div className='project-item-wrapper '>
        <img alt='projectImage' src={image} className='project-item-image' />
        <h3 className='project-name'>{name}</h3>
        {/* <h3>Description</h3> */}
    </div>
  )
}

export default ProjectItem