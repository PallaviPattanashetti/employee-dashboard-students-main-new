import { Card } from '@/components/ui/card'
import LoginForm from '@/components/users/LoginForm'

const LoginPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Card className='w-100 h-120 p-4 flex justify-center items-center'>
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Login</h5>
                <div className='flex max-w-md flex-col gap-4'>
                    <LoginForm />
                </div>
            </Card>
        </div>
    )
}

export default LoginPage