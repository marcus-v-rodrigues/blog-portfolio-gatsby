import { useEffect } from 'react'

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => { //Limpando o script do efeito para evitar problemas
      document.body.removeChild(script)
    }
  }, [url])
}

export default useScript