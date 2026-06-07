import { useState } from "react";

function Contact() {
    let [txt, setTxt] = useState("Please fill out the form");
    let [myvar, setmyvar] = useState(false);

    function check() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "") {
            setTxt("Name cannot be empty");
            setmyvar(true);
              return;
        } 
        else if (name.length <= 8) {
            setTxt("Name must be atleast 8 characters");
            setmyvar(true);
              return;
        } 
        else if (email === "") {
            setTxt("Email cannot be empty");
            setmyvar(true);
              return;
        } 
        else if (!email.includes("@") || !email.includes(".com")) {
            setTxt("Email must be valid");
            setmyvar(true);
              return;
        } 
        else if (message === "") {
            setTxt("Message cannot be empty");
            setmyvar(true);
              return;
        } 
        else {
            setTxt("Thank you! Your form has been submitted.");
            setmyvar(false);
              return;
        }
    }

    return (
        <div className="container py-5" style={{ maxWidth: "600px" }}>
            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white py-4" style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                    <h2 className="mb-0 text-center" style={{ fontWeight: "600" }}>
                        Contact Us
                    </h2>
                    <p className="mb-0 text-center opacity-75" style={{ fontSize: "0.95rem" }}>
                        We'll get back to you soon
                    </p>
                </div>
                
                <div className="card-body p-4 p-md-5">
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label fw-bold" style={{ color: "#495057" }}>
                            Full Name <span className="text-danger">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            style={{ 
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px 15px",
                                transition: "all 0.3s"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#0d6efd"}
                            onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label fw-bold" style={{ color: "#495057" }}>
                            Email Address <span className="text-danger">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control form-control-lg"
                            placeholder="you@example.com"
                            style={{ 
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px 15px",
                                transition: "all 0.3s"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#0d6efd"}
                            onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold" style={{ color: "#495057" }}>
                            Message <span className="text-danger">*</span>
                        </label>
                        <textarea 
                            id="message" 
                            className="form-control form-control-lg"
                            placeholder="Type your message here..."
                            rows="4"
                            style={{ 
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px 15px",
                                transition: "all 0.3s",
                                resize: "vertical"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#0d6efd"}
                            onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                        ></textarea>
                    </div>
                    
                    <div className={`alert ${myvar ? 'alert-danger' : 'alert-success'} mt-3 mb-4`} 
                         style={{ 
                             borderRadius: "10px",
                             fontWeight: "500",
                             border: "none",
                             fontSize: myvar ? "0.95rem" : "1rem"
                         }}>
                        {txt}
                    </div>
                    
                    <button 
                        onClick={check} 
                        type="button" 
                        className="btn btn-primary btn-lg w-100 fw-bold"
                        style={{ 
                            padding: "14px",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                            letterSpacing: "0.5px",
                            boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
                            transition: "all 0.3s",
                            border: "none"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 6px 20px rgba(13, 110, 253, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 4px 15px rgba(13, 110, 253, 0.3)";
                        }}
                    >
                        Submit Message
                    </button>
                    
                    <div className="text-center mt-4 pt-3" style={{ borderTop: "1px solid #dee2e6" }}>
                        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                            <i className="bi bi-clock me-2"></i>
                            We respond within 24 hours
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 text-center">
                <small className="text-muted">
                    All fields marked with <span className="text-danger">*</span> are required
                </small>
            </div>
        </div>
    );
}

export default Contact;