import 'bootstrap/dist/css/bootstrap.min.css'
import FormPerson from './FormPerson'
import Preview from './Preview'

function Task4() {
  return (
    <div>
      <h2>Task 4</h2>
      <div className="d-flex  justify-content-center">
        <FormPerson />
        <Preview />
      </div>
    </div>
  )
}

export default Task4
