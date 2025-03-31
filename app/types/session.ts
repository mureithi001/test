import { DefaultSession } from "next-auth"

export interface User {
  id: string
  subscription?: {
    status: string
  }
}

export interface Session extends DefaultSession {
  user: DefaultSession['user'] & User
}
