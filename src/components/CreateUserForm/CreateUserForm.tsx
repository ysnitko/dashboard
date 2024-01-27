import { createUser } from "@/app/lib/actions"

export default function CreateUserForm() {
  return (
    
        <form action={createUser} className="flex flex-col">
            <label htmlFor="name" className="flex flex-col ">Name
            <input type="text" id="name" name="name"/></label>
        
            <label htmlFor="email">Email
            <input type="email" id="email" name="email"/></label>
          
            <label htmlFor="password">Password
            <input type="password" id="password" name="password"/></label>
          
            <label htmlFor="role">Role
            <input type="text" id="role" name="role"/></label>
        
            <label htmlFor="status">Status
            <input type="text" id="status" name="status"/></label>
           
            <button type="submit"> Add user</button>
        </form>
   
  )
}
