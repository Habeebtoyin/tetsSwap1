import React from 'react'
import { Box, Flex, Text, useMatchBreakpoints } from '@smartdev1990/newbrc-uikit'
import { useAudioModeManager } from 'state/user/hooks'

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text color='text' bold>{translateString(999, 'Audio')}</Text>
      </Flex>
    </Box>
  )
}

export default AudioSetting
