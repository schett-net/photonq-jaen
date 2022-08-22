import {PageProps} from 'gatsby'
import React from 'react'

import ExperimentEditor from '../components/Experiment/Editor/ExperimentEditor'
import ExperimentNavbar from '../components/Experiment/ExperimentNavbar'
import NavbarPadding from '../components/Layout/NavbarPadding'
import {useSelectedExperiment} from '../hook/hook.experiment'
import {getDefaultExperimentConfig} from '../model/model.experiment'
import {ExperimentWithConfigs} from '../model/types/type.experiment'
import {getSearchParams} from '../utils/queryParams'

export interface BaseEditorPageProps {
  experiment: ExperimentWithConfigs
  setExperiment: React.Dispatch<React.SetStateAction<ExperimentWithConfigs>>
  isLoading: boolean
}

function EditorPage(props: PageProps) {
  const {id} = getSearchParams<{id: string}>()

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const {experiment, setExperiment, isLoading} = useSelectedExperiment(
    id || 'new'
  )

  console.log('experiment', experiment, isLoading)

  const reset = () => {
    const defaultExperiment = getDefaultExperimentConfig(
      experiment.experimentName
    )
    setExperiment({
      ...defaultExperiment,
      experimentId: experiment.experimentId,
      projectId: experiment.projectId
    })
  }

  return (
    <div style={{backgroundColor: '#222328'}}>
      <ExperimentNavbar
        experiment={experiment}
        setExperiment={setExperiment}
        isLoading={isLoading}
        reset={reset}
      />
      <NavbarPadding />
      <ExperimentEditor
        experiment={experiment}
        setExperiment={setExperiment}
        isLoading={isLoading}
        action={() => {
          setIsDialogOpen(true)
        }}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  )
}

EditorPage.displayName = 'editor'

export default EditorPage
