
function Home() {
 
  return (
    <div>
      <div className="Home">
        <h1>WELCOME HOME</h1>
       
        <p className="homepage">
          I am truly blessed to have a house. I live in a house made by my
          parents, with my parents and grandparents. My parents built this house
          for us with a lot of hard work. It has three rooms, one balcony, one
          kitchen, two bathrooms, and a terrace.
        </p>
    
      </div>

      <div className="Home">
        <h1 className="contact">CONTACT US</h1>
        <form className="formpage">
          <label htmlFor="Name">Name:</label>
          <input type="text" name="username" id="userid" /> <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="useremail" />
          <br />
          <br />
          <label htmlFor="pasword">Password:</label>
          <input type="password" name="password" id="userpassword" />
          <br />
          <br />
          <label htmlFor="mobile number">Mobile Number:</label>
          <input type="number" name="number" id="usernumber" />
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>

      <div className="Home">
        <h1 className="abouthome">ABOUT HOME</h1>
        <p className="home">
          Shelter: A house protects inhabitants from harsh weather, such as
          rain, heat, cold, and wind. It creates a stable micro-climate for
          living. Safety: It provides security from threats like wild animals
          and intruders, ensuring a safe space for families. Living and Comfort:
          Houses offer a comfortable and permanent place for daily activities
          like cooking, eating, and sleeping. They are a stable place for
          families to live and grow. Family and Community: A house is a place
          for family to live together and is considered a basic building block
          of society. Identity and Outlook: A home can influence an individual's
          perception of the world and shape their lifestyle and values,
          particularly in areas like environmental sustainability.
        </p>
      </div>
    </div>
  );
}
export default Home;
