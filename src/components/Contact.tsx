import React from "react";

type Profile = {
  name: string;
  title?: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  tagline?: string;
};

interface ContactProps {
  profile: Profile;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <div className="contact-grid">
      <div className="glass-card contact-card">
        <h3>Let’s work together</h3>
        <p className="body-text">
          I’m open to roles in{" "}
          <strong>
            software development, IAM, cloud platforms, and technical
            leadership
          </strong>
          . If you think my profile aligns with your team, I’d love to connect.
        </p>

        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin}
            </a>
          </li>
          <li>
            <span>Location</span>
            <span>{profile.location}</span>
          </li>
        </ul>
      </div>

      <div className="glass-card contact-card">
        <h3>Highlights</h3>
        <ul className="contact-points">
          <li>Multiple performance & client satisfaction awards.</li>
          <li>Experience handling high-priority escalations as Crisis Manager.</li>
          <li>
            Certified in AWS, DevOps, Java full-stack, Python, and Generative AI.
          </li>
          <li>
            Comfortable with both hands-on engineering and people leadership.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
