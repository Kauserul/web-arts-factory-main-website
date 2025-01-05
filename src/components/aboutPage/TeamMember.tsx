"use client";
import Image from "next/image";
import React from "react";
import * as Icons from "react-icons/fa";

type SocialLink = {
    icon: keyof typeof Icons;
    url: string;
    name: string;
  };
  
  type TeamMember = {
    memberImage: string;
    name: string;
    designation: string;
    socialLinks: SocialLink[];
  };
  
 
const teamMembers:TeamMember[] = [
    {
        "name": "John Doe",
        "designation": "Team Leader",
        "socialLinks": [
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/johndoe",
                "icon": "FaLinkedin"
            },
            {
                "name": "Twitter",
                "url": "https://twitter.com/johndoe",
                "icon": "FaTwitter"
            }
        ],
        "memberImage": "john-doe.jpg"
    },
    {
        "name": "Jane Smith",
        "designation": "UI/UX Designer",
        "socialLinks": [
            {
                "name": "Dribbble",
                "url": "https://dribbble.com/janesmith",
                "icon": "FaDribbble"
            },
            {
                "name": "Behance",
                "url": "https://behance.net/janesmith",
                "icon": "FaBehance"
            }
        ],
        "memberImage": "jane-smith.jpg"
    },
    {
        "name": "Michael Johnson",
        "designation": "Frontend Developer",
        "socialLinks": [
            {
                "name": "GitHub",
                "url": "https://github.com/michaeljohnson",
                "icon": "FaGithub"
            },
            {
                "name": "Twitter",
                "url": "https://twitter.com/michaeljohnson",
                "icon": "FaTwitter"
            }
        ],
        "memberImage": "michael-johnson.jpg"
    },
    {
        "name": "Emily Davis",
        "designation": "Backend Developer",
        "socialLinks": [
            {
                "name": "GitHub",
                "url": "https://github.com/emilydavis",
                "icon": "FaGithub"
            },
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/emilydavis",
                "icon": "FaLinkedin"
            }
        ],
        "memberImage": "emily-davis.jpg"
    },
    {
        "name": "Chris Lee",
        "designation": "Project Manager",
        "socialLinks": [
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/chrislee",
                "icon": "FaLinkedin"
            },
            {
                "name": "Facebook",
                "url": "https://facebook.com/chrislee",
                "icon": "FaFacebook"
            }
        ],
        "memberImage": "chris-lee.jpg"
    },
    {
        "name": "Sophia Brown",
        "designation": "Quality Assurance",
        "socialLinks": [
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/sophiabrown",
                "icon": "FaLinkedin"
            },
            {
                "name": "Twitter",
                "url": "https://twitter.com/sophiabrown",
                "icon": "FaTwitter"
            }
        ],
        "memberImage": "sophia-brown.jpg"
    },
    {
        "name": "Daniel Wilson",
        "designation": "Marketing Specialist",
        "socialLinks": [
            {
                "name": "Instagram",
                "url": "https://instagram.com/danielwilson",
                "icon": "FaInstagram"
            },
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/danielwilson",
                "icon": "FaLinkedin"
            }
        ],
        "memberImage": "daniel-wilson.jpg"
    },
    {
        "name": "Olivia Martin",
        "designation": "Content Writer",
        "socialLinks": [
            {
                "name": "Twitter",
                "url": "https://twitter.com/oliviamartin",
                "icon": "FaTwitter"
            },
            {
                "name": "Medium",
                "url": "https://medium.com/@oliviamartin",
                "icon": "FaMedium"
            }
        ],
        "memberImage": "olivia-martin.jpg"
    }
]

const TeamMember = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <Image
                src={member.memberImage}
                alt={member.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.designation}</p>
              <div className="flex space-x-3 mt-4">
                {member.socialLinks.map((link, i) => {
                  const Icon = Icons[link?.icon];
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 text-lg"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
