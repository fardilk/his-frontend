import { useEffect } from 'react'

interface SuccessToastProps {
  message: string
  onClose: () => void
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  )
}

export default SuccessToast
