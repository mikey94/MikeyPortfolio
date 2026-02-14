import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectItem.scss';
import IntroProjectBackground from '../../assets/images/imageEight.png';
import { client } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';

type ImageObj = {
  asset: {
    url: string
  }
}

interface ProjectProps {
  id: number,
  name: string,
  images: Array<ImageObj>
}

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

function ProjectItem({ name, images, id }: ProjectProps) {
  const navigate = useNavigate();
  const navigateTo = (id: number) => {
    navigate(`project/${id}`)
  }
  const image = images !== null ? urlFor(images[0].asset.url).url() : IntroProjectBackground
  return (
    <div className='project-item-wrapper ' onClick={()=> navigateTo(id)}>
        <img alt='projectImage' src={image} className='project-item-image' />
        <h3 className='project-name'>{name}</h3>
    </div>
  )
}

export default ProjectItem