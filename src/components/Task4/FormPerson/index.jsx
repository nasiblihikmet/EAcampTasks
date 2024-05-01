import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useGlobalContext } from '../../../store/global/GlobalProvider'
import { TYPES } from '../../../store/global/types'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  biography: '',
  profil_image: '',
}

function FormPerson() {
  const { dispatch } = useGlobalContext()

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: handleForm,
    validate: (form) => {
      const error = {}
      const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if (!form?.first_name?.trim()) {
        error.first_name = 'Require field'
      }
      if (!form?.last_name?.trim()) {
        error.last_name = 'Require field'
      }
      if (!regEmail.test(form?.email?.trim())) {
        error.email = 'Enter correct email'
      }
      if (!form?.biography?.trim()) {
        error.biography = 'Require field'
      }

      return error
    },
  })

  function handleForm(data) {
    dispatch({ type: TYPES.FORM, payload: data })
  }
  return (
    <Form className="border p-4 bg-secondary">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="first_name"
          type="text"
          placeholder="Enter First Name"
          onChange={handleChange}
        />
        {errors?.first_name && (
          <Form.Text className="text-danger">{errors?.first_name}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="last_name"
          type="text"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        {errors?.last_name && (
          <Form.Text className="text-danger">*{errors?.last_name}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        {errors?.email && (
          <Form.Text className="text-danger">*{errors?.email}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Biography</Form.Label>
        <Form.Control
          name="biography"
          type="text"
          placeholder="Enter Biography"
          onChange={handleChange}
        />
        {errors?.biography && (
          <Form.Text className="text-danger">*{errors?.biography}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Profil Image</Form.Label>
        <Form.Control
          name="profil_image"
          type="text"
          placeholder="Enter Profil Image"
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        variant="info"
        type="submit"
        className="w-100"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  )
}

export default FormPerson