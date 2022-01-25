import React from 'react'
import { useSelector } from 'react-redux'
import { isFirstConstants } from '../../../lib/constants'
import { RootModuleType } from '../../../modules/moduleTypes'
import { IPlaylist } from '../../../types'
import SelectPlaylistView from '../view/SelectPlaylistView'

interface IProps {
  onClickCancle: () => void
  onClickPlaylist: (item: IPlaylist) => void
}

function SelectPlaylistContainer({ onClickCancle, onClickPlaylist }: IProps) {
  const { playlist, isFirst } = useSelector(({ playlist, isFirst }: RootModuleType) => ({ playlist, isFirst }))

  return (
    <SelectPlaylistView
      playlists={playlist.items}
      isFirstOnAdd={isFirst.ADD_FIRST === isFirstConstants.FIRST}
      onClickCancle={onClickCancle}
      onClickPlaylist={onClickPlaylist}
    />
  )
}

export default SelectPlaylistContainer
