import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGlobalContext } from '../../../store/global/GlobalProvider'
import propic from '../../../assets/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg'

function Preview() {
  const {
    state: { form },
  } = useGlobalContext()
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Title className="bg-warning p-2 text-white">
          Profil Information
        </Card.Title>
        <Card.Img
          width={200}
          height={250}
          variant="top"
          className="p-2"
          src={form.profil_image ? form.profil_image : propic}
        />
        <Card.Body>
          <Card.Title className="text-capitalize">
            {form.first_name} {form.last_name}
          </Card.Title>
          <Card.Text>{form.email}</Card.Text>
          <Card.Text>{form.biography}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Preview