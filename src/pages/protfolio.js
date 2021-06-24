import React from "react"

function Hello(props) {
  return <div>Hello world! {props.name}</div>
}

export default function Home() {
  return <Hello name='Ling'/>
}
