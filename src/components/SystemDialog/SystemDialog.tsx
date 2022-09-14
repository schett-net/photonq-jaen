import {CloseOutlined} from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material'
import {useLocation} from '@reach/router'
import {navigate} from 'gatsby'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {ProjectExperimentDataProviderProps} from '../../providers/ProjectExperimentDataProvider'

interface SystemDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onButtonClick?: (value?: string) => string | void
  buttonText: string
  title: string
  label: string
  variant?: keyof ProjectExperimentDataProviderProps<any, any>
  inputType?: string
  defaultInput?: string
}

export default function SystemDialog({
  onButtonClick,
  buttonText,
  title,
  isOpen,
  label,
  setIsOpen,
  variant,
  inputType,
  defaultInput
}: SystemDialogProps) {
  const {t} = useTranslation()
  const [input, setInput] = useState(defaultInput || '')
  const [errorMassage, setErrorMassage] = useState<string>()

  const location = typeof window !== 'undefined' ? useLocation() : null

  const resetDialog = () => {
    setIsOpen(false)
    setInput('')
  }

  const handleOnClick = async () => {
    if (onButtonClick) {
      const error = onButtonClick(input)
      if (error) {
        setErrorMassage(error)
        return
      }
    } else if (variant === 'experiments') {
      if (!input.length) {
        setErrorMassage("Can't be empty")
        return
      }
      navigate(`/experiment?id=new&name=${input}`)
    }
    resetDialog()
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>
        <p>{t(title)}</p>
        <IconButton
          style={{position: 'absolute'}}
          className={'top-2 right-2'}
          onClick={() => setIsOpen(false)}>
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{minWidth: 500, paddingTop: 8}}>
        <div className={'flex flex-col space-y-4'}>
          <TextField
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleOnClick()
              }
            }}
            type={inputType}
            error={!!errorMassage}
            helperText={errorMassage}
            value={input}
            onChange={e => setInput(e.target.value)}
            fullWidth
            label={t(label)}
            variant={'outlined'}
            size={'small'}
          />
          <Button
            className={'self-end'}
            onClick={handleOnClick}
            variant={'contained'}>
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
