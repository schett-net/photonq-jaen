import {Table, TableBody, TableCell, TableRow, TextField} from '@mui/material'
import React, {useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {User} from '../../../model/types/type.user'
import {AuthContext} from '../../../providers/AuthProvider'
import ProfileContentContainer from '../ProfileContentContainer'
import ProfileSection from '../ProfileSection'
import ProfileSectionHeader from '../ProfileSectionHeader'

const tableKeys: (keyof User)[] = ['name', 'email', 'username']

export default function ProfileDetailSection() {
  const {t} = useTranslation()
  const {value: user, setValue: setUser} = useContext(AuthContext)
  const [isEditing] = useState(false)

  if (!user) return null

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof User
  ) => {
    setUser(prev => ({
      ...prev!,
      [key]: e.target.value!
    }))
  }

  return (
    <ProfileSection withBottomSpace>
      <ProfileSectionHeader header={t('Details')} />
      <ProfileContentContainer>
        <Table>
          <TableBody>
            {Object.keys(user)
              .filter(key => tableKeys.includes(key as keyof User))
              .map((key, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {key === 'email' ? 'E-MAIL' : t(key).toUpperCase()}
                  </TableCell>
                  <TableCell>
                    {isEditing ? (
                      <TextField
                        onChange={e => handleOnChange(e, key as keyof User)}
                        value={user[key as keyof User]}
                        variant={'standard'}
                        fullWidth
                      />
                    ) : (
                      user[key as keyof User]
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </ProfileContentContainer>
    </ProfileSection>
  )
}
