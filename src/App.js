import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import Footer from './footer';
import './App.css';


const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

   // Handle form input change
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the success message
    setFormSubmitted(true);

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide the message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{
        padding: '10px 20px', 
        backgroundColor: '#1b1b1b', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'fixed', 
        width: '100%', 
        top: '0', 
        zIndex: '1000',
        boxShadow: '0px 4px 2px -2px gray'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="logo.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{ 
              cursor: 'pointer', 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e)=> e.target.style.color = '#f0ad4e'}
            onMouseOut={(e) => e.target.style.color = 'white'}
              
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ 
              cursor: 'pointer', 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e)=> e.target.style.color = '#f0ad4e'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            About
          </Link>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            style={{ 
              cursor: 'pointer', 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e)=> e.target.style.color = '#f0ad4e'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            Menu
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={{ 
              cursor: 'pointer', 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e)=> e.target.style.color = '#f0ad4e'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            Contact
          </Link>
          <Link
            to="buy now"
            smooth={true}
            duration={500}
            style={{ 
              cursor: 'pointer', 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e)=> e.target.style.color = '#f0ad4e'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            Buy Now
          </Link>

        </div>
      </nav>

      {/* Page Content */}
      <div style={{ paddingTop: '70px' }}>

{/* Home Section */}
<section id="home" style={{ 
  minHeight: '100vh', 
  
  position: 'relative',
  backgroundImage: 'url(background.jpg)',  // Set this to your coffee-related background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  fontFamily: 'Georgia, serif'
}}>
  <div style={{
    cursor: 'pointer', 
    textDecoration: 'none', 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s ease',

  }}>

  </div>

  <div style={{
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Dark overlay for text visibility
    zIndex: 1  
  }}></div>

  <div style={{
    position: 'relative', 
    zIndex: 2, 
    color: '#fff',
    textAlign: 'center',
    paddingTop: '150px' // Adjust the padding to vertically center the text
  }}
  onMouseOver={(e)=> e.target.style.color = '#555657'}
  onMouseOut={(e) => e.target.style.color = 'white'}
  >
    <ScrollAnimation animateIn="fadeIn" duration={1}>
    <h1 style={{
      fontSize: '4rem',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
    }}>Bearista Coffee Shop</h1>
    <p style={{ fontSize: '1.5rem', marginTop: '20px',  fontFamily: 'sans-serif' }}>
    Discover the Taste of Real Coffee
    </p>
    <ScrollAnimation animateIn="fadeInUp" delay={500} duration={2}>
      <link to="/see-more">
        
      </link>
    <button style={{
      padding: '10px 30px', 
      fontSize: '1.2rem', 
      backgroundColor: '#464848', 
      color: 'white', 
      border: 'none', 
      borderRadius: '5px',
      marginTop: '20px',
      cursor: 'pointer'
    }}>
      see more
    </button>
    
    </ScrollAnimation>
</ScrollAnimation>
  </div>
</section>

{/* About Us Section */}
<section id="about" style={{ 
          height: '90vh',
          padding: '60px',
          backgroundColor: '#A2ADA2'
        }}>
          
          <section className ="container my-5">
            <div className="row">
              {/*left side image */}
              
              
              <div className="col-md-6 d-flex flex-column">
              
                <img src = "coco2.jpg" alt="Coffee maker" className="img-fluid mb3" style={{
                 maxHeight: 'px', 
                 height: '450px',
                 width: '300px',
                objectFit: 'left',
                borderRadius: '10px'
                
                }}/>
                
                </div>
               

              <div className="col-md-6 d-flex flex-column justify-content-center">
              
                <h6 className="display-4">About us</h6>
                <h6 className="text-muted">QUALITY CACAO FROM AROUND THE GLOBE</h6>
                <hr className="my-4"/>
                <p>
                Learn more about our story and values.Since 1963, we have scoured the world for the best coffee available anywhere and we expertly roast our beans in small batches for optimal flavor. We purchase our beans direct from coffee farmers building on decades-long relationships to ensure we get the top 1% of the best arabica beans in the world. So, we know where every coffee bean comes from. Now the same great coffee we use in our store locations are available in retail packages.
                </p>
                
              </div>
             
            </div>
          </section>
          </section>
         



         {/* Menu Section */}
          <section id="menu" style={{ 
             padding: '80px',
             height: '80vh', 
             backgroundColor: '#A5E1A5' 
           }}>
          <h1 style={{textAlign: 'center',textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'}}>Our Coffee Menu</h1>
          <p style={{textAlign:'center'}}>Enjoy one of our light, medium, dark, decaffeinated, or flavored brews of the day, brewed from only the top 1% of Arabica beans in the world.</p>

          <div style={{ 
             display: 'flex', 
             overflowX: 'auto', 
             gap: '10px', 
             padding: '30px 0'
          }}>
          {/* Coffee 1 */}
          
          <div className="image-hover-effect" style={{ minWidth: '250px', textAlign: 'center' }} >
          <img src="image1.jpg" alt="Caramel Cold Brew Latte" className="img-fluid mb-2" style={{ 
           borderRadius: '10px' ,
           width: '200px',
           height: '200px',
           objectFit: 'cover'
           }} />
          <h5>Caramel Cold Brew Latte</h5>
             <p>$2.52</p>
          </div>
         
        

    {/* Coffee 2 */}
    <div className="image-hover-effect" style={{ minWidth: '250px', textAlign: 'center' }}>
              <img src="image2.jpg" alt="Vanilla Bean Cold Brew Latte" className="img-fluid mb-2" style={{
                borderRadius: '10px',
                width: '200px',
                height: '200px',
                objectFit: 'cover'
              }} />
              <h5>Vanilla Bean Cold Brew Latte</h5>
              <p>$5.00</p>
            </div>

    {/* Coffee 3 */}
    <div className="image-hover-effect" style={{ minWidth: '250px', textAlign: 'center' }}>
      <img src="image3.jpg" alt="Cold Brew Coffee" className="img-fluid mb-2" style={{ 
        borderRadius: '10px',
        width: '200px',
        height: '200px',
        objectFit: 'cover'
        }} />
      <h5>Cold Brew Coffee</h5>
      <p>$6.12</p>
    </div>

    {/* Coffee 4 */}
    <div className="image-hover-effect" style={{ minWidth: '250px', textAlign: 'center' }}>
      <img src="image4.jpg" alt="Mocha Cold Brew Latte" className="img-fluid mb-2" style={{ 
        borderRadius: '10px' ,
        width: '200px',
        height: '200px',
        objectFit: 'cover'
        }} />
      <h5>Mocha Cold Brew Latte</h5>
      <p>$5.49</p>
    </div>

    {/* Coffee 5 */}
    <div className="image-hover-effect" style={{ minWidth: '250px', height: '200px', textAlign: 'center' }}>
      <img src="image5.jpg" alt="Vietnamese Cold Brew Coffee" className="img-fluid mb-2" style={{ 
        borderRadius: '10px',
        width: '200px',
        height: '200px',
        objectFit: 'cover'
         }} />
         
      <h5>Vietnamese Cold Brew Coffee</h5>
      <p>$4.99</p>
    </div>

     {/* Coffee 6 */}
    <div className="image-hover-effect" style={{ minWidth: '250px', height: '200px', textAlign: 'center' }}>
      <img src="image6.jpg" alt="Vietnamese Cold Brew Coffee" className="img-fluid mb-2" style={{ 
        borderRadius: '10px',
        width: '200px',
        height: '200px',
        objectFit: 'cover'
         }} />
      <h5>Cold Brew Coffee</h5>
      <p>$5.99</p>
        </div>

      </div>
      
    </section>
    
    <section id="more-menu" style={{
      backgroundImage: 'url(background3.jpg)',
  padding: '100px',
  background: 'linear-gradient(to bottom right, #89B189, #6FA56F)',
  color: '#333',
  textAlign: 'center'
}}>
  <h2 style={{
    fontSize: '36px',
    
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 'bold',
    
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    marginBottom: '50px'
  }}>Explore More Items</h2>

  <div className="container">
    <div className="row">
      {/* Menu Item 1 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="hot.jpg" alt="Hot Beverages" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Hot Beverages</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>Wide range of Steaming hot coffees to make you fresh and light.</p>
        </div>
      </div>

      {/* Menu Item 2 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="cold.jpg" alt="Cold Beverages" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Cold Beverages</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>Creamy and frothy cold coffee to make you feel cool from inside.</p>
        </div>
      </div>

      {/* Menu Item 3 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="drink.jpg" alt="Refreshments" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Refreshments</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>Fruity and icy refreshing drinks to make you feel good.</p>
        </div>
      </div>

      {/* Menu Item 4 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="eat.jpg" alt="Special Combos" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Special Combos</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>Easy way to choose your favorite eating and drinking combinations.</p>
        </div>
      </div>

      {/* Menu Item 5 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="burger.jpg" alt="Burgers" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Burgers</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>Yummy! Quick bites to satisfy your small-sized hunger.</p>
        </div>
      </div>

      {/* Menu Item 6 */}
      <div className="col-md-4 text-center mb-5">
        <div className="menu-item" style={{
          padding: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="dessert.jpg" alt="Desserts" className="img-fluid" style={{
            borderRadius: '15px',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}/>
          <h5 style={{ marginTop: '20px', fontWeight: '600' }}>Desserts</h5>
          <p style={{ fontSize: '14px', color: '#666' }}>This for sure would satiate your palate and take you on a treat.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        
{/* Prices List Section */}
<section id="buy now">
<section id="prices" style={{
  backgroundImage: 'url(background2.jpg)',
  padding: '60px',
  backgroundColor: '#DAF7A6',
  textAlign: 'center'
}}>
  <h2 style={{ marginBottom: '30px',  fontSize: '35px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', color: '#333' }}>Our Prices</h2>
  <table style={{
    margin: '0 auto',
    borderCollapse: 'collapse',
    width: '80%',
  }}>
    <thead>
      <tr style={{ backgroundColor: '#DAF7A6' }}>
        <th style={{ padding: '15px', fontSize: '25px', border: '1px solid #ddd' }}>Item</th>
        <th style={{ padding: '15px', fontSize: '25px', border: '1px solid #ddd' }}>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Caramel Cold Brew Latte</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$2.52</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Vanilla Bean Cold Brew Latte</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$5.00</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Cold Brew Coffee</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$6.12</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mocha Cold Brew Latte</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$5.49</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Vietnamese Cold Brew Coffee</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$4.99</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Cold Brew Coffee</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$5.99</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Burgers</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$5.79</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Desserts</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>$3.22</td>
      </tr>
      
    </tbody>
  </table>
</section>
</section>



        {/*Contact Section */}
<section id="contact" style={{ 
  padding: '60px', 
  backgroundColor: '#A3CCA3', 
  minHeight: '80vh'
}}>
  <div className="container">
    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h1>
    <p style={{ textAlign: 'center', marginBottom: '40px' }}>
      We'd love to hear from you! Fill out the form below for any inquiries or to get in touch.
    </p>
    {/* Success Message */}
    {formSubmitted && (
              <div className="alert alert-success" role="alert" style={{ textAlign: 'center' }}>
                Message added successfully!
              </div>
            )}

            {/* Contact Form*/}

    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="form-group mb-3">
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone" style={{ fontWeight: 'bold' }}>Phone:</label>
        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message:</label>
        <textarea className="form-control" id="message" rows="5" placeholder="Write your message" required></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-100" style={{ padding: '10px 0' }}>
        Send Message
      </button>
    </form>
  </div>
</section>



      </div>
      <Footer/>
     
    </div>
  );
};

export default App;