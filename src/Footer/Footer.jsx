
const Footer = () => {
  return (
    <footer className="bg-blue-100  py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
            <div className="grid justify-center place-items-center gap-4">
                <img src="/public/images/crystal-cure-final-logo.png" alt="Footer Logo" className="w-28"/>
                <p>Crystal Cure Pest Control</p>
            </div>
            <div>There</div>
            <div>Hi</div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; 2020 Crystal Cure Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;