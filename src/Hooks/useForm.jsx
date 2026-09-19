import { useState } from "react"

function useForm(initialValues){
  const [formData,setFormData] = useState(initialValues)
  function handleChange(e){
    const {name,value} = e.target
    setFormData(prevFormData => (
      {...prevFormData,[name]:value}
    ))
  }
  return {formData,setFormData,handleChange}
}

export default useForm