const Footer = () => {
    return (
      <footer className=" text-gray-400 py-6 border-t border-gray-700 text-center mt-16">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
              Venkateswara Reddy
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  