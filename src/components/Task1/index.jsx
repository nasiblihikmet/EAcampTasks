import { useMemo } from 'react'
import { data } from '../../constants/data'

function Task1() {
  const dataFetch = useMemo(() => {
    function dataFetch(data) {
      let dataEmail = data?.find((item) => {
        if (item.attribute == 'email') return item.attribute
      })

      const dataChannel = dataEmail.emails.filter((item) =>
        item.channel_id == 4505 ? item.channel_id : '',
      )

      console.log(dataChannel, 'dataChannel')
      return dataChannel
    }

    return dataFetch(data)
  }, [])
  return (
    <div>
      <h2>Task 1</h2>
      {dataFetch?.map((item, index) => {
        return (
          <div key={`${index}+item`}>
            <div>Channel_id: {item.channel_id}</div>
            <div>Email: {item.email}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Task1
