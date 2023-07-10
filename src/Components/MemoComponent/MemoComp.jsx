import React from 'react'

function MemoComp({name}) {
    console.log('Memo Component rendering')
  return (
    <div>MemoComp {name}</div>
  )
}

export default React.memo(MemoComp)