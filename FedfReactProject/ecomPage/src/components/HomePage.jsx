import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between item-center bg-pink-400 p-4 text-white">
        <div className="flex gap-4">
          <img src="images/kllogo.jpg" alt="kllogo" className="w-20 mr-3" />
          <h1>Product Management System</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/signIn">SignIn</Link>
          <Link to="/signUp">SignUp</Link>
          <Link to="/aboutus">AboutUs</Link>
        </div>
      </nav>
      <div>
        <p className="text-gray-600 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil a velit minus, nisi maiores beatae eum commodi nobis expedita nulla possimus facere excepturi, voluptatibus labore laudantium quidem quam eaque alias.</p>
      </div>
      
      <div className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Product Management System</h2>
        <p className="mb-2 text-gray-700">
          Manage products, users, and inventory easily.
        </p>
        <p className="text-gray-600">
          Sign up as an Admin or User to get started .
        </p>
      </div>

    </div>
  )


}
export default HomePage;
