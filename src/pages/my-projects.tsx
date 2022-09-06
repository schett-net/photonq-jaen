import {connectPage, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import React, {useState} from 'react'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import SectionHeader from '../components/Layout/SectionHeader'
import MainTable from '../components/ProjectTable/MainTable'
import SystemDialog from '../components/SystemDialog/SystemDialog'
import {AddExperimentDialogProps} from '../model/types/type.experiment'
import ProjectExperimentDataContextProvider from '../providers/ProjectExperimentDataProvider'

export function MyProjectPage(props: PageProps) {
  // const [isAddProjectDialogOpen, setIsProjectDialogOpen] = useState(false); ---FOR RELEASE 1 NOT RELEVANT---
  const [addExperimentDialogProps, setAddExperimentDialogProps] =
    useState<AddExperimentDialogProps>({
      open: false,
      projectId: ''
    })

  return (
    <PageLayout pathname={props.path}>
      <NavbarPadding />
      <SectionHeader
        withVerticalSpacing
        header={
          <Field.Text name="sectionHeader" defaultValue={'My Experiments'} />
        }
        onClick={() =>
          setAddExperimentDialogProps(prev => ({...prev, open: true}))
        }
        withButton
        buttonText={'Add new Experiment'}
      />
      <ProjectExperimentDataContextProvider>
        <MainTable setAddExperimentDialogProps={setAddExperimentDialogProps} />
        {/*---FOR RELEASE 1 NOT RELEVANT---*/}
        {/*<SystemDialog*/}
        {/*  setIsOpen={setIsProjectDialogOpen}*/}
        {/*  isOpen={isAddProjectDialogOpen}*/}
        {/*  buttonText={"Add"}*/}
        {/*  title={"Add new Project"}*/}
        {/*  label={"Project Name"}*/}
        {/*  variant={"projects"}*/}
        {/*/>*/}
        <SystemDialog
          setIsOpen={(value: boolean) =>
            setAddExperimentDialogProps(prev => ({...prev, open: value}))
          }
          variant={'experiments'}
          isOpen={addExperimentDialogProps.open}
          buttonText={'Add'}
          title={'Add new Experiment'}
          label={'Experiment Name'}
        />
      </ProjectExperimentDataContextProvider>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(MyProjectPage, {displayName: 'MyProjectPage'})
