import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        let a = word.toLowerCase();
        return a.charAt(0).toUpperCase()+a.slice(1);
    }
  return (
    // Here we have use && because of && if props.alert is null then props.alert will return false and then the further alert div will not show to us
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
       
</div>
  )
}
