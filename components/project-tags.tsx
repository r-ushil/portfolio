import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react"
import { IconType } from "react-icons"

import {
    FaReact,
    FaRust,
    FaNode,
  } from 'react-icons/fa'

import {
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si'

export enum ProjectTags {
    REACT,
    NODE,
    TYPESCRIPT,
    RUST,
    NEXT,
}

interface tagInfo {
    color: string,
    icon: IconType
}

function getTagInfo(tag: ProjectTags) {
    switch (tag) {
        case ProjectTags.REACT: return {color: 'blue', icon: FaReact}
        case ProjectTags.NODE: return {color: 'green', icon: FaNode}
        case ProjectTags.TYPESCRIPT: return {color: 'purple', icon: SiTypescript}
        case ProjectTags.RUST: return {color: 'orange', icon: FaRust}
        case ProjectTags.NEXT: return {color: 'white', icon: SiNextdotjs}
    }
}

export function getTags(tags: ProjectTags[]) {

    const tagsAsJsx = tags.map((item) => {
      const tagInfo = getTagInfo(item);
      return (
        <Tag
          key={item}
          colorScheme={tagInfo.color}
          size='md'
        >
          <TagLeftIcon as={tagInfo.icon}></TagLeftIcon>
          <TagLabel>{item}</TagLabel>
        </Tag>
    )})

    return tagsAsJsx;
}