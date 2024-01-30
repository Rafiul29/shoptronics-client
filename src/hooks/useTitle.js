import { useEffect } from "react"

export const useTitle = (title="") => {
  useEffect(()=>{
    document.title=`${title!==""? `${title} - Shop tronics`:"Shop tronics"} `
  },[title])
}

