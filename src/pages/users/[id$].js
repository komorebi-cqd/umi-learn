import React from 'react'

export default function User(props) {
  return (
    <div>User id:{props.match.params.id}</div>
  )
}
