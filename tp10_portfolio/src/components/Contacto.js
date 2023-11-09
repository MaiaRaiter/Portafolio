//Deben crear un componente de Contacto, el cual deberá estar ubicado en el footer. Usen un form de bootstrap, pero si quieren algo más pueden usar https://formik.org/ o https://react-hook-form.com/get-started . Tambien, agregar info a las redes sociales que desen como su perfil de LinkedIn.

import React from 'react'

export default function Contacto () {
  return (
      <form>
          <div  className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div  className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div  className="form-check">
              <input type="checkbox"  className="form-check-input" id="exampleCheck1" />
              <label  className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
      </form>

  )
}
