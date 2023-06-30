import { FC } from "react"
import { GenericButton } from "../genericComponents"
import axios from "axios"

export const HomePage: FC = () => {

  const sendReqSever = async () => {
    const res = await axios.post('http://localhost:8080/api/user/login', { email: "shiral@com", password: "shir" })
    console.log('res: ', res);
    if (res.data) {
      //open error alert - this email is already used
    }
  }

  return (
    <>
      <>this is a home page</>
      <GenericButton title="try" onClick={sendReqSever} />
    </>
  )

}
