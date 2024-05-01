import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGlobalContext } from '../../../store/global/GlobalProvider'
import propic from '../../../assets/profile-icon-design-free-vector.jpg'

function Preview() {
  const {
    state: { form },
  } = useGlobalContext()
  return (
    <div>
      <Card style={{ width: '17rem', height: '33rem' }}>
        <Card.Title className="bg-secondary p-2 text-white">
           Your Profil
        </Card.Title>
        <Card.Img
          width={200}
          height={230}
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