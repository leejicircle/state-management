import React, { useState } from 'react'
// 주문확인 체크 박스를 누르면 주문 확인버튼을 누를 수 있음
const SummaryPage = () => {
  const [checked,setChecked] = useState(false)
  return (
    <div>
      <form>
        <input
          type='checkbox'
          checked={checked}
          id='confirm-checkbox'
          onClick={(e) => setChecked(e.target.checked)}
        />{" "}
        <label htmlFor='confirm-checkbox'>주문확인 하셨나요?</label>
        <br/>
        <button type='submit' disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  )
}

export default SummaryPage