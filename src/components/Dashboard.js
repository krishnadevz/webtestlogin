import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    
          <h2 className="text-center mt-10">WebTest🔍</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Current User:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 text-center mt-2">
            Update Profile
          </Link>
       
      <div className="w-80 text-center mt-2">
        <Button type="button" className="btn btn-danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}

