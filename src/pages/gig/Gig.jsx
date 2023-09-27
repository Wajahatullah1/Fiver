import React from 'react'
import "./Gig.scss"
import Slider from '../../components/slide/Slide'
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="main">
          <div className="firsthalf">
        <div className="left">
          <span className="bread ">
            FIVERR GRAPHICS DESGIN
          </span>
          <h1 className=''>I will create ai generated art for you</h1>
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=160" alt="" />
            <span>Wajahat khan</span>
            <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>

            </div>
            </div>
          </div>
          <Slider className="carousel-initialized"slidesToShow={1} arrowScroll={1} >
            <img src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/image/upload/w_800/q_auto,f_auto/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/image/upload/w_800/q_auto,f_auto/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg" alt="" />

          </Slider>
          <div className="para">
          <h2>About this gig</h2>
          <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
          
          
            <h2>About the seller</h2>
          <div className="user">
            
            <div className="mainlogic">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
      
          <div className="info">
           <span>Tayyab</span>
             <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
           
              </div>  
              <div className="btn">
            <button>Contact me</button>
            </div>
            </div>
          </div>
            </div>
        <div className="box">
          <div className="items">
            <div className="item">
              <div className="tittle">From
                   </div>
              <div className="desc">USA</div>
          </div>
            <div className="item">
              <div className="Member Since">Member since
                   </div>
              <div className="desc">Aug 2022</div>
          </div>
            <div className="item">
              <div className="tittle">Avrg. response time
                   </div>
              <div className="desc">4 hour</div>
          </div>
            <div className="item">
              <div className="tittle">Last delivery
                   </div>
              <div className="desc">1 Day</div>
          </div>
            <div className="item">
              <div className="tittle">Languages
                   </div>
              <div className="desc">English</div>
          </div>
          </div>
          <hr/>
          <p>i am ai developer i will design and provide machine learning 
            model for traffic detection image recognation Given the rapid evolution of AI and machine learning, AI developers must stay updated with the latest research, techniques, and best practices in the field </p>
        
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="item">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>Tayyab</span>
              <div className="county">
                <img src="/img/pak.avif" alt="" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
          <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
            </div>
            <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>YES</span>
              <img src="/img/dislike.png" alt="" />
              <span>NO</span>
            </div>
        </div>
        <hr/>
        <div className="item">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>Jadeja</span>
              <div className="county">
                <img src="/img/pak.avif" alt="" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
          <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
            </div>
            <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>YES</span>
              <img src="/img/dislike.png" alt="" />
              <span>NO</span>
            </div>
        </div>
        <hr/>
        <div className="item">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>Abuzar</span>
              <div className="county">
                <img src="/img/pak.avif" alt="" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
          <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
            </div>
            <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>YES</span>
              <img src="/img/dislike.png" alt="" />
              <span>NO</span>
            </div>
        </div>
        <hr/>
        <div className="item">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>Majid</span>
              <div className="county">
                <img src="/img/pak.avif" alt="" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
          <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
            </div>
            <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>YES</span>
              <img src="/img/dislike.png" alt="" />
              <span>NO</span>
            </div>
        </div>
        <hr/>
        <div className="item">
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>Ajwad</span>
              <div className="county">
                <img src="/img/pak.avif" alt="" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>
          <div className="stars flex">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            
            </div>
            <p>A Fiverr clone gig is a freelance service or project listing
            offered on a platform inspired by Fiverr business model. Just like on Fiverr,
            individuals or businesses on a Fiverr clone can provide a wide range of services
            from graphic design and writing to programming and digital marketing. These gigs often include detailed descriptions
            pricing and delivery times allowing buyers to browse and select services that meet their specific needs. Freelancers and service providers use these gigs to showcase their skills and expertise
            attracting potential clients and earning income through the platform. Fiverr clone gigs offer a convenient way for both freelancers and clients to connect and collaborate on a global scale
            making it a popular choice for those seeking or offering freelance services in today digital marketplace.</p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>YES</span>
              <img src="/img/dislike.png" alt="" />
              <span>NO</span>
            </div>
            </div>
        </div>
      </div>
      <div className="right">
        <div className="price">
          <h2>I AI generated image</h2>
          <h2>$ 59.99</h2>
        </div>
        <p> I will create your Ai genrated images for your work </p>
        <div className="details">
          <div className="item">
          <img src="/img/clock.png" alt="" />
          <span>2 Days delivery</span>
          </div>
          <div className="item">
          <img src="/img/recycle.png" alt="" />
          <span>3 Reservation</span>
          </div>
        </div>
        <div className="feature">
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Ai services</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Promote writing</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Web development services</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>App development services</span>
          </div>
        </div>
        <button>Continue</button>
      </div>
      </div>
</div>
    </div>
  )
}
export default Gig
