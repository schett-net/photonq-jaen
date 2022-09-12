import {PageProps} from 'gatsby'
import React from 'react'

import DownloadButton from '../components/DownloadButton'
import ExperimentEditor from '../components/Experiment/Editor/ExperimentEditor'
import ExperimentNavbar from '../components/Experiment/ExperimentNavbar'
import ExperimentResult from '../components/Experiment/ExperimentResult'
import NavbarPadding from '../components/Layout/NavbarPadding'

import {Container} from '@mui/system'
import AnimatedLoadingIcon from '../components/AnimatedLoadingIcon'
import {useSelectedExperiment} from '../hook/hook.experiment'
import {getExperimentResult} from '../model/model.api'
import {getDefaultExperimentConfig} from '../model/model.experiment'
import {
  ExperimentState,
  ExperimentWithConfigs
} from '../model/types/type.experiment'
import {getSearchParams} from '../utils/queryParams'
import {downloadData} from '../utils/utils.download'

export interface BaseEditorPageProps {
  experiment: ExperimentWithConfigs
  setExperiment: React.Dispatch<React.SetStateAction<ExperimentWithConfigs>>
  isLoading: boolean
}

function EditorPage(props: PageProps) {
  const {id, type} = getSearchParams<{id: string; type: string}>()

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const {experiment, experimentResult, setExperiment, isLoading} =
    useSelectedExperiment(id || 'new')

  async function handleDownloadExperimentResult() {
    const fullExperimentResult = await getExperimentResult(
      experiment.experimentId
    )
    downloadData(
      `${experiment.experimentName}_full-results`,
      fullExperimentResult
    )
  }

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
    <>
      {type === 'result' ? (
        <>
          <div
            className={'bg-primaryDark h-full pb-14 overflow-hidden h-screen'}>
            <ExperimentNavbar
              reset={() => {}}
              experiment={experiment}
              setExperiment={setExperiment}
              isLoading={isLoading}
            />
            <NavbarPadding />
            <Container maxWidth={'xl'}>
              {experiment.status === ExperimentState.Running ||
              experiment.status === ExperimentState.IN_QUEUE ? (
                <>
                  <div
                    className={
                      'h-screen flex flex-col justify-center items-center space-y-5'
                    }>
                    <AnimatedLoadingIcon />
                    <p className={'text-white text-lg'}>
                      {'Quantum computing your results …'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <ExperimentResult
                      experimentResult={experimentResult}
                      experiment={experiment}
                    />
                    <div className={'flex justify-end mt-8'}>
                      <DownloadButton
                        variant="contained"
                        onClick={() => {
                          handleDownloadExperimentResult()
                        }}>
                        {'Results'}
                      </DownloadButton>
                    </div>
                  </div>
                </>
              )}
            </Container>
          </div>
        </>
      ) : (
        <>
          <div style={{backgroundColor: '#222328'}}>
            <ExperimentNavbar
              experiment={experiment}
              setExperiment={setExperiment}
              isLoading={isLoading}
              reset={reset}
            />
            <NavbarPadding />
            <Container maxWidth={'xl'}>
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
            </Container>
          </div>
        </>
      )}
    </>
  )
}

EditorPage.displayName = 'editor'

export default EditorPage
