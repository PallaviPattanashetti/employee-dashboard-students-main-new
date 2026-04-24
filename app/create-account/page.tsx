import { Card } from '@/components/ui/card'
import CreateAccountForm from '@/components/users/CreateAccountForm'

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-100 h-120 p-4 flex justify-center items-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create an Account
        </h5>
        <div className="flex max-w-md flex-col gap-4">
          <CreateAccountForm />
        </div>
      </Card>
    </div>
  )
}

export default CreateAccountPage