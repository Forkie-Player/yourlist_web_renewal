import React from 'react'
import { IPlaylistItem } from '../../../types'
import ListItem from '../elements/ListItem'

interface IProps {
  items: IPlaylistItem[]
}

function ListView({ items }: IProps) {
  return (
    <div className="w-full h-full space-y-4">
      <div className="w-full flex justify-between leading-4  pr-[15%]">
        <div className="text-xl">재생목록</div>
        <div
          className="text-base text-redrose 
            cursor-pointer 
            hover:drop-shadow-md"
        >
          추가
        </div>
      </div>
      <div className="w-full overflow-y-scroll flex gap-8 flex-wrap pr-[10%] py-4 px-2">
        {items.map((item, index) => (
          <ListItem item={item} index={index} key={`listitem_${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ListView