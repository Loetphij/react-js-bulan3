import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import FormWithShadcn from '@/components/BasicFormWithShadcn'
import MultiStepForm from '@/components/MultiStepForm'
import DynamicFormWithZod from '@/components/DynamicForm'
import AdvancedIntegrationForm from '@/components/AdvancedIntegrationForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <FormWithShadcn /> },
      { path: '/basic', element: <FormWithShadcn /> },
      { path: '/multistep', element: <MultiStepForm /> },
      { path: '/dynamic', element: <DynamicFormWithZod /> },
      { path: '/advanced', element: <AdvancedIntegrationForm /> }
    ]
  }
])
