"use client";
import type { Metadata } from "next";

import { Locale } from "@/lib/i18n/config";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"general" | "aid">("general");
  const [generalForm, setGeneralForm] = useState({ name: "", email: "", message: "" });
  const [aidForm, setAidForm] = useState({ name: "", email: "", phone: "", childName: "", school: "", grade: "", needType: "", amount: "", details: "" });
  const [generalSent, setGeneralSent] = useState(false);
  const [aidSent, setAidSent] = useState(false);

  const inputStyle = { width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", fontFamily: "Inter, sans-serif", color: "#0F172A", background: "white", boxSizing: "border-box" as const, outline: "none" };
  const labelStyle = { display: "block", fontWeight: 600, fontSize: "13px", color: "#334155", marginBottom: "6px" };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>

      {/* Hero */}
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact Us</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            We Are Here to Help
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.85 }}>
            Whether you have a question, want to get involved, or need education support for yourself or your child — reach out and we will respond personally.
          </p>
        </div>
      </section>

      {/* Tab Selector */}
      <section style={{ background: "#F8F7FF", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem", background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "6px" }}>
            <button onClick={() => setActiveTab("general")} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "14px", fontFamily: "Inter, sans-serif", background: activeTab === "general" ? "#8B5CF6" : "transparent", color: activeTab === "general" ? "white" : "#64748B", transition: "all 0.2s" }}>
              General Enquiry
            </button>
            <button onClick={() => setActiveTab("aid")} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "14px", fontFamily: "Inter, sans-serif", background: activeTab === "aid" ? "#8B5CF6" : "transparent", color: activeTab === "aid" ? "white" : "#64748B", transition: "all 0.2s" }}>
              Request Education Aid
            </button>
          </div>

          {/* General Form */}
          {activeTab === "general" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "2.5rem" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>Send Us a Message</h2>
              <p style={{ color: "#64748B", fontSize: "14px", marginBottom: "2rem" }}>For general questions, partnership enquiries, or volunteering interest.</p>
              {generalSent ? (
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: "#15803D", fontSize: "16px", marginBottom: "0.5rem" }}>Message Received</div>
                  <p style={{ color: "#64748B", fontSize: "14px" }}>Thank you for reaching out. We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input style={inputStyle} type="text" placeholder="Enter your name" value={generalForm.name} onChange={e => setGeneralForm({ ...generalForm, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input style={inputStyle} type="email" placeholder="Enter your email" value={generalForm.email} onChange={e => setGeneralForm({ ...generalForm, email: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }} placeholder="How can we help you?" value={generalForm.message} onChange={e => setGeneralForm({ ...generalForm, message: e.target.value })} />
                  </div>
                  <button onClick={() => setGeneralSent(true)} style={{ background: "#8B5CF6", color: "white", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", alignSelf: "flex-start" }}>
                    Send Message
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Aid Request Form */}
          {activeTab === "aid" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "2.5rem" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>Request Education Aid</h2>
              <p style={{ color: "#64748B", fontSize: "14px", marginBottom: "2rem", lineHeight: 1.7 }}>
                Please fill in the details below. All information is kept confidential and will only be used to process your request. We will contact you within a few days.
              </p>
              {aidSent ? (
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: "#15803D", fontSize: "16px", marginBottom: "0.5rem" }}>Request Received</div>
                  <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.7 }}>Thank you for submitting your request. We will review it carefully and contact you shortly. Please be assured that your information is treated with complete confidentiality.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "1rem 1.25rem" }}>
                    <p style={{ fontWeight: 600, fontSize: "13px", color: "#7C3AED", margin: 0 }}>Contact Person Details</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle}>Your Name</label>
                      <input style={inputStyle} type="text" placeholder="Parent or guardian name" value={aidForm.name} onChange={e => setAidForm({ ...aidForm, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input style={inputStyle} type="tel" placeholder="Your phone number" value={aidForm.phone} onChange={e => setAidForm({ ...aidForm, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address (optional)</label>
                    <input style={inputStyle} type="email" placeholder="Your email if available" value={aidForm.email} onChange={e => setAidForm({ ...aidForm, email: e.target.value })} />
                  </div>
                  <div style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "1rem 1.25rem", marginTop: "0.5rem" }}>
                    <p style={{ fontWeight: 600, fontSize: "13px", color: "#7C3AED", margin: 0 }}>Child and School Details</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle}>Child's Name</label>
                      <input style={inputStyle} type="text" placeholder="Child's full name" value={aidForm.childName} onChange={e => setAidForm({ ...aidForm, childName: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Grade / Class</label>
                      <input style={inputStyle} type="text" placeholder="e.g. Class 7" value={aidForm.grade} onChange={e => setAidForm({ ...aidForm, grade: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>School Name</label>
                    <input style={inputStyle} type="text" placeholder="Name of the school" value={aidForm.school} onChange={e => setAidForm({ ...aidForm, school: e.target.value })} />
                  </div>
                  <div style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "1rem 1.25rem", marginTop: "0.5rem" }}>
                    <p style={{ fontWeight: 600, fontSize: "13px", color: "#7C3AED", margin: 0 }}>Support Needed</p>
                  </div>
                  <div>
                    <label style={labelStyle}>Type of Support Needed</label>
                    <select style={inputStyle} value={aidForm.needType} onChange={e => setAidForm({ ...aidForm, needType: e.target.value })}>
                      <option value="">Select the type of support</option>
                      <option value="fees">School Fee Support</option>
                      <option value="books">Books and Stationery</option>
                      <option value="uniform">Uniform and Essentials</option>
                      <option value="emergency">Emergency Aid</option>
                      <option value="multiple">Multiple Needs</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Approximate Amount Needed (optional)</label>
                    <input style={inputStyle} type="text" placeholder="e.g. 1500" value={aidForm.amount} onChange={e => setAidForm({ ...aidForm, amount: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Brief Description of Your Situation</label>
                    <textarea style={{ ...inputStyle, minHeight: "130px", resize: "vertical" }} placeholder="Please describe your situation briefly — why you need support and anything else you feel is relevant." value={aidForm.details} onChange={e => setAidForm({ ...aidForm, details: e.target.value })} />
                  </div>
                  <p style={{ color: "#94A3B8", fontSize: "12px", fontStyle: "italic", margin: 0 }}>
                    Your information is kept strictly confidential. We will never share your details with anyone outside the foundation.
                  </p>
                  <button onClick={() => setAidSent(true)} style={{ background: "#8B5CF6", color: "white", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", alignSelf: "flex-start" }}>
                    Submit Request
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Contact Info */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            {[
              { label: "Email", value: "info@aruseerfoundation.org" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Location", value: "Tamil Nadu, India" },
            ].map(item => (
              <div key={item.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ color: "#94A3B8", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#0F172A" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}