import { useRouter } from "next/router"
import { useEffect } from "react";

const IndiceProdutos = () => {
  const { pathname, push } = useRouter()

  useEffect(() => {
    if (pathname === '/dashboard/produtos') {
      push('/dashboard/produtos/listar')
    }
  },[pathname])

  return undefined;
}

export default IndiceProdutos