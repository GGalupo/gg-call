import { Box, styled, Text } from '@ggalupo-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid $gray600',
  padding: '$4 $6',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const AuthError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})

export const ConnectedChip = styled('div', {
  border: '1px solid $ignite500',
  padding: '$3',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  fontWeight: '$medium',

  svg: {
    marginLeft: '$1',
  },
})