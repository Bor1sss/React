import React from 'react'
import ProductList from '../components/ProductList'

function User() {
  return (
    <>
      <h1>User</h1>
      <ProductList isAdmin={false}></ProductList>
    </>
  )
}

export default User
