import { FC } from "react"
import { GenericButton } from "../genericComponents"
import axios from "axios"

export const HomePage: FC = () => {

  const sendReqSever = async () => {
    const res = await axios.post('http://localhost:8080/api/user/register', { email: "al@", password: "shir", username: "shir a" })
    console.log('res: ', res);
  }

  return (
    <>
      <>this is a home page</>
      <GenericButton title="try" onClick={sendReqSever} />
    </>
  )

}
