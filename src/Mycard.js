import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import harley3 from './assets/harley3.jpg';
import harley from './assets/harley.jpg';



function Mycard() {
  return (
    <div className='row'>
        <h1>Explore the 2024 motorcycle lineup</h1>
        <div className='col-4'>
        <Card >
      {/* <Card.Img variant="top" src="https://images.pexels.com/photos/2611691/pexels-photo-2611691.jpeg" /> */}
      <Card.Img variant="top" src={harley3} />
      <Card.Body>
        <Card.Title>STREET GLIDE<sup>TM</sup></Card.Title>
        <Card.Text>
          Equipped with the Milwaukee-Eight<sup>TM</sup> 117 engine, the 2024 Street Glide delivers more displacement, torque, and horsepower than ever before.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <a href='' className='links'>SEE THE BIKE &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='col-4'>
        <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3621667/pexels-photo-3621667.jpeg" />
      <Card.Body>
        <Card.Title>HERITAGE CLASSIC</Card.Title>
        <Card.Text>
          A quintessential American cruiser, the 2024   Heritage Classic 114 has showstopping vintage details and pure rock 'n' roll style. <br></br><br></br>
        </Card.Text>
      <a href='' className='links'>SEE THE BIKE &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='col-4'>
        <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/18234137/pexels-photo-18234137/free-photo-of-harley-davidson-motorbike.jpeg" />
      <Card.Body>
        <Card.Title>PAN AMERICA<sup>TM</sup> 1250 SPECIAL</Card.Title>
        <Card.Text>
          Designed for both on- and off-road Adventure Touring the PAN America 1250 Special is engineered to explore and endure, no matter what turns you take.
        </Card.Text>
        <a href='' className='links'>SEE THE BIKE &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='row'>
        <h1>Shop Parts & Apparel</h1>
        <div className='col-3'>
        <Card >
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2022/10/20/11/11/motorcycle-7534599_1280.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text> 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <a href='' className='links'>SHOP MEN'S GEAR & APPAREL &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='col-3'>
        <Card>
      <Card.Img variant="top" src={harley}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
      <a href='' className='links'>SHOP PARTS & ACCESSIORIES &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='col-3'>
        <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/17513105/pexels-photo-17513105/free-photo-of-biker-on-a-harley-davidson-with-leather-saddlebags-and-a-trunk.jpeg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <a href='' className='links'>SHOP WOMEN'S GEAR & APPAREL &rarr;</a>
      </Card.Body>
    </Card>
        </div>
        <div className='col-3'>
        <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/20806415/pexels-photo-20806415/free-photo-of-motorbike-by-the-shore.jpeg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <a href='' className='links'>GEAR UP FOR THE RIDE &rarr;</a>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}
export default Mycard;