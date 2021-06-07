import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from '../../utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type Props = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  socialLinks: Array<{
    title: string
    url: string
  }>
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.url}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    socialLinks
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
